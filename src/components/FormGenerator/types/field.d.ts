export declare type Field = {
  type: InputTypes;
  label?: string;
  layout: InputLayout;
  id: string;
  name: string;
  placeholder?: string;
  validation?: FieldValidation[];
};

export declare type InputTypes = "text" | "email" | "password" | "select" | "textarea" | "address" | "datepicker";
export declare type InputLayout = "1" | "1/2" | "1/3" | "1/4";