import { EventEmitter } from "../../stencil-public-runtime";
import { ModalEvent } from "@cvsdigital_components/cvs-core/dist/types/components/cvs-modal/cvs-modal";
import { iAnalytics } from "../../global/types";
export declare class CvsCardAuth {
  /**
   * data to emit via EventEmitter
   */
  readonly analyticsModalData?: {
    primary: iAnalytics;
    secondary: iAnalytics;
    dismiss: iAnalytics;
  };
  /**
   * @element authElement
   * @description element of cvs-card-auth
   */
  cardAuthElement: HTMLCvsCardAuthElement;
  /**
   * @event setMyCVSStoreStatus
   * @description event emitter for setMyCVSStoreStatus event
   */
  closeAuthModal: EventEmitter<boolean>;
  /**
   * @private: openAuthModal
   *
   * @description: onclick listener for auth modal
   * @returns: function
   */
  private openAuthModal;
  /**
   * @listens: modalEvent
   * @description: gets executed once the modalEvent event is fired from cvs-modal component
   * @returns: global Prmoise<any>
   */
  changeMyStore({ detail: eventData }: CustomEvent<ModalEvent>): Promise<any>;
  render(): any;
}
