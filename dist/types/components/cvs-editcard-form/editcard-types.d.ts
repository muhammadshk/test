export interface TargetComponent {
  "name": string;
  "id": string;
  "is-shadow": boolean;
}
export interface Action {
  "link-text": string;
  "link-input-id": string;
}
export interface AlertBannerProps {
  alertType: "error" | "warning" | "success";
  targetComponent: {
    component: TargetComponent;
  };
  actions: Action[];
}
export interface EditCardValues {
  paymentId: string;
  cardType: string;
  month: string;
  year: string;
  cardNum: string;
  cardLogo?: string;
  mobile: string;
  fName: string;
  mName: string;
  lName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  authorization: boolean;
  carePassEnrolled: string;
}
export declare type EditCardErrors = {
  [key in keyof EditCardValues]?: string[];
};
export declare type EditCardLabels = {
  [key in keyof EditCardValues]: string;
};
export interface ValidateEvent {
  isValidating: boolean;
}
