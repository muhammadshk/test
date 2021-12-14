import { EventEmitter } from "../../stencil-public-runtime";
import { ModalEvent } from "@cvsdigital_components/cvs-core/dist/types/components/cvs-modal/cvs-modal";
import { AddCardValues, ValidateEvent } from "./addcard-types";
declare global {
  interface Window {
    eProtectCB: any;
    eProtectInputsEmptyCB: any;
  }
}
export declare class CvsAddcardForm {
  /**
   * boolean to control which "success" event is acted upon
   */
  private cancelModalActive;
  el: HTMLCvsAddcardFormElement;
  formValid: boolean;
  formValues: AddCardValues;
  apiFailure: boolean;
  /** userId token passed from url param */
  readonly token: string;
  /** noCard passed from url param */
  readonly noCard: string;
  /** noValidCard passed from url param */
  readonly noValidCard: string;
  /**
   * Custom event emitted when card successfully added
   * @emits string
   */
  cardAdded: EventEmitter<void>;
  private readonly cardAddedHandler;
  /**
   * Custom event emitter to indicate validation process
   * and trigger loader status
   * @emits ValidateEvent
   */
  isValidating: EventEmitter<ValidateEvent>;
  private readonly isValidatingHandler;
  componentWillLoad(): void;
  /**
   * Calls add-card API
   * @param vantivRes @private @readonly
   * @returns Promise<void>
   */
  private readonly addCard;
  /**
   * @param res @private @readonly
   * Callback triggered by eProtect/Vantiv
   */
  private readonly eProtectCB;
  /**
   * onClick notify next.js app to router.push() to appropriate add-card page
   */
  cancelRedirect: EventEmitter;
  private readonly cancelRedirectHandler;
  /**
   * @listens: modalEvent
   * @description: gets executed once the modalEvent event is fired from cvs-modal component
   * @returns: global Promise<any>
   */
  cancelAddCard(event: CustomEvent<ModalEvent>): void;
  /**
   * @private: openCancelModal
   **/
  private openCancelModal;
  /**
   * Builds props for cvs-alert-banner
   * @param props @returns @private @readonly
   */
  private readonly buildAlertBannerProps;
  /**
   * Suppresses non-numeric keys when typing in numeric form el
   * @private @readonly @param event
   */
  private readonly numericOnly;
  /**
   * Initiates Vantiv call
   * @returns Promise<void> @private @readonly
   */
  private readonly validateCard;
  /**
   * Triggers submit process
   * @private @readonly
   */
  private readonly triggerSubmit;
  /**
   * Form submit handler
   * @param event @private @readonly
   */
  private readonly handleSubmit;
  /**
   * Renders the form's JSX
   * @param props @returns JSX.Element
   */
  private readonly renderer;
  render(): any;
}
