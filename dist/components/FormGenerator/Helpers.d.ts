import { FieldSelectData } from "FormGenerator";
interface MessageDefault {
    required: string;
    minLength: string;
    maxLength: string;
    pattern: string;
}
export declare const validationMessage: MessageDefault;
export declare const getLayoutValue: (layout: string) => number;
export declare const getLayoutColClass: (layout: string) => string;
export declare const getSelectDefaultValue: (data: FieldSelectData[]) => string;
interface Response {
    status: boolean;
    data: any;
}
export declare const fetchData: (url: string) => Promise<Response>;
export declare const onSubmitBackendCall: (url: string, method: string, data: any) => Promise<Response>;
export {};
