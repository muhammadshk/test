import { EventEmitter } from "../../stencil-public-runtime";
export declare class CvsConfirmPayment {
  /**
   * where to go back to
   */
  readonly goBack: string;
  /**
   * if card was added
   */
  readonly selectSuccess: boolean;
  /**
   * event to tell next app to router.push back after payment selected
   */
  goBackButton: EventEmitter;
  private readonly goBackButtonHandler;
  render(): any;
}
