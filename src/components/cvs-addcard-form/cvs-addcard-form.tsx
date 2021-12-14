import {
  Component,
  Element,
  Event,
  Listen,
  EventEmitter,
  Host,
  h,
  JSX,
  State,
  Prop
} from "@stencil/core";
import {
  FormRenderProps,
  CvsFormEventDetail
} from "@cvsdigital_components/cvs-core/dist/types/components/cvs-form/declarations";
import { VantivResponse } from "@cvsdigital_components/cvs-core/dist/types/components/cvs-vantiv/cvsVantivTypes";
import { ModalEvent } from "@cvsdigital_components/cvs-core/dist/types/components/cvs-modal/cvs-modal";
import { AddCardData } from "./addcard-data";
import { AddCardValues, AlertBannerProps, ValidateEvent } from "./addcard-types";
import { CvsData } from "../../api/cvsData";
import { BillingInfo } from "../../api/types";

declare global {
  interface Window {
    eProtectCB: any;
    eProtectInputsEmptyCB: any;
  }
}

@Component({
  tag: "cvs-addcard-form",
  styleUrl: "cvs-addcard-form.scss",
  shadow: false
})
export class CvsAddcardForm {
  /**
   * boolean to control which "success" event is acted upon
   */
  private cancelModalActive: boolean = false;
  @Element() el!: HTMLCvsAddcardFormElement;

  @State() formValid: boolean = false;
  @State() formValues: AddCardValues = AddCardData.initialValues;
  @State() apiFailure: boolean = false;

  /** userId token passed from url param */
  @Prop() readonly token!: string;

  /** noCard passed from url param */
  @Prop() readonly noCard!: string;

  /** noValidCard passed from url param */
  @Prop() readonly noValidCard!: string;

  /**
   * Custom event emitted when card successfully added
   * @emits string
   */
  @Event() cardAdded: EventEmitter<void>;
  private readonly cardAddedHandler = () => {
    this.cardAdded.emit();
  };

  /**
   * Custom event emitter to indicate validation process
   * and trigger loader status
   * @emits ValidateEvent
   */
  @Event() isValidating: EventEmitter<ValidateEvent>;
  private readonly isValidatingHandler = (isValidating: boolean) => {
    this.isValidating.emit({ isValidating });
  };

  componentWillLoad() {
    window.eProtectCB = this.eProtectCB;
  }

  /**
   * Calls add-card API
   * @param vantivRes @private @readonly
   * @returns Promise<void>
   */
  private readonly addCard = async (vantivRes: VantivResponse) => {
    const { token, formValues: values, formValid, cardAddedHandler, isValidatingHandler } = this;
    if (!formValid) {
      isValidatingHandler(false);
      return;
    }
    const billingInfo: BillingInfo = {
      ccNum: vantivRes.paypageRegistrationId,
      ccExpDate: btoa(`${vantivRes.expMonth}${vantivRes.expYear}`),
      ccType: vantivRes.type, // need string literal types for BillingInfo
      firstName: values.fName,
      lastName: values.lName,
      address1: values.address1,
      address2: values.address2,
      city: values.city,
      state: values.state,
      zip: values.zip,
      country: "US",
      makeDefaultFlag: "N",
      saveCardForFutureFlag: "N",
      isFsaCard: values.cardType === "FSA" ? "Y" : "N",
      token: "true",
      accountRangeId: vantivRes?.accountRangeId || null,
      bin: vantivRes?.bin || "",
      paymentType: "creditCard", // need string literal types
      isCCLowToken: "Y"
    };
    const id = decodeURIComponent(token) === token ? encodeURIComponent(token) : token;
    try {
      const res = await CvsData.addUserCard(id, billingInfo);
      isValidatingHandler(false);
      if (res?.header?.statusDesc === "SUCCESS") {
        cardAddedHandler();
      } else {
        this.apiFailure = true;
      }
    } catch (error) {
      this.apiFailure = true;
      console.error(error);
    }
  };

  /**
   * @param res @private @readonly
   * Callback triggered by eProtect/Vantiv
   */
  private readonly eProtectCB = (res: VantivResponse) => {
    if (res.timeout) this.apiFailure = true;
    if (res.response === "870") {
      this.addCard(res);
    } else {
      //TODO: Vantiv error handling. TBD w/ UX/a11y
      this.apiFailure = true; // TODO: remove after implementing Vantiv error handling
      this.isValidatingHandler(false);
    }
  };

  /**
   * onClick notify next.js app to router.push() to appropriate add-card page
   */
  @Event() cancelRedirect!: EventEmitter;
  private readonly cancelRedirectHandler = () => {
    this.cancelModalActive = false;
    this.cancelRedirect.emit();
  };

