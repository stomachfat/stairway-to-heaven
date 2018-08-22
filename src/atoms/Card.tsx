import cx from "classnames";
import * as React from "react";
import { HTMLAttributes, SFC } from "react";

export interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const defaultProps: Partial<ICardProps> = {
  className: ""
};

const Card: SFC<Partial<ICardProps>> = ({ children, className, ...rest }) => {
  return (
    <div className={cx("card", className)} {...rest}>
      {children}
    </div>
  );
};

Card.defaultProps = defaultProps;

export default Card;
