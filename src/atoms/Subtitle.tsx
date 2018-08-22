import cx from "classnames";
import * as React from "react";
import { HTMLProps, SFC } from "react";

interface ISubtitleProps extends HTMLProps<HTMLHeadingElement> {
  className?: string;
  title?: string;
}

const defaultProps: Partial<ISubtitleProps> = {
  className: "",
  title: "Subtitle"
};

const Subtitle: SFC<Partial<ISubtitleProps>> = ({
  title,
  className,
  ...rest
}) => {
  return (
    <h2 className={cx("subtitle", className)} {...rest}>
      {title}
    </h2>
  );
};

Subtitle.defaultProps = defaultProps;

export default Subtitle;
