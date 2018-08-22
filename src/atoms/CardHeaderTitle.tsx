import cx from "classnames";
import * as React from "react";
import { HTMLAttributes, SFC } from "react";

interface ICardHeaderTitleProps extends HTMLAttributes<HTMLParagraphElement> {
  className?: string;
  // label?: string,
}

const defaultProps: Partial<ICardHeaderTitleProps> = {
  className: ""
  // label: 'CardHeaderTitle',
};

const CardHeaderTitle: SFC<Partial<ICardHeaderTitleProps>> = ({
  // label,
  className,
  children,
  ...rest
}) => {
  return (
    <p className={cx("card-header-title", className)} {...rest}>
      {children}
    </p>
  );
};

CardHeaderTitle.defaultProps = defaultProps;

export default CardHeaderTitle;
