// Import core
import React, { ReactElement, useEffect, useState } from "react";

// Import third parts

// Import custom
import InputCheckbox from "./fields/InputCheckbox";
import InputEmail from "./fields/InputEmail";
import InputPassword from "./fields/InputPassword";
import InputSelect from "./fields/InputSelect";
import InputText from "./fields/InputText";
import InputTextarea from "./fields/InputTextarea";
import { getLayoutColClass, getLayoutValue } from "./Helpers";
import { Field, FormFieldsProps } from '../../types';

export const FormFields: React.FC<FormFieldsProps> = (props: FormFieldsProps): ReactElement => {
  const { fields } = props;

  const [rowFields, setRowFields] = useState<[Field[]] | null>(null);

  useEffect(() => {
    const row: any[] = [];
    let val = 0;
    let fieldsTemp: any[] = [];
    fields.map((field: Field, index: number) => {
      let fieldLayout = "";
      if (!field.layout) {
        fieldLayout = "1/2";
      } else {
        fieldLayout = field.layout;
      }
      const currentVal: number = getLayoutValue(fieldLayout);
      val = val + currentVal;
      fieldsTemp.push(field);
      if (index > 0) {
        const nextFieldVal: number = getLayoutValue(fields[index - 1].layout as string);
        if (val < 1 && val + nextFieldVal > 1) {
          val = val + 1;
        }
      }
      if (val >= 1) {
        row.push(fieldsTemp);
        fieldsTemp = [];
        val = 0;
      }
      if (index === fields.length - 1) {
        row.push(fieldsTemp);
      }
    });

    setRowFields(row as [Field[]]);
  }, []);

  return (
    <div className="fg__fields fg__body">
      {rowFields &&
        rowFields.map(
          (fields: Field[], index: number): ReactElement => {
            return (
              <div className="row" key={index}>
                {fields.map((field: Field, index: number) => {
                  const colName = getLayoutColClass(field.layout as string);
                  return (
                    <div className={colName} key={index}>
                      <div className="fg__fields-field">
                        <>
                          <label>{field.label}</label>
                          {field.type == "text" ? (
                            <InputText
                              name={field.name}
                              id={field.id}
                              placeholder={field.placeholder}
                              validation={field.validation}
                              autocomplete={field.autocomplete}
                            />
                          ) : (
                            <></>
                          )}
                          {field.type == "email" ? (
                            <InputEmail
                              name={field.name}
                              id={field.id}
                              placeholder={field.placeholder}
                              validation={field.validation}
                              autocomplete={field.autocomplete}
                            />
                          ) : (
                            <></>
                          )}
                          {field.type == "password" ? (
                            <InputPassword
                              name={field.name}
                              id={field.id}
                              placeholder={field.placeholder}
                              validation={field.validation}
                              autocomplete={field.autocomplete}
                            />
                          ) : (
                            <></>
                          )}
                          {field.type == "select" ? (
                            <InputSelect
                              name={field.name}
                              id={field.id}
                              placeholder={field.placeholder}
                              validation={field.validation}
                              autocomplete={field.autocomplete}
                              data={field.data}
                              fetchDataFromUrl={field.fetchDataFromUrl}
                            />
                          ) : (
                            <></>
                          )}
                          {field.type == "textarea" ? (
                            <InputTextarea
                              name={field.name}
                              id={field.id}
                              placeholder={field.placeholder}
                              validation={field.validation}
                              autocomplete={field.autocomplete}
                            />
                          ) : (
                            <></>
                          )}
                          {field.type == "checkbox" ? (
                            <InputCheckbox
                              name={field.name}
                              id={field.id}
                              placeholder={field.placeholder}
                              validation={field.validation}
                              autocomplete={field.autocomplete}
                            />
                          ) : (
                            <></>
                          )}
                        </>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          },
        )}
    </div>
  );
};
