import { AddCardLabels, AddCardValues } from "./addcard-types";
import { SchemaOf } from "yup";
import { VantivConfig } from "@cvsdigital_components/cvs-core/dist/types/components/cvs-vantiv/cvsVantivTypes";
export declare class AddCardData {
  static readonly initialValues: AddCardValues;
  static readonly validationSchema: () => SchemaOf<AddCardValues>;
  static readonly labels: AddCardLabels;
  private static readonly errorLabels;
  static readonly vantivConfig: VantivConfig;
  static readonly states: string[];
}
