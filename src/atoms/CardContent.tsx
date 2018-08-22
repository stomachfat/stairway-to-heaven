import cx from "classnames";
import * as React from "react";
import { HTMLAttributes, SFC } from "react";

export interface ICardContentProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const defaultProps: Partial<ICardContentProps> = {
  className: ""
};

const CardContent: SFC<Partial<ICardContentProps>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={cx("card-content", className)} {...rest}>
      {children}
    </div>
  );
};

CardContent.defaultProps = defaultProps;

export default CardContent;
