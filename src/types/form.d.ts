import { Field } from './field';
import { ButtonSubmit, Submit } from './submit';

// Main configuration object
export type FormConfiguration = {
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
