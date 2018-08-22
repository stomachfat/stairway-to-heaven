import cx from "classnames";
import * as React from "react";
import { HTMLAttributes, SFC } from "react";

export interface ICardFooterProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const defaultProps: Partial<ICardFooterProps> = {
  className: ""
};

const CardFooter: SFC<Partial<ICardFooterProps>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <footer className={cx("card-footer", className)} {...rest}>
      {children}
    </footer>
  );
};

CardFooter.defaultProps = defaultProps;

export default CardFooter;
