export interface SelectCardValues {
  selectCard: string;
}

export type SelectCardLabels = {
  [key in keyof SelectCardValues]: string;
};

export type CardObject = {
  billingAddress?: BillingAddressObject;
  cardNum: string;
  cardType: string;
  expDate: string;
  isValid?: boolean;
};

export type BillingAddressObject = {
  addressLine1: string;
  addressLine2?: string;
  city: string;
  firstName: string;
  lastName: string;
  state: string;
};
