import { InputLayout } from "./field";

/**
 * Submit
 */
export type Submit = {
  endpoint: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  backend: boolean;
  onSubmit?: (data: any) => void;
  errorCallback?: (error: any) => void;
  successCallbacky?: (data: any) => void;
};

/**
 * ButtonSubmit
 */
export type ButtonSubmit = {
  text?: string; // Default "invia"
  loading?: boolean; // Default: true
  dom?: 'input' | 'button'; // Default: "input"
  block?: boolean; // Default: false
  layout?: InputLayout; // Default: "1/2"
  class?: string; // Default: "fg__button-submit"
  id?: string; // Default: ""
};
