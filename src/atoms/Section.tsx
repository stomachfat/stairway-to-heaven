import cx from "classnames";
import * as React from "react";
import { HTMLAttributes, SFC } from "react";

export interface ISectionProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const defaultProps: Partial<ISectionProps> = {
  className: ""
};

const Section: SFC<Partial<ISectionProps>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <section className={cx("section", className)} {...rest}>
      {children}
    </section>
  );
};

Section.defaultProps = defaultProps;

export default Section;
