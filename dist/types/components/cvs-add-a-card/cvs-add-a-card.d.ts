import { EventEmitter } from "../../stencil-public-runtime";
export declare class CvsAddACard {
  /**
   * onClick notify next.js app to router.push() to appropriate add-card page
   */
  routeToAddCard: EventEmitter;
  private routeToAddCardHandler;
  /**
   * text to display for add card
   */
  readonly addCardText?: string;
  private icon;
  render(): any;
}
