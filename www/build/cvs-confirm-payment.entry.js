import { r as registerInstance, e as createEvent, h, f as Host } from './index-6c675c57.js';

const cvsConfirmPaymentCss = ":host{display:block}.banner-title{font-family:\"Helvetica\", \"Arial\", sans-serif;font-size:18px;line-height:22px;font-weight:bold;color:#000}.banner-description{font-family:\"Helvetica\", \"Arial\", sans-serif;font-size:14px;line-height:18px;color:#333}.locator-button{border:0;margin-bottom:10px;height:44px;border-radius:8px;display:flex;justify-content:center;align-items:center;background-color:#cc0000;text-decoration:none;font-family:\"Helvetica\", \"Arial\", sans-serif;font-size:14px;font-weight:bold;width:100%}.primary{background-color:#cc0000;box-shadow:inset 0 -2px 0 0 #a50000, 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.1);color:white}@media (min-width: 720px){.container{margin:88px 16px 16px 16px}}";

const CvsConfirmPayment = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.goBackButton = createEvent(this, "goBackButton", 7);
    /**
     * if card was added
     */
    this.selectSuccess = false;
    this.goBackButtonHandler = () => {
      this.goBackButton.emit();
    };
  }
  render() {
    return (h(Host, null, this.selectSuccess && (h("cvs-alert-banner", { alertType: "success" }, h("h2", { class: "banner-title", slot: "title" }, "Success"), h("p", { class: "banner-description", slot: "description" }, "Your payment method has been selected."))), h("button", { onClick: this.goBackButtonHandler, class: "locator-button primary" }, "Go back to ", this.goBack)));
  }
};
CvsConfirmPayment.style = cvsConfirmPaymentCss;

export { CvsConfirmPayment as cvs_confirm_payment };
