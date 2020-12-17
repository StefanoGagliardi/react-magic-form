import { FormHeadingProps } from "FormGenerator";
import React, { ReactElement } from "react";

export const FormHeading: React.FC<FormHeadingProps> = (props: FormHeadingProps): ReactElement => {
  const { title, subTitle } = props;

  const newLine = (string: string): JSX.Element[] => {
    if (!string) {
      return [<></>];
    }
    const ret = string.split("\n").map((str: string, index: number) => <p key={index}>{str}</p>);
    return ret;
  };

  if (title === "" && subTitle === "") {
    return <></>;
  }

  if (title === "") {
    return (
      <div className="row">
        <p className="fg__subtitle">{newLine(subTitle as string)}</p>
      </div>
    );
  }

  if (subTitle === "") {
    return (
      <div className="row">
        <h3 className="fg__title">{title}</h3>
      </div>
    );
  }

  return (
    <header>
      <h3>{title}</h3>
      <p>{subTitle}</p>
    </header>
  );
};
