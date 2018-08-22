import cx from "classnames";
import * as React from "react";
import { HTMLAttributes, SFC } from "react";

export interface IColumnProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const defaultProps: Partial<IColumnProps> = {
  className: ""
};

const Column: SFC<Partial<IColumnProps>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={cx("column", className)} {...rest}>
      {children}
    </div>
  );
};

Column.defaultProps = defaultProps;

export default Column;
