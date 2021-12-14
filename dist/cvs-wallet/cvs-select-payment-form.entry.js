import { r as registerInstance, e as createEvent, h, f as Host } from './index-6c675c57.js';
import { C as CvsData } from './cvsData-1eeb4129.js';
import './_commonjsHelpers-2088bffa.js';

class SelectCardData {
}
SelectCardData.initialValues = (val) => ({
  selectCard: val
});
SelectCardData.labels = {
  selectCard: "Select a payment method."
};

const cvsSelectPaymentFormCss = ":host{display:block;font-family:\"Helvetica\", \"Arial\", sans-serif}@media (min-width: 481px){:host{max-width:320px;margin:auto}}:host .card{box-sizing:border-box;border-radius:12px;background-color:white;box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.1);margin-bottom:8px;padding:16px;display:inline-flex;width:100%}:host .valid-card{border:1px solid #ccc}:host .error-card{border:3px solid #cc0000}:host cvs-radio-button .after-first{margin-top:8px}:host cvs-radio-button input:checked+label:after{top:1.25rem;left:1.25rem}:host button{appearance:none;border:0;width:100%;margin-top:8px;display:flex;justify-content:center;align-items:center;background-color:#cc0000;text-decoration:none;font-size:14px;font-weight:bold;color:white;height:48px;line-height:18px;border-radius:12px;box-shadow:inset 0 -2px 0 0 #a50000, 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.1)}:host h2{color:#000;font-size:18px;font-weight:bold;letter-spacing:0;line-height:18px;margin-bottom:14px}:host fieldset{border:none;padding:0;margin:0;margin-inline-start:0;margin-inline-end:0;padding-block-start:0;padding-inline-start:0;padding-inline-end:0;padding-block-end:0;min-inline-size:min-content}:host legend{padding-left:0;padding-bottom:0;font-weight:normal;margin-bottom:18px;height:20px;width:165px;color:#000;font-family:\"Helvetica\", \"Arial\", sans-serif;font-size:14px;letter-spacing:0;line-height:20px}:host .add-card-container{margin:32px 0 0}:host .manage-payment-container{margin:20px 0 0}:host .manage-payment-container a{margin:14px 0 20px;display:inline-block;color:#cc0000;font-size:15px;letter-spacing:0;line-height:18px;text-decoration:underline}:host ul{margin:0;padding:0;list-style:none}:host h4{height:22px;color:#000;margin:16px 0 0;font-size:18px;font-weight:bold;letter-spacing:0;line-height:22px}:host p{font-size:14px;letter-spacing:0;line-height:18px;color:#333;margin:0}:host .locator-button{margin:16px 0 10px;height:44px;border-radius:8px;display:flex;justify-content:center;align-items:center;background-color:#cc0000;text-decoration:none;font-family:\"Helvetica\", \"Arial\", sans-serif;font-size:14px;font-weight:bold;width:100%}:host .primary{background-color:#cc0000;box-shadow:inset 0 -2px 0 0 #a50000, 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.1);color:white}:host h2,:host p{margin-bottom:10px}";

const CvsSelectPaymentForm = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.cardSelect = createEvent(this, "cardSelect", 7);
    this.cardChangeEvent = createEvent(this, "cardChangeEvent", 7);
    this.selectedCardError = "";
    /**
     * show continue button
     * default to true
     */
    this.showContinue = true;
    this.cardSelectedHandler = () => {
      this.cardSelect.emit();
    };
    this.handleCardChange = (card) => {
      this.cardChangeEvent.emit(card);
    };
    /**
     * Form submit handler
     * @param event @private @readonly
     */
    this.handleSubmit = (event) => {
      const { values, actions: { setSubmitting } } = event.detail;
      const { validCards, cardSelectedHandler } = this;
      if (validCards && this.userId) {
        let selectedCard;
        validCards.forEach((card) => {
          if (card.cardId === values.selectCard) {
            selectedCard = Object.assign({}, card);
          }
        });
        CvsData.selectUserCard(this.userId, selectedCard.cardId, selectedCard.cardNum)
          .then((res) => {
          if (res.response.header.statusCode === "0000") {
            cardSelectedHandler();
            this.apiFailure = false;
          }
          else {
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
    this.renderer = (props) => {
      var _a;
      const { formProps, groupProps, labelProps, radioProps, values } = props;
      const { labels } = SelectCardData;
      return (h("div", { class: "form-container" }, this.apiFailure && (h("cvs-alert-banner", Object.assign({}, {
        alertType: "error",
        actions: [
          {
            "link-text": "Return to MyChart",
            "link-URL": this.myChartUrl
          }
        ]
      }), h("h2", { slot: "title" }, "We're Sorry"), h("p", { slot: "description" }, "Something went wrong with this payment method."), h("p", { class: "bottom-paragraph ", slot: "description" }, "You can try selecting another payment method now or pay when you arrive at your appointment"))), h("form", Object.assign({}, formProps, { noValidate: true, "aria-describedby": "formInst" }), h("section", { role: "group" }, h("fieldset", Object.assign({}, groupProps("selectCard")), h("legend", null, labels === null || labels === void 0 ? void 0 : labels.selectCard), (_a = this.validCards) === null || _a === void 0 ? void 0 :
        _a.map((card, index) => (h("div", null, h("cvs-radio-button", { role: "group", radioProps: Object.assign({}, radioProps("selectCard", card === null || card === void 0 ? void 0 : card.cardId)), labelProps: Object.assign({}, labelProps("selectCard", card === null || card === void 0 ? void 0 : card.cardId)), onChange: () => this.handleCardChange(card), slotClass: `card ${index > 0 ? "after-first" : ""} ${this.selectedCardError === card.cardId ? "error-card" : "valid-card"}`, errorDisplay: this.selectedCardError === card.cardId }, h("cvs-card-summary", Object.assign({}, card, { active: (card === null || card === void 0 ? void 0 : card.cardId) === (values === null || values === void 0 ? void 0 : values.selectCard) }))), this.selectedCardError === card.cardId && (h("cvs-form-error", { text: "Select a different payment method", class: "textinput-error" }))))))), this.showContinue && (h("button", { class: "locator-button primary", type: "submit" }, "Continue")))));
    };
  }
  render() {
    var _a;
    const { renderer } = this;
    const { initialValues } = SelectCardData;
    return (h(Host, { id: "select-card" }, h("cvs-form", { initialValues: initialValues((_a = this === null || this === void 0 ? void 0 : this.validCards[0]) === null || _a === void 0 ? void 0 : _a.cardId), renderer: renderer, validateOnBlur: false, validateOnInput: false, onSubmit: this.handleSubmit })));
  }
};
CvsSelectPaymentForm.style = cvsSelectPaymentFormCss;

export { CvsSelectPaymentForm as cvs_select_payment_form };
