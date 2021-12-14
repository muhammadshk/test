# cvs-add-a-card



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute       | Description                  | Type     | Default     |
| ------------- | --------------- | ---------------------------- | -------- | ----------- |
| `addCardText` | `add-card-text` | text to display for add card | `string` | `undefined` |


## Events

| Event            | Description                                                              | Type               |
| ---------------- | ------------------------------------------------------------------------ | ------------------ |
| `routeToAddCard` | onClick notify next.js app to router.push() to appropriate add-card page | `CustomEvent<any>` |


## Dependencies

### Used by

 - [cvs-card-management](../cvs-card-management)
 - [cvs-select-payment](../cvs-select-payment)

### Graph
```mermaid
graph TD;
  cvs-card-management --> cvs-add-a-card
  cvs-select-payment --> cvs-add-a-card
  style cvs-add-a-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
