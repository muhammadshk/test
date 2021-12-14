import { r as registerInstance, e as createEvent, h, f as Host } from './index-6c675c57.js';

const cvsAddACardCss = ":host{display:block}a.add-card-cta{padding:10px 0;display:inline-block;color:#cc0000;font-size:15px;font-family:\"Helvetica\", \"Arial\", sans-serif;letter-spacing:0;line-height:18px;text-decoration:underline}a.add-card-cta:focus{outline-width:0.1875rem;outline-style:solid;outline-color:#097fad}a.add-card-cta img{height:12px;width:12px;margin:0 8px 0 0;display:inline-flex;vertical-align:middle}";

const CvsAddACard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.routeToAddCard = createEvent(this, "routeToAddCard", 7);
    this.routeToAddCardHandler = () => {
      this.routeToAddCard.emit();
    };
    this.icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QA" +
      "AAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAADAAAAAATD" +
      "PpdAAAATUlEQVQoFWNgwALOMjBsBGEsUgws2ASBYio4xBmYcEngEqe9Bkao59DdrAx10l00p90h2UloBkC4QFuvgjA2SZJtoL0GX" +
      "DF9B5v7QWIAPpoK1oEVZP0AAAAASUVORK5CYII=";
  }
  render() {
    return (h(Host, null, h("a", { class: "add-card-cta", id: "cvs-select-payment-link-add", href: "javascript:void(0)", onClick: this.routeToAddCardHandler }, h("img", { class: "util-sign+", src: this.icon }), this.addCardText ? this.addCardText : "Add new credit or FSA/HSA card")));
  }
};
CvsAddACard.style = cvsAddACardCss;

export { CvsAddACard as cvs_add_a_card };
