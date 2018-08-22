import cx from "classnames";
import * as React from "react";
import { HTMLAttributes, SFC } from "react";

export interface ICardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const defaultProps: Partial<ICardHeaderProps> = {
  className: ""
};

const CardHeader: SFC<Partial<ICardHeaderProps>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <header className={cx("card-header", className)} {...rest}>
      {children}
    </header>
  );
};

CardHeader.defaultProps = defaultProps;

export default CardHeader;
