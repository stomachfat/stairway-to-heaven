import * as React from "react";
import { HTMLAttributes, SFC } from "react";

interface IFieldBodyProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const defaultProps: Partial<IFieldBodyProps> = {
  className: ""
};

const FieldBody: SFC<Partial<IFieldBodyProps>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={"field-body " + className} {...rest}>
      {children}
    </div>
  );
};

FieldBody.defaultProps = defaultProps;

export default FieldBody;