  /**
   * @listens: modalEvent
   * @description: gets executed once the modalEvent event is fired from cvs-modal component
   * @returns: global Promise<any>
   */
  @Listen("modalEvent", { target: "body" })
  cancelAddCard(event: CustomEvent<ModalEvent>): void {
    event.preventDefault();
    if (this.cancelModalActive) {
      if (event.detail === "success") {
        this.cancelRedirectHandler();
      } else {
        setTimeout(() => {
          this.cancelModalActive = false;
          const modal = document.getElementsByTagName("cvs-modal");
          if (modal?.length === 1) {
            modal[0].remove();
          }
        }, 0);
      }
    }
  }

  /**
   * @private: openCancelModal
   **/
  private openCancelModal = (e: Event) => {
    e.preventDefault();
    this.cancelModalActive = true;
    const modal = document.createElement("cvs-modal");
    const modalData = {
      type: "column",
      title: '<span class="bold black">You have unsaved changes</span>',
      subText:
        '<p class="">Are you sure you want to delete the changes to your payment method?</p>',
      buttons: {
        primary: {
          text: "Yes, delete changes",
          customEvent: "discard"
        },
        secondary: {
          text: "Continue editing card details"
        }
      },
      maxWidth: 320
    };

    modal.data = modalData;
    document.body.appendChild(modal);
  };

  /**
   * Builds props for cvs-alert-banner
   * @param props @returns @private @readonly
   */
  private readonly buildAlertBannerProps = (
    props: FormRenderProps<AddCardValues>
  ): AlertBannerProps => {
    const elementIdArray: string[] = [];
    this.el.querySelectorAll("input").forEach((inputEl) => elementIdArray.push(inputEl.id));
    this.el.querySelectorAll("select").forEach((selectEl) => elementIdArray.push(selectEl.id));
    const actions = Object.entries(props.errors)
      .filter(([key, val]) => val.length > 0 && elementIdArray.find((str) => str.includes(key)))
      .map(([key, val]) => ({
        "link-text": val,
        "link-input-id": elementIdArray.find((str) => str.includes(key))
      }));
    return {
      alertType: "error",
      targetComponent: {
        component: {
          "name": this.el.tagName.toLowerCase(),
          "id": this.el.id,
          "is-shadow": !!this.el.shadowRoot
        }
      },
      actions
    };
  };

  /**
   * Suppresses non-numeric keys when typing in numeric form el
   * @private @readonly @param event
   */
  private readonly numericOnly = (event: KeyboardEvent): void => {
    const regex = /[0-9]/;
    if (!regex.test(event.key)) event.preventDefault();
  };

  /**
   * Initiates Vantiv call
   * @returns Promise<void> @private @readonly
   */
  private readonly validateCard = (): Promise<void> =>
    new Promise((resolve, reject) => {
      try {
        this.isValidatingHandler(true);
        const message = { id: String(Date.now()) };
        resolve(eProtectiframeClient.getPaypageRegistrationId(message));
      } catch (error) {
        this.isValidatingHandler(false);
        this.apiFailure = true;
        console.error(error);
        reject(error);
      }
    });

  /**
   * Triggers submit process
   * @private @readonly
   */
  private readonly triggerSubmit = async () => {
    this.formValid = false;
    this.apiFailure = false;
    await this.validateCard();
  };

  /**
   * Form submit handler
   * @param event @private @readonly
   */
  private readonly handleSubmit = (event: CustomEvent<CvsFormEventDetail>) => {
    const {
      values,
      actions: { setSubmitting }
    } = event.detail;
    this.formValid = true;
    this.formValues = values as AddCardValues;
    setSubmitting(false);
  };

