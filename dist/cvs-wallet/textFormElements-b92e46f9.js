/*
This is an exact copy of the "Enterprise-Digital" component library utility file
This is only being copied directly because we are implementing a form and making copies
of their components internally because their library is not ready
Please remove this file and its functions once the enterprise component library is
swapped out in favor of our internal form components
*/
const getHelperId = (id) => {
  return `${id}__helper`;
};
const getErrorId = (id) => {
  return `${id}__error`;
};
const getAriaDescribedBy = (helperText, errorText, id) => {
  const helperId = getHelperId(id);
  const errorId = getErrorId(id);
  if (helperText && errorText) {
    return `${helperId} ${errorId}`;
  }
  if (helperText) {
    return helperId;
  }
  if (errorText) {
    return errorId;
  }
  return null;
};

export { getAriaDescribedBy as a, getHelperId as b, getErrorId as g };
