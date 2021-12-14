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
  Prop,
  Watch,
  Fragment
} from "@stencil/core";
import amexIcon from "./assets/amex-sm.svg";
import dinersClubIcon from "./assets/diners-club.svg";
import discoverIcon from "./assets/discover.svg";
import mastercardIcon from "./assets/mastercard.svg";
import visaIcon from "./assets/visa.svg";
import bankCardIcon from "./assets/bank-card.svg";
import {
  FormRenderProps,
  CvsFormEventDetail
} from "@cvsdigital_components/cvs-core/dist/types/components/cvs-form/declarations";
import { VantivResponse } from "@cvsdigital_components/cvs-core/dist/types/components/cvs-vantiv/cvsVantivTypes";
import { ModalEvent } from "@cvsdigital_components/cvs-core/dist/types/components/cvs-modal/cvs-modal";
import { EditCardData } from "./editcard-data";
import { EditCardValues, AlertBannerProps, ValidateEvent } from "./editcard-types";
import { CvsData } from "../../api/cvsData";

declare global {
  interface Window {
    eProtectCB: any;
    eProtectInputsEmptyCB: any;
  }
}

@Component({
  tag: "cvs-editcard-form",
  styleUrl: "cvs-editcard-form.scss",
  shadow: false
})
export class CvsEditPaymentForm {
  /**
   * boolean to control which "success" event is acted upon
   */
  private cancelModalActive: boolean = false;
  @Element() el!: HTMLCvsEditcardFormElement;

  @State() formValid: boolean = false;
  @State() formValues: EditCardValues = EditCardData.initialValues;
  @State() apiFailure: boolean = false;

  /** userId token passed from url param */
  @Prop() readonly token!: string;

  /** noCard passed from url param */
  @Prop() readonly noCard!: string;

  /** noValidCard passed from url param */
  @Prop() readonly noValidCard!: string;

  /** editCard passed as prop which decides that the form will be using as edit payment card without vantiv or add payment option with vantiv but without hsa/fsa option*/
  @Prop() readonly editCard?: EditCardValues | string;

  private _editCard: EditCardValues;
  private mobileInput!: HTMLElement;
  private monthInput: HTMLCvsSelectElement;
  private yearInput: HTMLCvsSelectElement;
  private stateInput: HTMLCvsSelectElement;
  private alertBanner?: HTMLElement;
  private showSpinner: boolean;
  /**
   * @event editCard
   * @description event emitter for editCard event
   */
  @Event() handleAddEvent!: EventEmitter<any>; /**



  /**
   *Test input for numeric value
   */
  private readonly handleNumeric = (event: KeyboardEvent): void => {
    const regex = /[0-9]/;
    if (!regex.test(event.key)) event.preventDefault();
  };

  /**
   * format mobile number on delete
   * @param event
   */

  private readonly formatOnDelete = (event: KeyboardEvent): void => {
    if (event.key === "Backspace") {
      let mobileNo = this.mobileInput.getElementsByTagName("input")[0].value;
      this.mobileInput.getElementsByTagName("input")[0].value = mobileNo.replace(/\D/g, "");
    }
  };

