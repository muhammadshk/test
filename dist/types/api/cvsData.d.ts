import { AddCardResponse, BillingInfo, SelectCard, DeleteCard } from "./types";
export declare class CvsData {
  private static readonly getCvsHeader;
  private static readonly getCredentials;
  private static readonly getReqInit;
  private static readonly generateUUID;
  static readonly addUserCard: (id: string, billingInfoObject: BillingInfo, idType?: string) => Promise<AddCardResponse>;
  static savePaymentInfo: (cardInfo: any) => Promise<any>;
  static readonly deleteCard: (id: string, cardId: string, lastFour: string, idType?: string) => Promise<DeleteCard>;
  static readonly selectUserCard: (id: string, cardId: string, lastFour: string, idType?: string) => Promise<SelectCard>;
  static readonly deleteCreditCard: (cardId: string) => Promise<DeleteCard>;
}
