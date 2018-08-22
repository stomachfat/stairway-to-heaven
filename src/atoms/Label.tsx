import cx from "classnames";
import * as React from "react";
import { LabelHTMLAttributes, SFC } from "react";

interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  label?: string;
}

const defaultProps: Partial<ILabelProps> = {
  className: "",
  label: "Label"
};

const Label: SFC<Partial<ILabelProps>> = ({ label, className, ...rest }) => {
  return (
    <label className={cx("label", className)} {...rest}>
      {label}
    </label>
  );
};

Label.defaultProps = defaultProps;

export default Label;
