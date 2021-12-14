import { Component, Host, h, Event, EventEmitter, Prop } from "@stencil/core";

@Component({
  tag: "cvs-add-a-card",
  styleUrl: "cvs-add-a-card.scss",
  shadow: true
})
export class CvsAddACard {
  /**
   * onClick notify next.js app to router.push() to appropriate add-card page
   */
  @Event() routeToAddCard: EventEmitter;
  private routeToAddCardHandler = () => {
    this.routeToAddCard.emit();
  };
  /**
   * text to display for add card
   */
  @Prop() readonly addCardText?: string;

  private icon: string =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QA" +
    "AAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAADAAAAAATD" +
    "PpdAAAATUlEQVQoFWNgwALOMjBsBGEsUgws2ASBYio4xBmYcEngEqe9Bkao59DdrAx10l00p90h2UloBkC4QFuvgjA2SZJtoL0GX" +
    "DF9B5v7QWIAPpoK1oEVZP0AAAAASUVORK5CYII=";

  render() {
    return (
      <Host>
        <a
          class="add-card-cta"
          id="cvs-select-payment-link-add"
          href="javascript:void(0)"
          onClick={this.routeToAddCardHandler}
        >
          <img class="util-sign+" src={this.icon} />
          {this.addCardText ? this.addCardText : "Add new credit or FSA/HSA card"}
        </a>
      </Host>
    );
  }
}
