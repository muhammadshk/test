import { r as registerInstance, e as createEvent, h, f as Host } from './index-6c675c57.js';

const cvsCardManagementTileCss = ":host{display:block}.card-container{border:1px solid #ccc;background-color:white;padding:16px 16px 0;margin-bottom:16px;box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.1)}.buttons-container{margin:16px -16px 0;display:flex}.buttons-container button{background:none;border:none;border-radius:none;font-weight:bold;font-size:14px;color:#cc0000;width:100%;padding:11px;vertical-align:middle;border-top:1px solid #ccc;cursor:pointer}.buttons-container button:first-child{border-right:1px solid #ccc}.buttons-container button.btn:before{display:inline-block;margin-right:11px;vertical-align:sub}.buttons-container button.delete-btn:before{content:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAWCAYAAAAinad/AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAE6ADAAQAAAABAAAAFgAAAADoj9/WAAAAoElEQVQ4EWNgwA18gFL/seDNuLQw4ZIgVxyXC7C5Cp/YZqq6DNmwLUCvMZKBfWFBwgJjAGmYd5GESGMiu4w0nQRUw1yGM+rR9GOop6rL8BmGbjM6H82hDAz4DMNQTEhg1DBCIYQpPxpmmGFCSAS51EBXCyuSYOLofJg4nEY27AFUFJZt4IoIMO7jki8HSnwCYnzFM0zuH1DdXiAWAWIwAADTHDMHrktNpQAAAABJRU5ErkJggg==\")}.buttons-container button.edit-btn:before{content:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAYAAABCIB6VAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFqADAAQAAAABAAAAFQAAAABbgUmKAAABAUlEQVQ4Ee2UsWoCQRCGV0znA+UJ7IRgl8o+YGUlCLZpUltYpQj6Br5EsBJ9ByuxEMUQ9fthJqwKmrvd0oGP2R1uvrvd27sQ0qJL+3ua4rpb0qORTe7SX8Q/ueSxtIW0CftUuUu1BV/gkSR3qZZ/AMnbbib3rKb6a1S/OYylWv4bxPJn5muQdAxVuBuXUm+I5RuKWaQu/zBhVmnW5fuTPqTFj9RL9HZ3jOu+mZZL7al6+6Ajs7S8Jbu8tBRHGJpQh35gY8k7UPiLoucvJoz0xA2ogMtVK3T4uf4sZswkkPATviFZiiOsIpELlUfwrx8K153FE7MaaD+nMDcWlnXDUnECIuJ9eXYevQAAAAAASUVORK5CYII=\")}";

const CvsCardManagementTile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.handleDeleteEvent = createEvent(this, "handleDeleteEvent", 7);
    this.handleEditEvent = createEvent(this, "handleEditEvent", 7);
    /**
     * display edit button
     */
    this.allowEdit = false;
    /**
     * @private: handleDelete
     * @param: (e: Event, card: cvsCardSummaryProps)
     * @description: calls handleDeleteEvent emitter
     */
    this.handleDelete = (e, card) => {
      e.preventDefault();
      this.handleDeleteEvent.emit(card);
    };
    /**
     * @private: handleEdit
     * @param: (e: Event, card: cvsCardSummaryProps)
     * @description: calls handleEditEvent emitter
     */
    this.handleEdit = (e, card) => {
      e.preventDefault();
      this.handleEditEvent.emit(card);
    };
  }
  render() {
    return (h(Host, null, h("div", { class: "card-container" }, h("cvs-card-summary", Object.assign({}, this.card)), h("div", { class: "buttons-container" }, h("button", { "aria-label": "delete", class: "btn delete-btn", onClick: (e) => this.handleDelete(e, this.card) }, "Delete"), this.allowEdit && (h("button", { class: "btn edit-btn", onClick: (e) => this.handleEdit(e, this.card) }, "Edit"))))));
  }
};
CvsCardManagementTile.style = cvsCardManagementTileCss;

export { CvsCardManagementTile as cvs_card_management_tile };
