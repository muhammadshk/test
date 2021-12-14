import { Component, Host, h, Prop } from "@stencil/core";
import amexIcon from "./assets/amex-sm.svg";
import dinersClubIcon from "./assets/diners-club.svg";
import discoverIcon from "./assets/discover.svg";
import mastercardIcon from "./assets/mastercard.svg";
import visaIcon from "./assets/visa.svg";
import bankCardIcon from "./assets/bank-card.svg";

export interface CvsCardSummaryProps {
  cardId: string;
  cardType: string;
  cardNum: string;
  isValid?: boolean;
  expDate: string;
  billingAddress?: Address;
  active?: boolean;
  showDetails?: boolean;
}

export interface Address {
  firstName: string;
  lastName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zipCode?: string;
}

@Component({
  tag: "cvs-card-summary",
  styleUrl: "cvs-card-summary.scss",
  shadow: true
})
export class CvsCardSummary {
  /**
   * cardType: visa|mastercard|discover|amex etc
   */
  @Prop() readonly cardType!: string;

  /**
   * last 4 digits of the card number to display
   */
  @Prop() readonly cardNum!: string;

  /**
   * boolean to intimate if its a valid card considering expiry date
   */
  @Prop() readonly isValid?: boolean = true;

  /**
   * boolean to show/hide full details (billing address, etc) for use in certain components
   */
  @Prop() readonly showDetails?: boolean = false;

  /**
   * expiry date of the given card
   */
  @Prop() readonly expDate!: string;

  /**
   * billing address of the given card
   */
  @Prop() readonly billingAddress?: Address;

  /**
   * boolean to intimate whether the card is selected or not
   */
  @Prop() readonly active?: boolean = false;

  render() {
    let cardIcon: string;
    let cardAltTxt: string;
    switch (this.cardType?.toLowerCase()) {
      case "visa":
        cardIcon = visaIcon;
        cardAltTxt = "visa";
        break;
      case "mastercard":
        cardIcon = mastercardIcon;
        cardAltTxt = "mastercard";
        break;
      case "dinners-club":
        cardIcon = dinersClubIcon;
        cardAltTxt = "dinners club";
        break;
      case "discover":
        cardIcon = discoverIcon;
        cardAltTxt = "discover";
        break;
      case "americanexpress":
        cardIcon = amexIcon;
        cardAltTxt = "american express";
        break;
      default:
        cardIcon = bankCardIcon;
        cardAltTxt = this.cardType;
    }
    return (
      <Host>
        <div class="card-details">
          <div class="card-basic">
            <img src={cardIcon} alt={cardAltTxt} />
            <label>
              <span aria-hidden="true">•••• •••• ••••</span>
              <span class="visuallyHidden">ending in</span>
              &nbsp;{this.cardNum}
            </label>
          </div>
          {this.isValid ? (
            <div class="expiry">
              Expires <time>{this.expDate}</time>
            </div>
          ) : (
            <div class="expired">
              <img></img>
              <label>
                Expired&nbsp;<time>{this.expDate}</time>
              </label>
            </div>
          )}
        </div>
        {((this.isValid && this.active) || this.showDetails) && this.billingAddress && (
          <div class="billing-container">
            <div class="bold">Billing address</div>
            <div class="capitalize">
              {this.billingAddress?.firstName} {this.billingAddress?.lastName}
            </div>
            <div>{this.billingAddress?.addressLine1}</div>
            {this.billingAddress?.addressLine2 && <div>{this.billingAddress?.addressLine2}</div>}
            <div>
              {this.billingAddress?.city}, {this.billingAddress?.state}
            </div>
          </div>
        )}
      </Host>
    );
  }
}
