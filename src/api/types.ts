import { VantivCardType } from "@cvsdigital_components/cvs-core/dist/types/components/cvs-vantiv/cvsVantivTypes";

export interface AddCard {
  response: AddCardResponse;
}

export interface AddCardResponse {
  header: AddCardHeader;
  details?: AddCardDetail;
  errors?: { [key: number]: string }; // TODO: get full types from BE team.
  responseCode?: string; //Todo: get all codes from BE team
}

export interface AddCardHeader {
  statusDesc: string;
  statusMessage: string;
  routeUrl: string;
  statusCode: string;
}

export interface AddCardDetail {
  lastFour: string;
  cardId: string;
}

type YesNo = "Y" | "N";
type TrueFalse = "true" | "false";
export interface BillingInfo {
  ccNum: string;
  ccExpDate: string; // "MDgyMg=="
  ccType: VantivCardType;
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  country: "US";
  makeDefaultFlag: YesNo;
  saveCardForFutureFlag: YesNo;
  isFsaCard: YesNo;
  token: TrueFalse;
  accountRangeId: string | null;
  bin: string;
  paymentType: "creditCard";
  isCCLowToken: YesNo;
}

export interface SelectedCardToDelete {
  cardId: string;
  lastFour: string;
  isValid: boolean;
}
export interface DeleteCard {
  response: DeleteCardResponse;
}

export interface DeleteCardResponse {
  header: DeleteCardHeader;
  errors?: DeleteCardError;
}

export interface DeleteCardHeader {
  statusDesc: string;
  statusCode: string;
  statusMessage?: string;
  refId: string;
}

export interface DeleteCardError {
  "7000"?: string;
  "8000"?: string;
}

export interface SelectCard {
  response: SelectCardResponse;
}

export interface SelectCardResponse {
  header: SelectCardHeader;
  errors?: SelectCardError;
}

export interface SelectCardHeader {
  statusDesc: string;
  statusCode: string;
  statusMessage?: string;
  refId: string;
}

export interface SelectCardError {
  "7000"?: string;
  "8000"?: string;
}
