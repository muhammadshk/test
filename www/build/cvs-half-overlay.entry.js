import { r as registerInstance, h, f as Host } from './index-6c675c57.js';

const cvsHalfOverlayCss = ":host{display:block}.modal-back-ground{display:block;width:100%;min-height:100vh}.modal{display:flex;position:relative;height:100%;overflow-x:hidden;overflow-y:hidden;background-color:rgba(0, 0, 0, 0.5)}.modal-main-wrapper{z-index:1000;position:fixed;overflow:visible;inset:0}.modal-half-slide{position:absolute;top:0;right:0;width:100%;max-width:430px;height:100vh;z-index:1000}.model-popup-background{background:#fff;display:block;height:auto;width:auto;animation:slide-left 0.5s}@keyframes slide-left{from{margin-left:100%;width:300%}to{margin-left:0%;width:100%}}";

const CvsHalfOverlay = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("div", { class: "modal-back-ground" }, h("div", { class: "modal-main-wrapper" }, h("div", { class: "modal", role: "dialog", "aria-labelledby": "modalHeading", "aria-modal": "true" }, h("div", { class: "modal-half-slide" }, h("div", { class: "model-popup-background" }, h("slot", null))))))));
  }
};
CvsHalfOverlay.style = cvsHalfOverlayCss;

export { CvsHalfOverlay as cvs_half_overlay };
