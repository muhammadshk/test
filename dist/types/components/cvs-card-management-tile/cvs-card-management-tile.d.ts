import { EventEmitter } from "../../stencil-public-runtime";
import { CvsCardSummaryProps } from "../cvs-card-summary/cvs-card-summary";
export declare class CvsCardManagementTile {
  /**
   * card data to display
   */
  readonly card?: CvsCardSummaryProps;
  /**
   * display edit button
   */
  readonly allowEdit?: boolean;
  /**
   * @event deleteCard
   * @description event emitter for deleteCard event
   */
  handleDeleteEvent: EventEmitter<CvsCardSummaryProps>;
  /**
   * @event editCard
   * @description event emitter for editCard event
   */
  handleEditEvent: EventEmitter<CvsCardSummaryProps>;
  /**
   * @private: handleDelete
   * @param: (e: Event, card: cvsCardSummaryProps)
   * @description: calls handleDeleteEvent emitter
   */
  private handleDelete;
  /**
   * @private: handleEdit
   * @param: (e: Event, card: cvsCardSummaryProps)
   * @description: calls handleEditEvent emitter
   */
  private handleEdit;
  render(): any;
}
