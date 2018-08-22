import * as React from "react";
import { HTMLProps, SFC } from "react";

interface ITitleProps extends HTMLProps<HTMLHeadingElement> {
  className?: string;
  title?: string;
}

const defaultProps: Partial<ITitleProps> = {
  className: "",
  title: "Hero Banner"
};

const Title: SFC<Partial<ITitleProps>> = ({ title, className, ...rest }) => {
  return (
    <h1 className={"title " + className} {...rest}>
      {title}
    </h1>
  );
};

Title.defaultProps = defaultProps;

export default Title;
