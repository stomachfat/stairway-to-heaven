import cx from "classnames";
import * as React from "react";
import { HTMLAttributes, SFC } from "react";

interface IControlProps extends HTMLAttributes<HTMLParagraphElement> {
  className?: string;
  Control?: string;
}

const defaultProps: Partial<IControlProps> = {
  className: ""
};

const Control: SFC<Partial<IControlProps>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <p className={cx("control", className)} {...rest}>
      {children}
    </p>
  );
};

Control.defaultProps = defaultProps;

export default Control;
