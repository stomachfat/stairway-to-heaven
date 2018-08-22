import cx from "classnames";
import * as React from "react";
import { HTMLAttributes, SFC } from "react";

export interface IContentProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const defaultProps: Partial<IContentProps> = {
  className: ""
};

const Content: SFC<Partial<IContentProps>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={cx("content", className)} {...rest}>
      {children}
    </div>
  );
};

Content.defaultProps = defaultProps;

export default Content;
