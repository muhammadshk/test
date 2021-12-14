# cvs-card-auth



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute | Description                   | Type                                                                   | Default     |
| -------------------- | --------- | ----------------------------- | ---------------------------------------------------------------------- | ----------- |
| `analyticsModalData` | --        | data to emit via EventEmitter | `{ primary: iAnalytics; secondary: iAnalytics; dismiss: iAnalytics; }` | `undefined` |


## Events

| Event            | Description | Type                   |
| ---------------- | ----------- | ---------------------- |
| `closeAuthModal` |             | `CustomEvent<boolean>` |


## Dependencies

### Used by

 - [cvs-addcard-form](../cvs-addcard-form)
 - [cvs-editcard-form](../cvs-editcard-form)

### Depends on

- cvs-modal

### Graph
```mermaid
graph TD;
  cvs-card-auth --> cvs-modal
  cvs-addcard-form --> cvs-card-auth
  cvs-editcard-form --> cvs-card-auth
  style cvs-card-auth fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
