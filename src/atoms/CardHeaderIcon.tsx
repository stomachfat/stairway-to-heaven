import cx from "classnames";
import * as React from "react";
import { HTMLAttributes, SFC } from "react";

export interface ICardHeaderIconProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const defaultProps: Partial<ICardHeaderIconProps> = {
  className: ""
};

const CardHeaderIcon: SFC<Partial<ICardHeaderIconProps>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={cx("card-header-icon", className)} {...rest}>
      {children}
    </div>
  );
};

CardHeaderIcon.defaultProps = defaultProps;

export default CardHeaderIcon;
