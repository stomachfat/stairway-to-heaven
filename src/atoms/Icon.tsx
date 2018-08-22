import * as React from "react";
import { SFC } from "react";

interface ISpanProps extends HTMLSpanElement {
  className: string;
}

interface IiProps extends HTMLDivElement {
  className: string;
}

export interface IIconProps {
  spanProps?: Partial<ISpanProps>;
  iconProps: Partial<IiProps>;
}

const defaultSpanProps = {
  className: ""
};

const Icon: SFC<IIconProps> = props => {
  const {
    spanProps: { className: spanClassNames } = defaultSpanProps,
    iconProps: { className: iconClassNames }
  } = props;

  return (
    <span className={"icon " + spanClassNames}>
      <i className={iconClassNames} />
    </span>
  );
};

Icon.defaultProps = {
  iconProps: {
    className: ""
  },
  spanProps: defaultSpanProps
};

export default Icon;
