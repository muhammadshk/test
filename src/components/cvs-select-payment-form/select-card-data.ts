import { SelectCardLabels, SelectCardValues } from "./select-card-types";
export class SelectCardData {
  static readonly initialValues = (val: string): SelectCardValues => ({
    selectCard: val
  });

  static readonly labels: SelectCardLabels = {
    selectCard: "Select a payment method."
  };
}
