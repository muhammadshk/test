# cvs-confirm-payment



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute        | Description         | Type      | Default     |
| --------------------- | ---------------- | ------------------- | --------- | ----------- |
| `goBack` _(required)_ | `go-back`        | where to go back to | `string`  | `undefined` |
| `selectSuccess`       | `select-success` | if card was added   | `boolean` | `false`     |


## Events

| Event          | Description                                                       | Type               |
| -------------- | ----------------------------------------------------------------- | ------------------ |
| `goBackButton` | event to tell next app to router.push back after payment selected | `CustomEvent<any>` |


## Dependencies

### Depends on

- cvs-alert-banner

### Graph
```mermaid
graph TD;
  cvs-confirm-payment --> cvs-alert-banner
  style cvs-confirm-payment fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
