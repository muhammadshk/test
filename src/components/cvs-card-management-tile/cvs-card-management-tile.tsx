import { Component, Host, h, Prop, Event, EventEmitter } from "@stencil/core";
import { CvsCardSummaryProps } from "../cvs-card-summary/cvs-card-summary";

@Component({
  tag: "cvs-card-management-tile",
  styleUrl: "cvs-card-management-tile.scss",
  shadow: true
})
export class CvsCardManagementTile {
  /**
   * card data to display
   */
  @Prop() readonly card?: CvsCardSummaryProps;

  /**
   * display edit button
   */
  @Prop() readonly allowEdit?: boolean = false;
  /**
   * @event deleteCard
   * @description event emitter for deleteCard event
   */
  @Event() handleDeleteEvent!: EventEmitter<CvsCardSummaryProps>;
  /**
   * @event editCard
   * @description event emitter for editCard event
   */
  @Event() handleEditEvent!: EventEmitter<CvsCardSummaryProps>;

  /**
   * @private: handleDelete
   * @param: (e: Event, card: cvsCardSummaryProps)
   * @description: calls handleDeleteEvent emitter
   */
  private handleDelete = (e: Event, card: CvsCardSummaryProps): void => {
    e.preventDefault();
    this.handleDeleteEvent.emit(card);
  };
  /**
   * @private: handleEdit
   * @param: (e: Event, card: cvsCardSummaryProps)
   * @description: calls handleEditEvent emitter
   */
  private handleEdit = (e: Event, card: CvsCardSummaryProps): void => {
    e.preventDefault();
    this.handleEditEvent.emit(card);
  };

  render() {
    return (
      <Host>
        <div class="card-container">
          <cvs-card-summary {...this.card}></cvs-card-summary>
          <div class="buttons-container">
            <button
              aria-label={"delete"}
              class="btn delete-btn"
              onClick={(e) => this.handleDelete(e, this.card)}
            >
              Delete
            </button>
            {/* To be added back in in PI2 */}

            {this.allowEdit && (
              <button class="btn edit-btn" onClick={(e) => this.handleEdit(e, this.card)}>
                Edit
              </button>
            )}
          </div>
        </div>
      </Host>
    );
  }
}
