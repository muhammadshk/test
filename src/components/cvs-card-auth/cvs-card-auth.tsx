import { Component, Host, h, Prop, Listen, Element, EventEmitter, Event } from "@stencil/core";
import { ModalEvent } from "@cvsdigital_components/cvs-core/dist/types/components/cvs-modal/cvs-modal";
import { iAnalytics } from "../../global/types";

@Component({
  tag: "cvs-card-auth",
  styleUrl: "cvs-card-auth.scss",
  shadow: true
})
export class CvsCardAuth {
  /**
   * data to emit via EventEmitter
   */
  @Prop() readonly analyticsModalData?: {
    primary: iAnalytics;
    secondary: iAnalytics;
    dismiss: iAnalytics;
  };

  /**
   * @element authElement
   * @description element of cvs-card-auth
   */
  @Element() cardAuthElement!: HTMLCvsCardAuthElement;

  /**
   * @event setMyCVSStoreStatus
   * @description event emitter for setMyCVSStoreStatus event
   */
  @Event() closeAuthModal!: EventEmitter<boolean>;

  /**
   * @private: openAuthModal
   *
   * @description: onclick listener for auth modal
   * @returns: function
   */
  private openAuthModal = () => {
    const modal = document.createElement("cvs-modal");
    const modalData = {
      type: "default",
      title:
        '<span class="bold black">Authorization to Store and Use Card for Future Services</span>',
      subText:
        "<p>I authorize CVS Pharmacy on behalf of MinuteClinic to store on file my credit or debit card (“My Card”) that I have entered through my cvs.com account and to charge My Card for any remaining balance after my insurance plan has paid its portion of my visit. My Card will be stored and available for future use with my consent.</p>" +
        "<p>I understand I have the right to revoke this authorization at any time by requesting my payment on file to be removed, either (a), in person, at a CVS Pharmacy or (b) by calling my local store. This authorization will remain in effect until I revoke it. I understand that a revocation will not apply to any charges or transactions that occurred before the date of the revocation. CVS Pharmacy and/or MinuteClinic may cancel my participation in the Payment on File service at any time, for any reason, in its sole discretion. Any changes to this agreement will be posted at cvs.com/delivery payment.</p>" +
        "<p>I authorize CVS Pharmacy and/or MinuteClinic to disclose my health information to any Person as required to respond to and resolve a payment dispute relating to the Payment on File service. This authorization is limited to the health information necessary to respond to and resolve a payment dispute, including information relating to any service I receive in connection with Payment on File service and shall be in force and in effect while I am enrolled in Payment on File service. I understand that if I do not authorize the disclosure described in this section my health care will not be affected; however, I will not be able to participate in Payment on File service.</p>" +
        "<p>I understand that California law prohibits the recipient of my health information from making further disclosures of it without obtaining an additional authorization from me, except in cases in which a further disclosure is permitted or required by law. However, if the recipient of my health information is not located in California, I understand that the information used or disclosed pursuant to this authorization may be subject to re-disclosure by the recipient and may no longer be protected by federal law or by the law of the state in which the recipient is located. I understand that I have a right to receive a copy of this authorization upon my request, at any CVS pharmacy.</p>",
      buttons: {
        primary: {
          text: "Close"
        }
      },
      analyticsData: this.analyticsModalData,
      analyticsFallback: {
        primary: {
          // OK
          type: "link",
          payload: {
            link_name: "implement me:set mycvs:ok"
          }
        },
        secondary: {
          // Cancel
          type: "link",
          payload: {
            link_name: "implement me:set mycvs:cancel"
          }
        },
        dismiss: {
          // X
          type: "link",
          payload: {
            link_name: "implement me:set mycvs:close"
          }
        }
      },
      maxWidth: 656
    };
    modal.data = modalData;
    document.body.appendChild(modal);
  };

  /**
   * @listens: modalEvent
   * @description: gets executed once the modalEvent event is fired from cvs-modal component
   * @returns: global Prmoise<any>
   */
  @Listen("modalEvent", { target: "body" })
  async changeMyStore({ detail: eventData }: CustomEvent<ModalEvent>): Promise<any> {
    if (eventData === "cancel" || eventData === "close") {
      this.cardAuthElement?.shadowRoot?.querySelector("a")?.focus();
      return;
    }
    this.closeAuthModal.emit(false);
    setTimeout(() => {
      const modal = document.getElementsByTagName("cvs-modal");
      if (modal?.length === 1) {
        modal[0].remove();
        this.closeAuthModal.emit(true);
      }
    }, 0);
  }

  render() {
    return (
      <Host class="wrapper">
        <button onClick={this.openAuthModal} id="cvs-auth">
          Read Authorization to Store and Use Credit Card for Future Services
        </button>
      </Host>
    );
  }
}
