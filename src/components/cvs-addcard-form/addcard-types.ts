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
  targetComponent: { component: TargetComponent };
  actions: Action[];
}

export interface AddCardValues {
  cardType: "CC" | "FSA";
  fName: string;
  mName: string;
  lName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  authorization: boolean;
}

export type AddCardErrors = {
  [key in keyof AddCardValues]?: string[];
};

export type AddCardLabels = {
  [key in keyof AddCardValues]: string;
};

export interface ValidateEvent {
  isValidating: boolean;
}
