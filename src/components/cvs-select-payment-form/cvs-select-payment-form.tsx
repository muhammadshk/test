import { CvsCardSummaryProps } from "../cvs-card-summary/cvs-card-summary";
import { Component, Host, h, JSX, Prop, Event, EventEmitter, State } from "@stencil/core";
import {
  FormRenderProps,
  CvsFormEventDetail
} from "@cvsdigital_components/cvs-core/dist/types/components/cvs-form/declarations";
import { SelectCardData } from "./select-card-data";
import { SelectCardValues } from "./select-card-types";
import { CvsData } from "../../api/cvsData";

export interface AlertBannerProps {
  alertType: "error";
  actions: Action[];
}

export interface Action {
  "link-text": string;
  "link-URL": string;
}

export interface CvsSelectPaymentFormProps {
  subText?: string;
  userId: string;
  validCards?: CvsCardSummaryProps[];
  myChartUrl?: string;
}
@Component({
  tag: "cvs-select-payment-form",
  styleUrl: "cvs-select-payment-form.scss",
  shadow: true
})
export class CvsSelectPaymentForm {
  @State() selectedCardError: string = "";
  @State() apiFailure: boolean;
  /**
   * url to be passed to error banner to redirect to mychart
   */
  @Prop() readonly myChartUrl?: string;
  /**
   * legend to display in the select card form
   */
  @Prop() readonly subText?: string;
  /**
   * encrypted user id
   */
  @Prop() readonly userId?: string;
  /**
   * show continue button
   * default to true
   */
  @Prop() readonly showContinue?: boolean = true;
  /**
   * list of valid cards to display
   */
  @Prop() readonly validCards?: CvsCardSummaryProps[];
  /**
   * event emitter
   * handles redirect for user after card selection
   * @param event @private @readonly
   */
  @Event() cardSelect: EventEmitter;
  private readonly cardSelectedHandler = () => {
    this.cardSelect.emit();
  };
  /**
   *
   * @param event
   */
  @Event() cardChangeEvent: EventEmitter;
  private readonly handleCardChange = (card) => {
    this.cardChangeEvent.emit(card);
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
    const { validCards, cardSelectedHandler } = this;
    if (validCards && this.userId) {
      let selectedCard;
      validCards.forEach((card) => {
        if (card.cardId === values.selectCard) {
          selectedCard = { ...card };
        }
      });
      CvsData.selectUserCard(this.userId, selectedCard.cardId, selectedCard.cardNum)
        .then((res) => {
          if (res.response.header.statusCode === "0000") {
            cardSelectedHandler();
            this.apiFailure = false;
          } else {
            this.selectedCardError = selectedCard.cardId;
            this.apiFailure = true;
          }
          setSubmitting(false);
        })
        .catch((e) => {
          console.error(e);
          setSubmitting(false);
        });
    }
  };
  /**
   * Renders the form's JSX
   * @param props
   * @returns
   */
  private readonly renderer = (props: FormRenderProps<SelectCardValues>): JSX.Element => {
    const { formProps, groupProps, labelProps, radioProps, values } = props;
    const { labels } = SelectCardData;
    return (
      <div class="form-container">
        {this.apiFailure && (
          <cvs-alert-banner
            {...{
              alertType: "error",
              actions: [
                {
                  "link-text": "Return to MyChart",
                  "link-URL": this.myChartUrl
                }
              ]
            }}
          >
            <h2 slot="title">We're Sorry</h2>
            <p slot="description">Something went wrong with this payment method.</p>
            <p class="bottom-paragraph " slot="description">
              You can try selecting another payment method now or pay when you arrive at your
              appointment
            </p>
          </cvs-alert-banner>
        )}
        <form {...formProps} noValidate aria-describedby="formInst">
          <section role="group">
            <fieldset {...groupProps("selectCard")}>
              <legend>{labels?.selectCard}</legend>
              {this.validCards?.map((card, index) => (
                <div>
                  <cvs-radio-button
                    role="group"
                    radioProps={{ ...radioProps("selectCard", card?.cardId) }}
                    labelProps={{ ...labelProps("selectCard", card?.cardId) }}
                    onChange={() => this.handleCardChange(card)}
                    slotClass={`card ${index > 0 ? "after-first" : ""} ${
                      this.selectedCardError === card.cardId ? "error-card" : "valid-card"
                    }`}
                    errorDisplay={this.selectedCardError === card.cardId}
                  >
                    <cvs-card-summary {...card} active={card?.cardId === values?.selectCard} />
                  </cvs-radio-button>
                  {this.selectedCardError === card.cardId && (
                    <cvs-form-error
                      text={"Select a different payment method"}
                      class="textinput-error"
                    />
                  )}
                </div>
              ))}
            </fieldset>
          </section>
          {this.showContinue && (
            <button class="locator-button primary" type="submit">
              Continue
            </button>
          )}
        </form>
      </div>
    );
  };

  render() {
    const { renderer } = this;
    const { initialValues } = SelectCardData;
    return (
      <Host id="select-card">
        <cvs-form
          initialValues={initialValues(this?.validCards[0]?.cardId)}
          renderer={renderer}
          validateOnBlur={false}
          validateOnInput={false}
          onSubmit={this.handleSubmit}
        ></cvs-form>
      </Host>
    );
  }
}
