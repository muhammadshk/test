export interface SelectCardValues {
  selectCard: string;
}
export declare type SelectCardLabels = {
  [key in keyof SelectCardValues]: string;
};
export declare type CardObject = {
  billingAddress?: BillingAddressObject;
  cardNum: string;
  cardType: string;
  expDate: string;
  isValid?: boolean;
};
export declare type BillingAddressObject = {
  addressLine1: string;
  addressLine2?: string;
  city: string;
  firstName: string;
  lastName: string;
  state: string;
};