  /**
   * Format mobile number
   */
  private readonly format = (): void => {
    let mobileNo = this.mobileInput.getElementsByTagName("input")[0].value;
    const match = mobileNo.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      const intlCode = match[1] ? "1 " : "";
      this.mobileInput.getElementsByTagName("input")[0].value = [
        intlCode,
        "(",
        match[2],
        ") ",
        match[3],
        "-",
        match[4]
      ].join("");
    }
  };

  private readonly formatPhoneNumber = (phoneNumberString) => {
    var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }
    return null;
  };

  componentDidLoad() {
    if (this.monthInput && this.yearInput && this.stateInput) {
      this.monthInput.getElementsByTagName("select")[0].value = this._editCard.month;
      this.yearInput.getElementsByTagName("select")[0].value = this._editCard.year;
      this.stateInput.getElementsByTagName("select")[0].value = this._editCard.state;
    }
  }

  @Watch("editCard")
  editCardWatcher(): void {
    if (typeof this.editCard === "string") {
      try {
        this._editCard = JSON.parse(this.editCard);
      } catch (e) {
        console.warn("Error in parsing the new data");
      }
    } else {
      this._editCard = this.editCard;
    }
  }

  /**
   * @event editCard
   * @description event emitter for editCard event
   */
  @Event() handleEditEvent!: EventEmitter<EditCardValues>;

  private readonly expDateConverter = (month: string, year: string) => {
    switch (month) {
      case "January":
        month = "01";
        break;
      case "February":
        month = "02";
        break;
      case "March":
        month = "03";
        break;
      case "April":
        month = "04";
        break;
      case "May":
        month = "05";
        break;
      case "June":
        month = "06";
        break;
      case "July":
        month = "07";
        break;
      case "August":
        month = "08";
        break;
      case "September":
        month = "09";
        break;
      case "October":
        month = "10";
        break;
      case "November":
        month = "11";
        break;
      case "December":
        month = "12";
        break;
      default:
        break;
    }
    const date = month + year[2] + year[3];
    return btoa(date);
  };

  private readonly mobileNumberFormatter = (number: string) => {
    var cleaned = ("" + number).replace(/\D/g, "");
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return match[1] + "-" + match[2] + "-" + match[3];
    }
    return null;
  };

  /**
   * @private: handleEdit
   * @param: (e: Event, card: cvsCardSummaryProps)
   * @description: calls handleEditEvent emitter
   */
  private readonly handleEdit = async (e: Event, card: EditCardValues) => {
    e.preventDefault();
    const { isValidatingHandler } = this;
    if (card.mobile && card.mobile[0] === "(") {
      card.mobile = this.mobileNumberFormatter(card.mobile);
    }
    let expDate = this.expDateConverter(card.month, card.year);
    const cardInfo = {
      paymentId: card.paymentId,
      paymentType: card.cardType,
      firstName: card.fName,
      middleName: card.mName,
      lastName: card.lName,
      address1: card.address1,
      address2: card.address2,
      city: card.city,
      state: card.state,
      zip: card.zip,
      phoneNumber: card.mobile,
      addtoShipAddress: "N",
      defaultBillingAddressFlag: "N",
      ccType: card.cardLogo,
      ccExpDate: expDate,
      bin: "",
      isCCLowToken: "false",
      serviceFlow: "accountManagement",
      carePassEnrolled: card.carePassEnrolled
    };
    try {
      const res = await CvsData.savePaymentInfo(cardInfo);
      isValidatingHandler(false);
      this.showSpinner = false;
      if (res && res?.header?.statusCode === "0000") {
        this.handleEditEvent.emit(res?.header?.statusCode);
      } else {
        this.apiFailure = true;
        this.handleEditEvent.emit(res?.header?.statusCode);
      }
    } catch (error) {
      this.apiFailure = true;
      this.showSpinner = false;
      console.error(error);
      this.handleEditEvent.emit(error);
    }
  };

  /**
   * event emitter
   * fires when errors are present in form
   */
  @Event() formErrorEvt: EventEmitter;

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
    this.editCardWatcher();
    window.eProtectCB = this.eProtectCB;
  }

  @State() error: boolean;

  componentDidUpdate() {
    if (this.alertBanner && (this.error || this.apiFailure)) {
      this.alertBanner.focus();
      if (this.apiFailure) {
        this.formErrorEvt.emit({
          apiFailure: this.apiFailure
        });
      }
    }
  }

  /**
   * Calls add-card API
   * @param vantivRes @private @readonly
   * @returns Promise<void>
   */
  private readonly AddCard = async (vantivRes: VantivResponse) => {
    const { formValues: values, formValid, isValidatingHandler } = this;
    if (!formValid) {
      isValidatingHandler(false);
      return;
    }
    const billingInfo: any = {
      paymentId: "",
      paymentType: "",
      firstName: values.fName,
      lastName: values.lName,
      address1: values.address1,
      address2: values.address2,
      city: values.city,
      state: values.state,
      zip: values.zip,
      middleName: "",
      nickName: "",
      addressBookId: "",
      phoneNumber: this.mobileNumberFormatter(values.mobile),
      addtoShipAddress: "N",
      defaultBillingAddressFlag: "N",
      ccNum: vantivRes.paypageRegistrationId,
      ccExpDate: btoa(`${vantivRes.expMonth}${vantivRes.expYear}`),
      bin: vantivRes.bin,
      isCCLowToken: "true",
      serviceFlow: "accountManagement",
      carePassEnrolled: "N"
    };
    try {
      const res = await CvsData.savePaymentInfo(billingInfo);
      isValidatingHandler(false);
      if (res?.header?.statusCode === "0000") {
        this.showSpinner = false;
        this.handleAddEvent.emit(res?.header?.statusCode);
      } else {
        this.apiFailure = true;
        this.showSpinner = false;
        this.handleAddEvent.emit(res?.header?.statusCode);
      }
    } catch (error) {
      this.apiFailure = true;
      this.showSpinner = false;
      this.handleAddEvent.emit(error);
    }
  };

  /**
   * @param res @private @readonly
   * Callback triggered by eProtect/Vantiv
   */
  private readonly eProtectCB = (res: VantivResponse) => {
    if (res.timeout) this.apiFailure = true;
    if (res.response === "870") {
      this.AddCard(res);
    } else {
      //TODO: Vantiv error handling. TBD w/ UX/a11y
      this.apiFailure = true; // TODO: remove after implementing Vantiv error handling
      this.isValidatingHandler(false);
    }
  };

  /**
   * onClick notify next.js app to router.push() to appropriate edit-card page
   */
  @Event() cancelRedirect!: EventEmitter;
  private readonly cancelRedirectHandler = () => {
    setTimeout(() => {
      this.cancelModalActive = false;
      const modal = document.getElementsByTagName("cvs-modal");
      if (modal?.length === 1) {
        modal[0].remove();
      }
    }, 0);
    this.cancelRedirect.emit();
  };

  /**
   * @listens: modalEvent
   * @description: gets executed once the modalEvent event is fired from cvs-modal component
   * @returns: global Promise<any>
   */
  @Listen("modalEvent", { target: "body" })
  cancelEditCard(event: CustomEvent<ModalEvent>): void {
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
    props: FormRenderProps<EditCardValues>
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
    if (this.alertBanner) this.alertBanner.focus();
    this.formValid = false;
    this.apiFailure = false;
    if (!this.editCard) await this.validateCard();
  };

  /**
   * Form submit handler
   * @param event @private @readonly
   */
  private readonly handleSubmit = (event: CustomEvent<CvsFormEventDetail>) => {
    this.showSpinner = true;
    const {
      values,
      actions: { setSubmitting }
    } = event.detail;
    this.formValid = true;
    this.formValues = values as EditCardValues;
    setSubmitting(false);
    if (this.editCard) this.handleEdit(event, this.formValues);
    if (this.error) this.showSpinner = false;
  };

  private focusField = (field) => {
    return (e: Event) => {
      e.preventDefault();
      switch (field) {
        case "apiError":
          document
            .querySelector("cvs-editcard-form")
            .querySelector("cvs-form")
            .querySelector("form")
            .querySelector("button")
            .focus();
          break;
        default:
          return;
      }
    };
  };

  /**
   * Renders the form's JSX
   * @param props @returns JSX.Element
   */
  private readonly renderer = (props: FormRenderProps<EditCardValues>): JSX.Element => {
    const {
      formProps,
      checkboxProps,
      groupProps,
      labelProps,
      inputProps,
      selectProps,
      errors
    } = props;
    const { months, years, states, labels, vantivConfig } = EditCardData;
    const hasErrors = Object.values(errors).some((val) => val.length > 0);
    if (hasErrors) {
      this.formErrorEvt.emit(errors);
    }
    this.error = hasErrors || this.apiFailure;
    let cardIcon: string;
    let cardAltTxt: string;
    if (this._editCard) {
      switch (this._editCard.cardLogo?.toLowerCase()) {
        case "visa":
          cardIcon = visaIcon;
          cardAltTxt = "visa";
          break;
        case "mastercard":
          cardIcon = mastercardIcon;
          cardAltTxt = "mastercard";
          break;
        case "dinners-club":
          cardIcon = dinersClubIcon;
          cardAltTxt = "dinners club";
          break;
        case "discover":
          cardIcon = discoverIcon;
          cardAltTxt = "discover";
          break;
        case "americanexpress":
          cardIcon = amexIcon;
          cardAltTxt = "american express";
          break;
        default:
          cardIcon = bankCardIcon;
          cardAltTxt = this._editCard && this._editCard.cardLogo;
      }
    }

    return (
      <div class="form-container">
        {this.showSpinner && <cvs-loading-spinner class="spinner" />}
        {hasErrors && (
          <cvs-alert-banner
            {...this.buildAlertBannerProps(props)}
            role="alert"
            tabIndex={0}
            ref={(el) => {
              this.alertBanner = el as HTMLElement;
            }}
          >
            <h2 slot="title">Please correct the following error(s)</h2>
          </cvs-alert-banner>
        )}
        {!hasErrors && this.apiFailure && (
          <cvs-alert-banner
            alertType="error"
            role="alert"
            tabIndex={0}
            ref={(el) => {
              this.alertBanner = el as HTMLElement;
            }}
          >
            <h2 slot="title">We're sorry</h2>
            <div slot="description">
              <p>We can’t complete your request right now due to technical issues.</p>
              <a href="" class="error-link" onClick={this.focusField("apiError")}>
                Please try again.
              </a>
            </div>
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
            <h2>Card information</h2>
            {this._editCard ? (
              <Fragment>
                <h3>Credit card number</h3>
                <div class="card-basic">
                  <img src={cardIcon} alt={cardAltTxt} />
                  <label>
                    <span aria-hidden="true">
                      •••• •••• •••• &nbsp;{this._editCard && this._editCard.cardNum}
                    </span>
                  </label>
                </div>
                <h3>Card expiration date</h3>
                <cvs-select
                  label={labels.month}
                  placeholder="Select"
                  errorText={errors.month}
                  groupProps={groupProps("month")}
                  labelProps={labelProps("month")}
                  selectProps={{
                    ...selectProps("month"),
                    autoComplete: "month"
                  }}
                  ref={(el) => (this.monthInput = el as HTMLCvsSelectElement)}
                  states={months}
                />
                <cvs-select
                  label={labels.year}
                  placeholder="Select"
                  errorText={errors.year}
                  groupProps={groupProps("year")}
                  labelProps={labelProps("year")}
                  selectProps={{
                    ...selectProps("year"),
                    autoComplete: "year"
                  }}
                  ref={(el) => (this.yearInput = el as HTMLCvsSelectElement)}
                  states={years}
                />
              </Fragment>
            ) : (
              <cvs-vantiv slot="vantiv" vantivConfig={vantivConfig} />
            )}
          </section>
          <section role="group">
            <h2 class="billing-address-heading">Billing address</h2>
            <cvs-text-input
              groupProps={groupProps("fName")}
              inputProps={{
                ...inputProps("fName"),
                autoComplete: "given-name",
                maxlength: 33,
                value: this._editCard && this._editCard.fName
              }}
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
                maxlength: 33,
                value: this._editCard && this._editCard.mName
              }}
              labelProps={labelProps("mName")}
              errorText={errors.mName}
              label={labels.mName}
            />
            <cvs-text-input
              groupProps={groupProps("lName")}
              inputProps={{
                ...inputProps("lName"),
                autoComplete: "family-name",
                maxlength: 33,
                value: this._editCard && this._editCard.lName
              }}
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
                maxlength: 35,
                value: this._editCard && this._editCard.address1
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
                maxlength: 35,
                value: this._editCard && this._editCard.address2
              }}
              labelProps={labelProps("address2")}
              errorText={errors.address2}
              label={labels.address2}
            />
            <cvs-text-input
              groupProps={groupProps("city")}
              inputProps={{
                ...inputProps("city"),
                autoComplete: "address-level2",
                value: this._editCard && this._editCard.city
              }}
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
              selectProps={{
                ...selectProps("state"),
                autoComplete: "address-level1"
              }}
              ref={(el) => (this.stateInput = el as HTMLCvsSelectElement)}
              states={states}
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
                autoComplete: "postal-code",
                value: this._editCard && this._editCard.zip
              }}
              labelProps={labelProps("zip")}
              errorText={errors.zip}
              label={labels.zip}
              required
            />
            <cvs-text-input
              id="mobile-number"
              groupProps={groupProps("mobile")}
              inputProps={{
                ...inputProps("mobile"),
                onkeypress: this.handleNumeric,
                onkeydown: this.formatOnDelete,
                onblur: this.format,
                maxLength: "10",
                inputMode: "numeric",
                value: this._editCard && this.formatPhoneNumber(this._editCard.mobile)
              }}
              ref={(el) => {
                this.mobileInput = el as HTMLElement;
              }}
              labelProps={labelProps("mobile")}
              errorText={errors.mobile}
              label={labels.mobile}
              required
            />
          </section>
          {!this._editCard && (
            <section role="group">
              <h2>Legal authorization</h2>
              <p id="authInst">
                Note: By entering your personal and payment information through your CVS.com account
                you authorize CVS Pharmacy on behalf of MinuteClinic to store this information to be
                used for any remaining balance after your insurance plan has paid its portion of
                your visit.
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
          )}
          <button class="button primary" onClick={this.triggerSubmit} id="submit-btn">
            {this._editCard ? "Save changes" : "Add payment method"}
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
    const { initialValues, validationSchema } = EditCardData;
    return (
      <Host id="add-card">
        <cvs-form
          initialValues={this._editCard ? this._editCard : initialValues}
          validationSchema={validationSchema()}
          renderer={renderer}
          validateOnBlur={false}
          validateOnInput={false}
          onSubmit={this.handleSubmit}
        >
          {!this._editCard && <slot name="vantiv" slot="vantiv-form" />}
        </cvs-form>
      </Host>
    );
  }
}
