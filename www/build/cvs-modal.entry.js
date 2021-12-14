import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-6c675c57.js';

const closeSvg = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyMnB4IiB2aWV3Qm94PSIwIDAgMjIgMjIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+RTRCOEQ4RkUtMzI4Ri00NzE2LUI2NDEtQ0MxQzZFMTk3RjAzPC90aXRsZT4KICAgIDxnIGlkPSJBZGQtUGF5bWVudCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkQtMS4zLUxlZ2FsLWF1dGhvcml6YXRpb24tbW9kYWwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04MzMuMDAwMDAwLCAtMTAzLjAwMDAwMCkiIGZpbGw9IiMwMDAwMDAiPgogICAgICAgICAgICA8ZyBpZD0iTW9kYWxzLS8td2luZG93LS1sZyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTUyLjAwMDAwMCwgODYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i4p6ULUNsb3NlPyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjgxLjI5Mjg5MywgMTcuMjkyODkzKSI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIwLDEuMjI1Njg2MjJlLTEzIEwyMS40MTQyMTM2LDEuNDE0MjEzNTYgTDEyLjEyMSwxMC43MDcgTDIxLjQxNDIxMzYsMjAgTDIwLDIxLjQxNDIxMzYgTDEwLjcwNywxMi4xMjEgTDEuNDE0MjEzNTYsMjEuNDE0MjEzNiBMMS4yMjU2ODYyMmUtMTMsMjAgTDkuMjkzLDEwLjcwNyBMMS4yMjU2ODYyMmUtMTMsMS40MTQyMTM1NiBMMS40MTQyMTM1NiwxLjIyNTY4NjIyZS0xMyBMMTAuNzA3LDkuMjkzIEwyMCwxLjIyNTY4NjIyZS0xMyBaIiBpZD0iaS1jbG9zZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=';

const cvsModalCss = ":host{display:block;font-family:\"Helvetica\", \"Arial\", sans-serif}.bold{font-weight:bold}.black{color:#000}.dismiss-btn{color:#000;order:2;appearance:none;background:none;border:none;height:22px;width:22px;padding:0}.wrapper{position:fixed;left:0;top:0;width:100%;height:100%;overflow:scroll;background:rgba(0, 0, 0, 0.5);opacity:1;transition:visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;z-index:9001;display:flex;flex-direction:column;align-items:center;justify-content:center}.visible{opacity:1;visibility:visible;transform:scale(1);transition:visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s}.subText{overflow:auto;margin-top:18px;color:#424242}.subText p:first-child{margin:0 0 20px}.subText p:last-child{margin:24px 0 0}.subText hr{box-sizing:border-box;height:0;border:none;border-bottom:1px solid #ccc;margin:8px 0}.modal{overflow:auto;font-size:16px;padding:32px 32px 0;background-color:#fff;border-radius:2px;min-width:300px;max-width:576px;color:#333}.column-modal{display:flex;flex-direction:column;width:440px;padding:60px}.column-modal .subText{margin-top:0}.title{order:1;font-size:22px;line-height:24px;margin-top:18px}.title-row{display:flex;flex-direction:row;justify-content:space-between}.capitalize{text-transform:capitalize}.button-container-column{display:flex;flex-direction:column}.button-container{margin:20px 0 0;overflow:auto}.button-container .modal-button{height:44px;border-radius:8px;text-align:center;font-size:14px;font-weight:bold}.button-container .small-primary{width:86px;margin:5px 0 20px 0}.button-container .primary{letter-spacing:0;line-height:17px;border:none}.button-container .expanded{margin-bottom:28px}.button-container button.small-secondary{width:110px;margin-left:20px}.button-container .secondary{letter-spacing:0;line-height:18px;display:inline-block;margin-top:20px}.button-container .red{background-color:#c00;box-shadow:inset 0 -2px 0 0 #a50000, 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.1);color:white}.button-container .white{border:2px solid #900;color:#900;background-color:white}.button-container .grey{background-color:#333;box-shadow:inset 0 -2px 0 0 #000, 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.1)}.button-container .modal-link{text-align:center;color:#333}button{color:#fff;cursor:pointer}@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait){.modal{top:0;left:0;right:0;transform:none;margin:0;overflow:auto;padding:16px 16px 0}.modal .subText p:first-child{margin:0}.modal .subText p:last-child{margin:10px 0 0}.modal button.primary{width:100%;display:block}.modal button.secondary{width:100%;display:block;margin:16px 0 40px 0}.modal button.small-secondary{margin-left:unset}.modal button.expanded{margin-top:14px;margin-bottom:37px}.modal hr{margin:10px 0}.column-modal{width:unset}}";

const CvsModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.modalEvent = createEvent(this, "modalEvent", 7);
    this.cvsAnalyticsEvent = createEvent(this, "cvsAnalyticsEvent", 7);
    /**
     * @private: success
     *
     * @description: click listener for the primary button of modal
     * @returns: function
     */
    this.success = () => {
      var _a, _b, _c, _d;
      if ((_a = this.analyticsData) === null || _a === void 0 ? void 0 : _a.primary) {
        this.cvsAnalyticsEvent.emit((_b = this.analyticsData) === null || _b === void 0 ? void 0 : _b.primary);
      }
      else {
        this.cvsAnalyticsEvent.emit((_d = (_c = this.parsedData) === null || _c === void 0 ? void 0 : _c.analyticsFallback) === null || _d === void 0 ? void 0 : _d.primary);
      }
      this.modalEvent.emit("success");
      CvsModal.resetWindowScrollOnClose();
    };
    /**
     * @private: dismiss
     *
     * @description: click listener for the secondary button or close icon of modal
     * @returns: function
     */
    this.dismiss = () => {
      var _a, _b, _c, _d;
      if ((_a = this.analyticsData) === null || _a === void 0 ? void 0 : _a.dismiss) {
        this.cvsAnalyticsEvent.emit((_b = this.analyticsData) === null || _b === void 0 ? void 0 : _b.dismiss);
      }
      else {
        this.cvsAnalyticsEvent.emit((_d = (_c = this.parsedData) === null || _c === void 0 ? void 0 : _c.analyticsFallback) === null || _d === void 0 ? void 0 : _d.dismiss);
      }
      setTimeout(() => {
        this.modalEvent.emit("close");
        const modal = document.getElementsByTagName("cvs-modal");
        if ((modal === null || modal === void 0 ? void 0 : modal.length) === 1) {
          modal[0].remove();
          CvsModal.resetWindowScrollOnClose();
        }
      }, 0);
    };
    /**
     * @private: cancel
     *
     * @description: click listener for the secondary button or close icon of modal
     * @returns: function
     */
    this.cancel = () => {
      var _a, _b, _c, _d;
      if ((_a = this.analyticsData) === null || _a === void 0 ? void 0 : _a.secondary) {
        this.cvsAnalyticsEvent.emit((_b = this.analyticsData) === null || _b === void 0 ? void 0 : _b.secondary);
      }
      else {
        this.cvsAnalyticsEvent.emit((_d = (_c = this.parsedData) === null || _c === void 0 ? void 0 : _c.analyticsFallback) === null || _d === void 0 ? void 0 : _d.secondary);
      }
      setTimeout(() => {
        this.modalEvent.emit("cancel");
        const modal = document.getElementsByTagName("cvs-modal");
        if ((modal === null || modal === void 0 ? void 0 : modal.length) === 1) {
          modal[0].remove();
          CvsModal.resetWindowScrollOnClose();
        }
      }, 0);
    };
  }
  /**
   * @public: componentWillLoad
   *
   * @description: Executed when the component first connected to DOM
   * @returns: void
   */
  componentWillLoad() {
    this.parseInputData();
  }
  componentDidLoad() {
    setTimeout(() => {
      var _a, _b;
      const modalContent = (_b = (_a = this.element) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector(".modal-content");
      modalContent === null || modalContent === void 0 ? void 0 : modalContent.focus();
      //prevent scroll on body
      document.body.style.overflow = "hidden";
    }, 0);
  }
  /**
   * @private: parseInputData
   * @description: Executed when there is the change in the component property data.
   *              If the component is initilized through HTML the path prop will be a string.
   * @returns: void
   */
  parseInputData() {
    if (typeof this.data === "string") {
      try {
        this.parsedData = JSON.parse(this.data);
      }
      catch (e) {
        console.warn("Error in parsing the value of path attr for cvs-breadcrumbs");
      }
    }
    else if (this.data !== undefined) {
      this.parsedData = this.data;
    }
  }
  /**
   * @public render
   *
   * @description: outputs a tree of components that will be drawn to the screen
   * @returns: any:HTMLElementCollection
   */
  render() {
    const { buttons, title, subText, type } = this.parsedData;
    return (h(Host, null, h("div", { class: "wrapper" }, h("div", { class: `modal-content modal ${type === "column" ? "column-modal" : ""}`, style: typeof this.parsedData.maxWidth !== "undefined"
        ? { "max-width": `${this.parsedData.maxWidth}px` }
        : {}, tabIndex: 0 }, h("div", { class: "title-row" }, h("button", { "aria-label": "Close", class: "dismiss-btn", id: "chngStrClsBtn", onClick: this.dismiss }, h("img", { src: closeSvg })), h("div", { class: "title", innerHTML: title })), h("div", null, h("slot", { name: "content-slot" })), h("div", { class: "subText", innerHTML: subText }), h("div", null, h("slot", { name: "form-slot" })), h("div", { class: `button-container ${type === "column" ? "button-container-column" : ""}` }, h("button", { class: `modal-button primary red ${type === "default" ? "small-primary" : ""} ${!(buttons === null || buttons === void 0 ? void 0 : buttons.secondary) ? "expanded" : ""}`, onClick: this.success, id: `cvs-changeStore-modal-${buttons.primary.text
        .replace(/\s/g, "-")
        .toLowerCase()}-button` }, buttons.primary.text), buttons.secondary && (h("button", { class: `modal-button secondary  ${type === "default" ? "grey small-secondary" : "white"}`, onClick: this.cancel, id: `cvs-changeStore-modal-${buttons.secondary.text
        .replace(/\s/g, "-")
        .toLowerCase()}-button` }, buttons.secondary.text)), buttons.link && (h("a", { class: "modal-link", href: buttons.link.url }, buttons.link.text)))))));
  }
  get element() { return getElement(this); }
  static get watchers() { return {
    "data": ["parseInputData"]
  }; }
};
/**
 * @private: resetWindowScrollOnClose
 *
 * @description: Allow body to scroll when modal closes
 * @returns: void
 */
CvsModal.resetWindowScrollOnClose = () => {
  document.body.style.overflow = "scroll";
};
CvsModal.style = cvsModalCss;

export { CvsModal as cvs_modal };
