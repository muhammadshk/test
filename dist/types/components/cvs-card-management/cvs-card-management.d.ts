import { CvsCardSummaryProps } from "../cvs-card-summary/cvs-card-summary";
import { ModalEvent } from "@cvsdigital_components/cvs-core/dist/types/components/cvs-modal/cvs-modal";
import { SelectedCardToDelete } from "../../api/types";
declare type CvsCardIdProps = {
  cardId: string;
};
export declare type CvsCardDataProps = CvsCardSummaryProps & CvsCardIdProps;
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
export declare class CvsCardManagement {
  /**
   * show or hide alert banner
   */
  showAlert: boolean;
  /**
   * contents of alert banner
   */
  alertData: CvsManageCardAlert;
  /**
   * selected card to delete or edit
   */
  selectedCard: SelectedCardToDelete;
  /**
   * parsedData
   * @memberof cvsCardManagementProps
   * @type: cvsCardManagementProps
   */
  parsedData: CvsCardManagementProps;
  /**
   * id of user cards
   */
  readonly userId: string;
  /**
   * list of valid cards to display
   */
  readonly validCards?: CvsCardDataProps[] | string;
  /**
   * display edit button
   */
  readonly allowEdit?: boolean;
  /**
   * list of expired cards to display
   */
  readonly expiredCards?: CvsCardDataProps[] | string;
  /**
   * text to display for add card
   */
  readonly addCardText?: string;
  /** Indicates a new card was successfully added; display alert banner */
  readonly cardAdded: boolean;
  componentWillLoad(): void;
  /**
   * @private parseInputData
   * @description Executed when there is the change in the component property store.
   *   If the component is initilized through HTML the path prop will be a string.
   * @returns CvsCardManagementProps
   */
  private parseInputData;
  /**
   * @private formatData
   * @description if the given object is string, returns the JSON object of the string
   * @returns CvsCardDataProps[]
   */
  private formatData;
  /**
   * @listens: handleDeleteEvent
   * @description: gets executed once the handleDeleteEvents event is fired from cvs-card-management-tile component
   */
  handleDelete({ detail }: CustomEvent<CvsCardSummaryProps>): void;
  /**
   * @listens: handleEditeEvent
   * @description: gets executed once the handleEditEvents event is fired from cvs-card-management-tile component
   */
  handleEdit(): void;
  /**
   * @private: openDeleteModal
   *
   * @description: opens modal to confirm delete
   */
  private openDeleteModal;
  /**
   * @listens: modalEvent
   * @description: gets executed once the modalEvent event is fired from cvs-modal component
   * @returns: global Promise<any>
   */
  deleteCard({ detail: eventData }: CustomEvent<ModalEvent>): Promise<void>;
  render(): any;
}
export {};
