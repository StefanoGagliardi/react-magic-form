// Import core
import React, { ReactElement, useEffect, useState } from "react";

// Import third parts
import classNames from "classnames";
import { useFormContext } from "react-hook-form";
import { FieldBase, FieldValidation } from "../../../types";

// Import custom

export const InputCheckbox: React.FC<FieldBase> = (props: FieldBase): ReactElement => {
  // const [invalid, setInvalid] = useState<boolean>(true);

  const { register, errors, setValue, trigger } = useFormContext(); // retrieve all hook methods
  const [validation, setValidation] = useState<FieldValidation>({});
  const [checkboxValue, setCheckboxValue] = useState<boolean>(false);

  // Build Validation Object
  useEffect(() => {
    // Copy reference props
    const rawValidation = props.validation;

    // Add regex for validate email pattern
    setValidation(rawValidation);
  }, []);

  const handleCheckboxValue = () => {
    console.log("!checkboxValue", !checkboxValue);
    setValue(props.name, !checkboxValue);

    setCheckboxValue(!checkboxValue);
    trigger();
  };

  return (
    <>
      <div className="fg__checkbox-wrapper">
        <input
          id={props.id}
          type="checkbox"
          className={classNames("form-control", {
            "is-invalid": errors[props.name], // signInForm.errors.email
          })}
          name={props.name}
          checked={checkboxValue}
          onChange={(value: any) => {
            console.log("Checkbox onChange value:", value);
          }}
          autoComplete={props.autocomplete ? props.autocomplete : "off"}
          ref={register(validation)}
        />
        <span className="checkmark" onClick={handleCheckboxValue}></span>
        <div className="fg__checkbox-text" dangerouslySetInnerHTML={{ __html: props.placeholder as string }} />
      </div>
      <div className="invalid-feedback">
        {errors[props.name]?.type == "required" ? (
          <>
            {errors[props.name]?.message === "" ? (
              <span>Il campo è richiesto</span>
            ) : (
              <span>{errors[props.name]?.message}</span>
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
export default InputCheckbox;
