import cx from "classnames";
import * as React from "react";
import { HTMLAttributes, SFC } from "react";

export interface IFieldProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const defaultProps: Partial<IFieldProps> = {
  className: ""
};

const Field: SFC<Partial<IFieldProps>> = ({ children, className, ...rest }) => {
  return (
    <div className={cx("field", className)} {...rest}>
      {children}
    </div>
  );
};

Field.defaultProps = defaultProps;

export default Field;
