import cx from "classnames";
import * as React from "react";
import { HTMLAttributes, SFC } from "react";

export interface IFieldLabelProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  FieldLabel?: string;
}

const defaultProps: Partial<IFieldLabelProps> = {
  className: ""
};

const FieldLabel: SFC<Partial<IFieldLabelProps>> = ({
  className,
  children,
  ...rest
}) => {
  return <div className={cx("field-label", className)}>{children}</div>;
};

FieldLabel.defaultProps = defaultProps;

export default FieldLabel;
