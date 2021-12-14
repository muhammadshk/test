import { r as registerInstance, h, f as Host } from './index-6c675c57.js';
import { C as CvsData } from './cvsData-1eeb4129.js';
import './_commonjsHelpers-2088bffa.js';

const cvsCardManagementCss = ":host{display:block}:host cvs-add-a-card{margin-top:3px}:host .no-payment-methods{line-height:20px;font-size:14px;color:#333;width:288px}";

const CvsCardManagement = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * show or hide alert banner
     */
    this.showAlert = false;
    /**
     * display edit button
     */
    this.allowEdit = false;
    /** Indicates a new card was successfully added; display alert banner */
    this.cardAdded = false;
    /**
     * @private: openDeleteModal
     *
     * @description: opens modal to confirm delete
     */
    this.openDeleteModal = (data) => {
      const modal = document.createElement("cvs-modal");
      const modalData = {
        cardData: data,
        type: "column",
        title: '<span class="bold black">Delete payment method</span>',
        subText: "<p>Do you want to delete payment method ending in " +
          data.cardNum +
          " from your account?</p>",
        buttons: {
          primary: {
            text: "Yes, delete payment method"
          },
          secondary: {
            text: "No, keep payment method"
          }
        },
        maxWidth: 320
      };
      modal.data = modalData;
      document.body.appendChild(modal);
    };
  }
  componentWillLoad() {
    this.parsedData = this.parseInputData();
    if (this.cardAdded) {
      this.alertData = {
        alertType: "success",
        title: "Success",
        description: "Your payment method has been added."
      };
      this.showAlert = true;
    }
  }
  /**
   * @private parseInputData
   * @description Executed when there is the change in the component property store.
   *   If the component is initilized through HTML the path prop will be a string.
   * @returns CvsCardManagementProps
   */
  parseInputData() {
    return {
      userId: this.userId,
      validCards: this.formatData(this.validCards),
      expiredCards: this.formatData(this.expiredCards)
    };
  }
  /**
   * @private formatData
   * @description if the given object is string, returns the JSON object of the string
   * @returns CvsCardDataProps[]
   */
  formatData(data) {
    let formattedData;
    if (typeof data === "string") {
      try {
        formattedData = JSON.parse(data);
      }
      catch (_a) {
        console.warn("Error in parsing the value of props of cvs-card-management");
      }
    }
    else if (data !== undefined) {
      formattedData = data;
    }
    return formattedData;
  }
  /**
   * @listens: handleDeleteEvent
   * @description: gets executed once the handleDeleteEvents event is fired from cvs-card-management-tile component
   */
  handleDelete({ detail }) {
    this.selectedCard = {
      cardId: detail.cardId,
      lastFour: detail.cardNum,
      isValid: detail.isValid
    };
    this.openDeleteModal(detail);
  }
  /**
   * @listens: handleEditeEvent
   * @description: gets executed once the handleEditEvents event is fired from cvs-card-management-tile component
   */
  handleEdit() {
    // go to edit card url
  }
  /**
   * @listens: modalEvent
   * @description: gets executed once the modalEvent event is fired from cvs-modal component
   * @returns: global Promise<any>
   */
  async deleteCard({ detail: eventData }) {
    var _a, _b;
    if (eventData === "cancel" || eventData === "close") {
      return;
    }
    let data;
    // Temporary logic to handle sccenariio where userId is not available
    if (this.userId === undefined) {
      data = await CvsData.deleteCreditCard(this.selectedCard.cardId);
    }
    else {
      data = await CvsData.deleteCard(decodeURIComponent(this.userId) == this.userId
        ? encodeURIComponent(this.userId)
        : this.userId, this.selectedCard.cardId, this.selectedCard.lastFour);
    }
    if (typeof data === "object" && ((_b = (_a = data === null || data === void 0 ? void 0 : data.response) === null || _a === void 0 ? void 0 : _a.header) === null || _b === void 0 ? void 0 : _b.statusCode) === "0000") {
      this.parsedData = {
        userId: this.userId,
        validCards: this.formatData(this.parsedData.validCards).filter((i) => i.cardId !== this.selectedCard.cardId),
        expiredCards: this.formatData(this.parsedData.expiredCards).filter((i) => i.cardId !== this.selectedCard.cardId)
      };
      this.alertData = {
        alertType: "success",
        title: "Success",
        description: "Your payment method has been updated."
      };
      this.showAlert = true;
    }
    else {
      this.alertData = {
        alertType: "error",
        title: "We're sorry",
        description: "We can’t complete your request right now due to technical issues. Please try again."
      };
      this.showAlert = true;
    }
    const modal = document.getElementsByTagName("cvs-modal");
    if ((modal === null || modal === void 0 ? void 0 : modal.length) === 1) {
      modal[0].remove();
    }
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return (h(Host, null, this.showAlert && (h("cvs-alert-banner", { alertType: this.alertData.alertType }, h("h4", { slot: "title" }, this.alertData.title), h("p", { slot: "description" }, this.alertData.description))), !((_b = (_a = this.parsedData) === null || _a === void 0 ? void 0 : _a.validCards) === null || _b === void 0 ? void 0 : _b.length) && !((_d = (_c = this.parsedData) === null || _c === void 0 ? void 0 : _c.validCards) === null || _d === void 0 ? void 0 : _d.length) && (h("p", { class: "no-payment-methods" }, "There is no payment information on file for your account. Please add a new payment method.")), (_f = (_e = this.parsedData) === null || _e === void 0 ? void 0 : _e.validCards) === null || _f === void 0 ? void 0 :
      _f.map((card) => {
        card.showDetails = true;
        return h("cvs-card-management-tile", { allowEdit: this.allowEdit, card: card });
      }), (_h = (_g = this.parsedData) === null || _g === void 0 ? void 0 : _g.expiredCards) === null || _h === void 0 ? void 0 :
      _h.map((card) => {
        card.showDetails = true;
        return h("cvs-card-management-tile", { allowEdit: this.allowEdit, card: card });
      }), h("cvs-add-a-card", { addCardText: this.addCardText })));
  }
};
CvsCardManagement.style = cvsCardManagementCss;

export { CvsCardManagement as cvs_card_management };