  /**
   * Renders the form's JSX
   * @param props @returns JSX.Element
   */
  private readonly renderer = (props: FormRenderProps<AddCardValues>): JSX.Element => {
    const {
      formProps,
      checkboxProps,
      groupProps,
      labelProps,
      radioProps,
      inputProps,
      selectProps,
      errors
    } = props;
    const { states, labels, vantivConfig } = AddCardData;
    const hasErrors = Object.values(errors).some((val) => val.length > 0);

    return (
      <div class="form-container">
        {!hasErrors && this.apiFailure && (
          <cvs-alert-banner alertType="error">
            <h2 slot="title">We're sorry</h2>
            <div slot="description">
              <p>We can’t complete your request right now due to technical issues.</p>
              <p>Please try again</p>
            </div>
          </cvs-alert-banner>
        )}
        {hasErrors && (
          <cvs-alert-banner {...this.buildAlertBannerProps(props)}>
            <h2 slot="title">Info missing</h2>
            <span slot="description">Please correct these errors.</span>
          </cvs-alert-banner>
        )}
        {this.noCard === "true" && !hasErrors && !this.apiFailure && (
          <cvs-alert-banner alertType="warning">
            <h2 slot="title">Payment method needed</h2>
            <div slot="description">
              <p>
                There is no payment information on file for your account. Please add a new payment
                method.
              </p>
            </div>
          </cvs-alert-banner>
        )}
        {this.noCard !== "true" && this.noValidCard === "true" && !hasErrors && !this.apiFailure && (
          <cvs-alert-banner alertType="warning">
            <h2 slot="title">Expired cards</h2>
            <div slot="description">
              <p>
                There is no valid payment information on file for your account. Please add a new (or
                update an expired) payment method to submit your payment.
              </p>
            </div>
          </cvs-alert-banner>
        )}
        <p id="formInst">All fields required unless marked optional.</p>
        <form {...formProps} noValidate aria-describedby="formInst">
          <section role="group">
            <h2>Card Information</h2>
            <cvs-fieldset legendText={labels.cardType} fieldsetProps={groupProps("cardType")}>
              <cvs-radio-button
                label="Credit card"
                radioProps={radioProps("cardType", "CC")}
                labelProps={labelProps("cardType", "CC")}
              />
              <cvs-radio-button
                label="FSA/HSA"
                radioProps={radioProps("cardType", "FSA")}
                labelProps={labelProps("cardType", "FSA")}
              />
            </cvs-fieldset>
            <cvs-vantiv slot="vantiv" vantivConfig={vantivConfig} /> {/* vantiv-form slot */}
          </section>
          <section role="group">
            <h2 class="billing-address-heading">Billing address</h2>
            <cvs-text-input
              groupProps={groupProps("fName")}
              inputProps={{ ...inputProps("fName"), autoComplete: "given-name", maxlength: 33 }}
              labelProps={labelProps("fName")}
              errorText={errors.fName}
              label={labels.fName}
              required
            />
            <cvs-text-input
              groupProps={groupProps("mName")}
              inputProps={{
                ...inputProps("mName"),
                autoComplete: "additional-name",
                maxlength: 33
              }}
              labelProps={labelProps("mName")}
              errorText={errors.mName}
              label={labels.mName}
            />
            <cvs-text-input
              groupProps={groupProps("lName")}
              inputProps={{ ...inputProps("lName"), autoComplete: "family-name", maxlength: 33 }}
              labelProps={labelProps("lName")}
              errorText={errors.lName}
              label={labels.lName}
              required
            />
            <cvs-text-input
              groupProps={groupProps("address1")}
              inputProps={{
                ...inputProps("address1"),
                autoComplete: "address-line1",
                maxlength: 35
              }}
              labelProps={labelProps("address1")}
              errorText={errors.address1}
              label={labels.address1}
              required
            />
            <cvs-text-input
              groupProps={groupProps("address2")}
              inputProps={{
                ...inputProps("address2"),
                autoComplete: "address-line2",
                maxlength: 35
              }}
              labelProps={labelProps("address2")}
              errorText={errors.address2}
              label={labels.address2}
            />
            <cvs-text-input
              groupProps={groupProps("city")}
              inputProps={{ ...inputProps("city"), autoComplete: "address-level2" }}
              labelProps={labelProps("city")}
              errorText={errors.city}
              label={labels.city}
              required
            />
            <cvs-select
              label={labels.state}
              placeholder="Select"
              errorText={errors.state}
              groupProps={groupProps("state")}
              labelProps={labelProps("state")}
              selectProps={{ ...selectProps("state"), autoComplete: "address-level1" }}
              states={states}
              required
            />
            <cvs-text-input
              id="zip-code"
              groupProps={groupProps("zip")}
              inputProps={{
                ...inputProps("zip"),
                onKeyPress: this.numericOnly,
                size: 5,
                maxlength: 5,
                pattern: "[0-9]{5}",
                inputMode: "numeric",
                autoComplete: "postal-code"
              }}
              labelProps={labelProps("zip")}
              errorText={errors.zip}
              label={labels.zip}
              required
            />
          </section>
          <section role="group">
            <h2>Legal authorization</h2>
            <p id="authInst">
              Note: By entering your personal and payment information through your CVS.com account
              you authorize CVS Pharmacy on behalf of MinuteClinic to store this information to be
              used for any remaining balance after your insurance plan has paid its portion of your
              visit.
            </p>
            <cvs-card-auth />
            <cvs-fieldset
              class="authorization"
              legendText={""}
              fieldsetProps={groupProps("authorization")}
              errorText={errors.authorization}
            >
              <cvs-checkbox
                class="checkbox"
                label={labels.authorization}
                groupProps={groupProps("authorization")}
                checkboxProps={{
                  ...checkboxProps("authorization"),
                  "aria-describedby": "authInst"
                }}
                labelProps={labelProps("authorization")}
              />
            </cvs-fieldset>
          </section>
          <button class="button primary" onClick={this.triggerSubmit}>
            Add payment method
          </button>
        </form>
        <a class="cancel-add" href="javascript:void(0)" onClick={this.openCancelModal}>
          Cancel
        </a>
      </div>
    );
  };

  render() {
    const { renderer } = this;
    const { initialValues, validationSchema } = AddCardData;
    return (
      <Host id="add-card">
        <cvs-form
          initialValues={initialValues}
          validationSchema={validationSchema()}
          renderer={renderer}
          validateOnBlur={false}
          validateOnInput={false}
          onSubmit={this.handleSubmit}
        >
          <slot name="vantiv" slot="vantiv-form" />
        </cvs-form>
      </Host>
    );
  }
}
