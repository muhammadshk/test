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
export declare class CvsCardSummary {
  /**
   * cardType: visa|mastercard|discover|amex etc
   */
  readonly cardType: string;
  /**
   * last 4 digits of the card number to display
   */
  readonly cardNum: string;
  /**
   * boolean to intimate if its a valid card considering expiry date
   */
  readonly isValid?: boolean;
  /**
   * boolean to show/hide full details (billing address, etc) for use in certain components
   */
  readonly showDetails?: boolean;
  /**
   * expiry date of the given card
   */
  readonly expDate: string;
  /**
   * billing address of the given card
   */
  readonly billingAddress?: Address;
  /**
   * boolean to intimate whether the card is selected or not
   */
  readonly active?: boolean;
  render(): any;
}
