import cx from "classnames";
import * as React from "react";
import { HTMLAttributes, SFC } from "react";

export interface IContainerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const defaultProps: Partial<IContainerProps> = {
  className: ""
};

const Container: SFC<Partial<IContainerProps>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={cx("container ", className)} {...rest}>
      {children}
    </div>
  );
};

Container.defaultProps = defaultProps;

export default Container;
