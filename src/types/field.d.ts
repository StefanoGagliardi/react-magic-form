import { FieldValidation } from "./validator";

  // 1. Number 2. Datepicker 3. Address
  export type InputTypes = "text" | "email" | "password" | "select" | "textarea" | "checkbox";
  export type InputLayout = "1" | "1/2" | "1/3" | "1/4";

  export interface FieldBase extends FieldSelect {
    id: string;
    name: string;
    placeholder?: string;
    validation: FieldValidation;
    autocomplete?: string;
  }

  export interface Field extends FieldBase {
    type: InputTypes;
    label?: string;
    layout?: InputLayout;
  }

  /**
   * Extends interface of FieldBase for Select input data, uri, ecc..
   */
  export interface FieldSelect {
    dataLoading?: boolean;
    data?: FieldSelectData[];
    fetchDataFromUrl?: string;
  }

  export type FieldSelectData = {
    label: string;
    value: string;
    disabled?: boolean;
    selected?: boolean;
  };