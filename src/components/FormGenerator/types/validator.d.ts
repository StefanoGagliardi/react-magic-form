/**
 * Esempio UNO della struttura:
 *
 * TYPO: ValidationRule<T extends ValidationValue> = T;
 *
 * validation = {
 *  required: true, // required: T
 * }
 */

/**
 * Esempio DUE della struttura:
 *
 * TYPO: ValidationRule<T extends ValidationValue> = ValidationValueMessage<T>;
 *
 * validation = {
 *  required: {
 *    value: true, // value: T
 *    message: "Campo richeisto" // message: Message
 *  }
 * }
 */

// "Partial" è una Type Utility, ogni paramentro è opzionale
// @see https://www.typescriptlang.org/docs/handbook/utility-types.html
export declare type FieldValidation = Partial<{
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
export declare type ValidateResult = Message | Message[] | boolean | undefined;
export declare type Validate = (data: any) => ValidateResult | Promise<ValidateResult>;

// NB: Per capire i seguenti tipi vedere i due esempi sopra
// NB: T nella nomenclatura TS indica un iterfaccia generica
//     @see https://www.typescriptlang.org/docs/handbook/generics.html

// NB: Seppure i tipi "Value" sembrano gli stessi la realtà è cosi: <number | string> !== ValidationValue
export declare type ValidationRule<T extends ValidationValue = ValidationValue> = T | ValidationValueMessage<T>;
export declare type ValidationValue<T extends ValidationValue = ValidationValue> = {
  value: T;
  message: Message;
};

// Tipi accettati dei valori passati ai metodi di validazione
export declare type ValidationValue = boolean | number | string | RegExp;
export declare type ValidationMessage = string;