import cx from "classnames";
import * as React from "react";
import { HTMLAttributes, SFC } from "react";

export interface IColumnsProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const defaultProps: Partial<IColumnsProps> = {
  className: ""
};

const Columns: SFC<Partial<IColumnsProps>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={cx("columns", className)} {...rest}>
      {children}
    </div>
  );
};

Columns.defaultProps = defaultProps;

export default Columns;
