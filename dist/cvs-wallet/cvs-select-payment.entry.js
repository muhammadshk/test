import { r as registerInstance, e as createEvent, h, f as Host } from './index-6c675c57.js';

const cvsSelectPaymentCss = ":host{display:block;font-family:\"Helvetica\", \"Arial\", sans-serif}@media (min-width: 481px){:host{max-width:320px}}.expired-card{box-sizing:border-box;border:1px solid #ccc;border-radius:12px;background-color:white;box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.1);margin:0 0 16px 0;padding:16px}.add-card-container{margin:32px 0 0}.manage-payment-container{margin:20px 0 0}.manage-payment-container a{margin:14px 0 20px;display:inline-block;color:#cc0000;font-size:15px;letter-spacing:0;line-height:18px;text-decoration:underline}ul{margin:0;padding:0;list-style:none}.alert-banner-title{font-size:18px;font-family:\"Helvetica\", \"Arial\", sans-serif;color:#000}.select-h2{font-size:18px;font-family:\"Helvetica\", \"Arial\", sans-serif;color:#000;margin:22px 0 0 0}";

const CvsSelectPayment = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.routeToCardManagement = createEvent(this, "routeToCardManagement", 7);
    /**
     * show continue button
     * default to true
     */
    this.showContinue = true;
    /**
     * option to hide headers
     */
    this.hideHeader = false;
    this.routeToCardManagementHandler = () => {
      this.routeToCardManagement.emit();
    };
  }
  /**
   * @public: componentWillLoad
   *
   * @description: Executed when the component first connected to DOM
   * @returns: void
   */
  componentWillLoad() {
    this.parsedData = this.parseInputData();
  }
  /**
   * @private formatData
   * @description if the given object is string, returns the JSON object of the string
   * @returns: cvsCardSummaryProps[]
   */
  formatData(data) {
    let formattedData;
    if (typeof data === "string") {
      try {
        formattedData = JSON.parse(data);
      }
      catch (_a) {
        console.warn("Error in parsing the value of props of cvs-select-payment-form");
      }
    }
    else if (data !== undefined) {
      formattedData = data;
    }
    return formattedData;
  }
  /**
   * @private parseInputData
   * @description Executed when there is the change in the component property store.
   *   If the component is initilized through HTML the path prop will be a string.
   * @returns: CvsSelectPaymentFormProps
   */
  parseInputData() {
    return {
      userId: this.userId,
      subText: this.subText,
      validCards: this.formatData(this.validCards),
      expiredCards: this.formatData(this.expiredCards)
    };
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    if (!this.correctFlow) {
      return (h(Host, null, h("cvs-alert-banner", { alertType: "error" }, h("h2", { class: "alert-banner-title", slot: "title" }, "Sorry!"), h("span", { slot: "description" }, "You can't get to that page from here."))));
    }
    else
      return (h(Host, null, this.cardAdded && (h("cvs-alert-banner", { alertType: "success" }, h("h2", { class: "alert-banner-title", slot: "title" }, "Success"), h("span", { slot: "description" }, "Your payment method has been added."))), ((_b = (_a = this === null || this === void 0 ? void 0 : this.parsedData) === null || _a === void 0 ? void 0 : _a.validCards) === null || _b === void 0 ? void 0 : _b.length) === 0 && (h("cvs-alert-banner", { alertType: "warning" }, h("h2", { class: "alert-banner-title", slot: "title" }, "Expired Cards"), h("span", { slot: "description" }, "There is no valid payment information on file for your account. Please add a new (or update an expired) payment method to submit your payment."))), ((_d = (_c = this === null || this === void 0 ? void 0 : this.parsedData) === null || _c === void 0 ? void 0 : _c.validCards) === null || _d === void 0 ? void 0 : _d.length) > 0 && (h("cvs-select-payment-form", { myChartUrl: this.myChartUrl, subText: this.parsedData.subText, validCards: this.parsedData.validCards, userId: this.parsedData.userId, showContinue: this.showContinue })), h("div", { class: "add-card-container" }, !this.hideHeader && h("h2", { class: "select-h2" }, "Add a payment method"), h("cvs-add-a-card", { addCardText: this.addCardText })), (((_f = (_e = this.parsedData) === null || _e === void 0 ? void 0 : _e.validCards) === null || _f === void 0 ? void 0 : _f.length) > 0 || ((_g = this.expiredCards) === null || _g === void 0 ? void 0 : _g.length) > 0) && (h("div", { class: "manage-payment-container" }, !this.hideHeader && h("h2", { class: "select-h2" }, "Update payment methods"), h("a", { id: "cvs-select-payment-link-manage-payment", href: "javascript:void(0)", onClick: this.routeToCardManagementHandler }, "Manage payment methods"))), ((_j = (_h = this.parsedData) === null || _h === void 0 ? void 0 : _h.expiredCards) === null || _j === void 0 ? void 0 : _j.length) > 0 && (h("ul", null, (_l = (_k = this.parsedData) === null || _k === void 0 ? void 0 : _k.expiredCards) === null || _l === void 0 ? void 0 : _l.map((card) => (h("li", { tabIndex: 0 }, h("cvs-card-summary", Object.assign({ class: "expired-card" }, card)))))))));
  }
};
CvsSelectPayment.style = cvsSelectPaymentCss;

export { CvsSelectPayment as cvs_select_payment };
