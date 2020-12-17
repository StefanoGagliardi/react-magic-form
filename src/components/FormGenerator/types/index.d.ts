/**
 * Custom type for module "FormGenerator"
 * Main types in this file and other are imported
 *
 * @see https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html
 *
 * @author Stefano Gagliardi <stefano.gagliardi@sitsirl.it>
 * @version 0.1.0
 */

declare module "FormGenerator" {
  // Import react types
  import React from "react";

  /**
   * Import validation type, required in "Field" interface
   */
  import "./validator";

  // Import field types
  import "./field";

  // Main components and his props
  interface FormGeneratorProps {
    form: FormConfiguration;
  }
  export declare const FormGenerator: React.FC<FormGeneratorProps> = (props: FormGeneratorProps) => ReactElement;

  // Header components and his props
  interface FormHeadingProps {
    title?: string;
    subTitle?: string;
  }
  export declare const FormHeading: React.FC<FormHeadingProps> = (props: FormGeneratorProps) => ReactElement;

  // Form fields
  interface FormFieldsProps {
    fields: Fields[];
  }
  export declare const FormFields: React.FC<FormFieldsProps> = (props: FormFieldsProps) => ReactElement;

  // Form Generator Field (render)
  export declare const FormGeneratorField: React.FC<FieldBase> = (props: FieldBase) => ReactElement;

  // Main configuration object
  export declare type FormConfiguration = {
    // Entry text
    title?: string;
    subTitle?: string;

    // Button submit
    buttonSubmit?: ButtonSubmit;

    // Submit
    submit: Submit;

    // Form fiels
    fields: Field[];
  };

  /**
   * Submit
   */
  declare type Submit = {
    endpoint: string;
    method: "GET" | "POST" | "PUT" | "DELETE";
    backend: boolean;
    onSubmit?: (data: any) => void;
    errorCallback?: (error: any) => void;
    successCallbacky?: (data: any) => void;
  };

  /**
   * ButtonSubmit
   */
  declare type ButtonSubmit = {
    text?: string; // Default "invia"
    loading?: boolean; // Default: true
    dom?: "input" | "button"; // Default: "input"
    block?: boolean; // Default: false
    layout?: InputLayout; // Default: "1/2"
    class?: string; // Default: "fg__button-submit"
    id?: string; // Default: ""
  };

  /**
   * ============== FIELD TYPES ================
   */

  // 1. Number 2. Datepicker 3. Address
  export declare type InputTypes = "text" | "email" | "password" | "select" | "textarea" | "checkbox";
  export declare type InputLayout = "1" | "1/2" | "1/3" | "1/4";

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

  export declare type FieldSelectData = {
    label: string;
    value: string;
    disabled?: boolean;
    selected?: boolean;
  };

  /**
   * Input type Text component
   * Question: React.FC<FieldBase | HTMLInputElement> ?
   */
  export declare const InputText: React.FC<FieldBase | HTMLInputElement> = (props: FieldBase | HTMLInputElement) =>
    ReactElement;

  /**
   * Input type email component
   */
  export declare const InputEmail: React.FC<FieldBase | HTMLInputElement> = (props: FieldBase | HTMLInputElement) =>
    ReactElement;

  /**
   * Input type password - componente
   */
  export declare const InputPassword: React.FC<FieldBase | HTMLInputElement> = (props: FieldBase | HTMLInputElement) =>
    ReactElement;

  /**
   * Input type Select - componente
   */
  export declare const InputSelect: React.FC<FieldSelect | HTMLSelectElement> = (
    props: FieldSelect | HTMLSelectElement,
  ) => ReactElement;

  /**
   * ================= VALIDATION TYPE ===================
   */
  export declare type FieldError = {
    type: string;
    message: string;
  };
}
