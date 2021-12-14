import { EventEmitter } from "../../stencil-public-runtime";
import { ModalEvent } from "@cvsdigital_components/cvs-core/dist/types/components/cvs-modal/cvs-modal";
import { EditCardValues, ValidateEvent } from "./editcard-types";
declare global {
  interface Window {
    eProtectCB: any;
    eProtectInputsEmptyCB: any;
  }
}
export declare class CvsEditPaymentForm {
  /**
   * boolean to control which "success" event is acted upon
   */
  private cancelModalActive;
  el: HTMLCvsEditcardFormElement;
  formValid: boolean;
  formValues: EditCardValues;
  apiFailure: boolean;
  /** userId token passed from url param */
  readonly token: string;
  /** noCard passed from url param */
  readonly noCard: string;
  /** noValidCard passed from url param */
  readonly noValidCard: string;
  /** editCard passed as prop which decides that the form will be using as edit payment card without vantiv or add payment option with vantiv but without hsa/fsa option*/
  readonly editCard?: EditCardValues | string;
  private _editCard;
  private mobileInput;
  private monthInput;
  private yearInput;
  private stateInput;
  private alertBanner?;
  private showSpinner;
  /**
   * @event editCard
   * @description event emitter for editCard event
   */
  handleAddEvent: EventEmitter<any>; /**



  /**
   *Test input for numeric value
   */
  private readonly handleNumeric;
  /**
   * format mobile number on delete
   * @param event
   */
  private readonly formatOnDelete;
  /**
   * Format mobile number
   */
  private readonly format;
  private readonly formatPhoneNumber;
  componentDidLoad(): void;
  editCardWatcher(): void;
  /**
   * @event editCard
   * @description event emitter for editCard event
   */
  handleEditEvent: EventEmitter<EditCardValues>;
  private readonly expDateConverter;
  private readonly mobileNumberFormatter;
  /**
   * @private: handleEdit
   * @param: (e: Event, card: cvsCardSummaryProps)
   * @description: calls handleEditEvent emitter
   */
  private readonly handleEdit;
  /**
   * event emitter
   * fires when errors are present in form
   */
  formErrorEvt: EventEmitter;
  /**
   * Custom event emitter to indicate validation process
   * and trigger loader status
   * @emits ValidateEvent
   */
  isValidating: EventEmitter<ValidateEvent>;
  private readonly isValidatingHandler;
  componentWillLoad(): void;
  error: boolean;
  componentDidUpdate(): void;
  /**
   * Calls add-card API
   * @param vantivRes @private @readonly
   * @returns Promise<void>
   */
  private readonly AddCard;
  /**
   * @param res @private @readonly
   * Callback triggered by eProtect/Vantiv
   */
  private readonly eProtectCB;
  /**
   * onClick notify next.js app to router.push() to appropriate edit-card page
   */
  cancelRedirect: EventEmitter;
  private readonly cancelRedirectHandler;
  /**
   * @listens: modalEvent
   * @description: gets executed once the modalEvent event is fired from cvs-modal component
   * @returns: global Promise<any>
   */
  cancelEditCard(event: CustomEvent<ModalEvent>): void;
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
  private focusField;
  /**
   * Renders the form's JSX
   * @param props @returns JSX.Element
   */
  private readonly renderer;
  render(): any;
}
