import { EditCardLabels, EditCardValues } from "./editcard-types";
import { SchemaOf } from "yup";
import { VantivConfig } from "@cvsdigital_components/cvs-core/dist/types/components/cvs-vantiv/cvsVantivTypes";
export declare class EditCardData {
  static readonly initialValues: EditCardValues;
  static readonly validationSchema: () => SchemaOf<EditCardValues>;
  static readonly labels: EditCardLabels;
  private static readonly errorLabels;
  static readonly vantivConfig: VantivConfig;
  static readonly months: string[];
  static readonly years: number[];
  static readonly states: string[];
}
