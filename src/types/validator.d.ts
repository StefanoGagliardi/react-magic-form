export type ValidationValue = boolean | number | string | RegExp;

// "Partial" è una Type Utility, ogni paramentro è opzionale
// @see https://www.typescriptlang.org/docs/handbook/utility-types.html
export type FieldValidation = Partial<{
  required: Message | ValidationRule<boolean>;
  min: ValidationRule<number | string>;
  max: ValidationRule<number | string>;
  maxLength: ValidationRule<number | string>;
  minLength: ValidationRule<number | string>;
  pattern: ValidationRule<RegExp>;

  // TODO: UPDATE: validate: ValidationRule<Validate | Record<string, Validate>>;
  // V 1.6.0
  validate: Validate | Record<string, Validate>;

  // V.1.5.0
  equalTo: ValidationRule<string>;

  // valueAsNumber: boolean;
  // valueAsDate: boolean;
  // setValueAs: (value: any) => any;
}>;

// Types for custom "validate" function in "validation" object
export type ValidateResult = Message | Message[] | boolean | undefined;
export type Validate = (data: any) => ValidateResult | Promise<ValidateResult>;

// NB: Per capire i seguenti tipi vedere i due esempi sopra
// NB: T nella nomenclatura TS  indica un iterfaccia generica
//     @see https://www.typescriptlang.org/docs/handbook/generics.html

// NB: Seppure i tipi "Value" sembrano gli stessi la realtà è cosi: <number | string> !== ValidationValue
export type ValidationMessage = string;
export type ValidationRule<T extends ValidationValue = ValidationValue> = T | ValidationValueMessage<T>;

export type Message = string;
export type ValidationValueMessage<
  TValidationValue extends ValidationValue = ValidationValue
> = {
  value: TValidationValue;
  message: Message;
};