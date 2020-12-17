// Import core
import React, { ReactElement, useEffect, useState } from "react";

// Import third parts
import classNames from "classnames";
import { useFormContext } from "react-hook-form";

// Import custom
import { FieldBase, FieldSelectData } from "FormGenerator";
import { FieldValidation } from "../types/validator";
import { fetchData, getSelectDefaultValue } from "../Helpers";

export const InputSelect: React.FC<FieldBase> = (props: FieldBase): ReactElement => {
  // Get <Select> data

  // Form core
  const { register, errors } = useFormContext(); // retrieve all hook methods

  // State
  const [validation, setValidation] = useState<FieldValidation>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [optionData, setOptionData] = useState<FieldSelectData[]>([]);
  const [defaultValue, setDefaultValue] = useState<string>("");

  useEffect(() => {
    let flag = false;
    console.log("props.validation.required", props.validation.required);
    if (props.validation.required.value) {
      flag = true;
    }
    if (props.validation.required === true) {
      flag = true;
    }
    if (flag) {
      console.log("Here select Name: ", props.name);
      setValidation({
        validate: (value: string) => {
          if (value) {
            return true;
          } else {
            return false;
          }
        },
      });
    }
  }, [props.validation]);

  useEffect(() => {
    // No data: infinite loading
    if (props.data?.length === 0 && !props.fetchDataFromUrl) {
      console.warn("FormGenerator: nessuna opzione fornita per il Select");
      return;
    }

    // Static data
    if (props.data && props.data?.length > 0 && !props.fetchDataFromUrl) {
      setOptionData(props.data as FieldSelectData[]);
      setLoading(false);
      return;
    }

    // Fetch data from url
    if (props.fetchDataFromUrl) {
      const fetchEffectData = async () => {
        const res = await fetchData(props.fetchDataFromUrl as string);
        if (res.status) {
          setOptionData(res.data as FieldSelectData[]);
          setLoading(false);
        }
        return res;
      };

      fetchEffectData();
    }

    // NB: If both data and url are set. Merge arrays:

    // Dynamic data with fetch
    // NB:
    setOptionData(props.data as FieldSelectData[]);
    const getDefaultValue = getSelectDefaultValue(props.data as FieldSelectData[]);
    console.log("getDefaultValue", getDefaultValue);
    setDefaultValue(getDefaultValue);
  }, [props.data]);

  return (
    <>
      <div className="fg__select-wrapper">
        <select
          id={props.id}
          className={classNames("form-control", "fg__input-select", {
            "is-invalid": errors[props.name], // signInForm.errors.email
          })}
          name={props.name}
          ref={register(validation)}
          autoComplete={props.autocomplete ? props.autocomplete : "off"}
          disabled={loading}
          defaultValue={defaultValue}
        >
          {props.placeholder ? <option value="">{props.placeholder}</option> : <></>}
          {optionData.map((option: FieldSelectData, index: number) => {
            return (
              <option key={index} value={option.value} disabled={option.disabled ? true : false}>
                {option.label}
              </option>
            );
          })}
        </select>
        <div
          className={classNames("loader", {
            "loader-active": loading,
          })}
        >
          <span></span>
        </div>
      </div>
      <div className="invalid-feedback">
        {errors[props.name]?.type == "validate" ? (
          <>
            {props?.validation?.required?.message === "" ? (
              <span>Selezionare un opzione</span>
            ) : (
              <span>{props?.validation?.required?.message}</span>
            )}
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

// validationMessage
export default InputSelect;
