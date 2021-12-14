import { Component, Host, h, Prop, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "cvs-confirm-payment",
  styleUrl: "cvs-confirm-payment.scss",
  shadow: true
})
export class CvsConfirmPayment {
  /**
   * where to go back to
   */
  @Prop() readonly goBack!: string;
  /**
   * if card was added
   */
  @Prop() readonly selectSuccess: boolean = false;
  /**
   * event to tell next app to router.push back after payment selected
   */
  @Event() goBackButton: EventEmitter;
  private readonly goBackButtonHandler = () => {
    this.goBackButton.emit();
  };

  render() {
    return (
      <Host>
        {this.selectSuccess && (
          <cvs-alert-banner alertType="success">
            <h2 class="banner-title" slot="title">
              Success
            </h2>
            <p class="banner-description" slot="description">
              Your payment method has been selected.
            </p>
          </cvs-alert-banner>
        )}
        <button onClick={this.goBackButtonHandler} class="locator-button primary">
          Go back to {this.goBack}
        </button>
      </Host>
    );
  }
}
