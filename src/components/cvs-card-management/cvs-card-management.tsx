import { Component, Host, h, Prop, State, Listen } from "@stencil/core";
import { CvsCardSummaryProps } from "../cvs-card-summary/cvs-card-summary";
import { ModalEvent } from "@cvsdigital_components/cvs-core/dist/types/components/cvs-modal/cvs-modal";
import { CvsData } from "../../api/cvsData";
import { SelectedCardToDelete } from "../../api/types";

type CvsCardIdProps = {
  cardId: string;
};

export type CvsCardDataProps = CvsCardSummaryProps & CvsCardIdProps;

export interface CvsCardManagementProps {
  userId: string;
  validCards?: CvsCardDataProps[];
  expiredCards?: CvsCardDataProps[];
}

export interface CvsManageCardAlert {
  alertType: "error" | "warning" | "success" | "info";
  title: string;
  description: string;
}
@Component({
  tag: "cvs-card-management",
  styleUrl: "cvs-card-management.scss",
  shadow: true
})
export class CvsCardManagement {
  /**
   * show or hide alert banner
   */
  @State() showAlert: boolean = false;
  /**
   * contents of alert banner
   */
  @State() alertData: CvsManageCardAlert;

  /**
   * selected card to delete or edit
   */
  @State() selectedCard: SelectedCardToDelete;

  /**
   * parsedData
   * @memberof cvsCardManagementProps
   * @type: cvsCardManagementProps
   */
  @State() parsedData: CvsCardManagementProps;

  /**
   * id of user cards
   */
  @Prop() readonly userId: string;
  /**
   * list of valid cards to display
   */
  @Prop() readonly validCards?: CvsCardDataProps[] | string;
  /**
   * display edit button
   */
  @Prop() readonly allowEdit?: boolean = false;
  /**
   * list of expired cards to display
   */
  @Prop() readonly expiredCards?: CvsCardDataProps[] | string;
  /**
   * text to display for add card
   */
  @Prop() readonly addCardText?: string;
  /** Indicates a new card was successfully added; display alert banner */
  @Prop() readonly cardAdded: boolean = false;

  public componentWillLoad() {
    this.parsedData = this.parseInputData();
    if (this.cardAdded) {
      this.alertData = {
        alertType: "success",
        title: "Success",
        description: "Your payment method has been added."
      };
      this.showAlert = true;
    }
  }

  /**
   * @private parseInputData
   * @description Executed when there is the change in the component property store.
   *   If the component is initilized through HTML the path prop will be a string.
   * @returns CvsCardManagementProps
   */
  private parseInputData(): CvsCardManagementProps {
    return {
      userId: this.userId,
      validCards: this.formatData(this.validCards),
      expiredCards: this.formatData(this.expiredCards)
    };
  }

  /**
   * @private formatData
   * @description if the given object is string, returns the JSON object of the string
   * @returns CvsCardDataProps[]
   */
  private formatData(data: string | CvsCardDataProps[]): CvsCardDataProps[] {
    let formattedData: CvsCardDataProps[];
    if (typeof data === "string") {
      try {
        formattedData = JSON.parse(data);
      } catch {
        console.warn("Error in parsing the value of props of cvs-card-management");
      }
    } else if (data !== undefined) {
      formattedData = data;
    }
    return formattedData;
  }

  /**
   * @listens: handleDeleteEvent
   * @description: gets executed once the handleDeleteEvents event is fired from cvs-card-management-tile component
   */
  @Listen("handleDeleteEvent")
  handleDelete({ detail }: CustomEvent<CvsCardSummaryProps>) {
    this.selectedCard = {
      cardId: detail.cardId,
      lastFour: detail.cardNum,
      isValid: detail.isValid
    };
    this.openDeleteModal(detail);
  }

  /**
   * @listens: handleEditeEvent
   * @description: gets executed once the handleEditEvents event is fired from cvs-card-management-tile component
   */
  @Listen("handleDeleteEvent")
  handleEdit() {
    // go to edit card url
  }

  /**
   * @private: openDeleteModal
   *
   * @description: opens modal to confirm delete
   */
  private openDeleteModal = (data: CvsCardSummaryProps) => {
    const modal = document.createElement("cvs-modal");
    const modalData = {
      cardData: data,
      type: "column",
      title: '<span class="bold black">Delete payment method</span>',
      subText:
        "<p>Do you want to delete payment method ending in " +
        data.cardNum +
        " from your account?</p>",
      buttons: {
        primary: {
          text: "Yes, delete payment method"
        },
        secondary: {
          text: "No, keep payment method"
        }
      },
      maxWidth: 320
    };
    modal.data = modalData;
    document.body.appendChild(modal);
  };

  /**
   * @listens: modalEvent
   * @description: gets executed once the modalEvent event is fired from cvs-modal component
   * @returns: global Promise<any>
   */
  @Listen("modalEvent", { target: "body" })
  async deleteCard({ detail: eventData }: CustomEvent<ModalEvent>): Promise<void> {
    if (eventData === "cancel" || eventData === "close") {
      return;
    }
    let data;
    // Temporary logic to handle sccenariio where userId is not available
    if(this.userId === undefined){
      data = await CvsData.deleteCreditCard(this.selectedCard.cardId);
    } else{
      data = await CvsData.deleteCard(
        decodeURIComponent(this.userId) == this.userId
          ? encodeURIComponent(this.userId)
          : this.userId,
        this.selectedCard.cardId,
        this.selectedCard.lastFour
      );
    }
     
    if (typeof data === "object" && data?.response?.header?.statusCode === "0000") {
      this.parsedData = {
        userId: this.userId,
        validCards: this.formatData(this.parsedData.validCards).filter(
          (i) => i.cardId !== this.selectedCard.cardId
        ),
        expiredCards: this.formatData(this.parsedData.expiredCards).filter(
          (i) => i.cardId !== this.selectedCard.cardId
        )
      };
      this.alertData = {
        alertType: "success",
        title: "Success",
        description: "Your payment method has been updated."
      };
      this.showAlert = true;
    } else {
      this.alertData = {
        alertType: "error",
        title: "We're sorry",
        description:
          "We can’t complete your request right now due to technical issues. Please try again."
      };
      this.showAlert = true;
    }
    const modal = document.getElementsByTagName("cvs-modal");
    if (modal?.length === 1) {
      modal[0].remove();
    }
  }

  render() {
    return (
      <Host>
        {this.showAlert && (
          <cvs-alert-banner alertType={this.alertData.alertType}>
            <h4 slot="title">{this.alertData.title}</h4>
            <p slot="description">{this.alertData.description}</p>
          </cvs-alert-banner>
        )}
        {!this.parsedData?.validCards?.length && !this.parsedData?.validCards?.length && (
          <p class="no-payment-methods">
            There is no payment information on file for your account. Please add a new payment
            method.
          </p>
        )}
        {this.parsedData?.validCards?.map((card) => {
          card.showDetails = true;
          return <cvs-card-management-tile allowEdit={this.allowEdit} card={card} />;
        })}
        {this.parsedData?.expiredCards?.map((card) => {
          card.showDetails = true;
          return <cvs-card-management-tile allowEdit={this.allowEdit} card={card} />;
        })}
        <cvs-add-a-card addCardText={this.addCardText} />
      </Host>
    );
  }
}
