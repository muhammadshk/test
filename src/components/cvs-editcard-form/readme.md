# cvs-editcard-form



<!-- Auto Generated Below -->


## Properties

| Property                   | Attribute       | Description                                                                                                                                                        | Type                       | Default     |
| -------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- | ----------- |
| `editCard`                 | `edit-card`     | editCard passed as prop which decides that the form will be using as edit payment card without vantiv or add payment option with vantiv but without hsa/fsa option | `EditCardValues \| string` | `undefined` |
| `noCard` _(required)_      | `no-card`       | noCard passed from url param                                                                                                                                       | `string`                   | `undefined` |
| `noValidCard` _(required)_ | `no-valid-card` | noValidCard passed from url param                                                                                                                                  | `string`                   | `undefined` |
| `token` _(required)_       | `token`         | userId token passed from url param                                                                                                                                 | `string`                   | `undefined` |


## Events

| Event             | Description                                                                   | Type                          |
| ----------------- | ----------------------------------------------------------------------------- | ----------------------------- |
| `cancelRedirect`  | onClick notify next.js app to router.push() to appropriate edit-card page     | `CustomEvent<any>`            |
| `formErrorEvt`    | event emitter fires when errors are present in form                           | `CustomEvent<any>`            |
| `handleAddEvent`  |                                                                               | `CustomEvent<any>`            |
| `handleEditEvent` |                                                                               | `CustomEvent<EditCardValues>` |
| `isValidating`    | Custom event emitter to indicate validation process and trigger loader status | `CustomEvent<ValidateEvent>`  |


## Dependencies

### Depends on

- cvs-modal
- cvs-alert-banner
- cvs-select
- cvs-vantiv
- cvs-text-input
- [cvs-card-auth](../cvs-card-auth)
- cvs-fieldset
- cvs-checkbox
- cvs-form

### Graph
```mermaid
graph TD;
  cvs-editcard-form --> cvs-modal
  cvs-editcard-form --> cvs-alert-banner
  cvs-editcard-form --> cvs-select
  cvs-editcard-form --> cvs-vantiv
  cvs-editcard-form --> cvs-text-input
  cvs-editcard-form --> cvs-card-auth
  cvs-editcard-form --> cvs-fieldset
  cvs-editcard-form --> cvs-checkbox
  cvs-editcard-form --> cvs-form
  cvs-select --> cvs-form-error
  cvs-text-input --> cvs-form-error
  cvs-card-auth --> cvs-modal
  cvs-fieldset --> cvs-checkbox
  cvs-fieldset --> cvs-radio-button
  cvs-fieldset --> cvs-form-error
  style cvs-editcard-form fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
