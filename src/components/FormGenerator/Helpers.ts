import { FieldSelectData } from "../../types";

interface MessageDefault {
  required: string;
  minLength: string;
  maxLength: string;
  pattern: string;
}
export const validationMessage: MessageDefault = {
  required: "Il campo {fieldName} è richiesto",
  minLength: "La lunghezza minima è {min} caratteri",
  maxLength: "La lunghezza massima è {max} caratteri",
  pattern: "Rispettare le regole di fomattazione",
};

// Get layout class by props
export const getLayoutValue = (layout: string): number => {
  switch (layout) {
    case "1":
      return 1;
    case "1/2":
      return 0.5;
    case "1/3":
      return 0.33;
    case "1/4":
      return 0.25;
    default:
      return 1;
  }
};

export const getLayoutColClass = (layout: string): string => {
  switch (layout) {
    case "1":
      return "fg__col-full";
    case "1/2":
      return "fg__col-half";
    case "1/3":
      return "fg__col-third";
    case "1/4":
      return "fg__col-fourth";
    default:
      return "fg__col-full";
  }
};

// Get default value from Select option list and return value
export const getSelectDefaultValue = (data: FieldSelectData[]): string => {
  return "CO";
};

interface Response {
  status: boolean;
  data: any;
}

export const fetchData = async (url: string): Promise<Response> => {
  const options: RequestInit = {};
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const res: Response = {
      status: true,
      data: result,
    };
    return res;
  } catch (error) {
    const response: Response = {
      status: false,
      data: [],
    };
    return response;
  }
};

export const onSubmitBackendCall = async (url: string, method: string, data: any): Promise<Response> => {
  const getParams = new URLSearchParams(data);

  let options: RequestInit = {};
  if (method == "GET") {
    options = {
      method: method,
    };
  } else {
    options = {
      method: method,
      body: data,
    };
  }

  try {
    const response = await fetch(url + "?" + getParams, options);
    const result = await response.json();
    const res: Response = {
      status: true,
      data: result,
    };
    return res;
  } catch (error) {
    const response: Response = {
      status: false,
      data: [],
    };
    return response;
  }
};
