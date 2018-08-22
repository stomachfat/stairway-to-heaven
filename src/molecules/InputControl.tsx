import cx from "classnames";
import * as React from "react";
import { SFC } from "react";

import Control from "../atoms/Control";
import Icon, { IIconProps } from "../atoms/Icon";
import Input, { Iprops as IInputProps } from "../atoms/Input";

export interface IInputControl {
  inputProps: Partial<IInputProps>;
  leftIconProps: IIconProps | undefined;
  rightIconProps: IIconProps | undefined;
}

const IInputControl: SFC<Partial<IInputControl>> = ({
  inputProps,
  leftIconProps,
  rightIconProps
}) => {
  return (
    <Control
      className={cx({
        "has-icons-left": Boolean(leftIconProps),
        "has-icons-right": Boolean(rightIconProps)
      })}
    >
      <Input {...inputProps} />
      {leftIconProps && (
        <Icon
          {...{
            ...leftIconProps,
            spanProps: {
              ...leftIconProps.spanProps,
              className:
                leftIconProps.spanProps &&
                leftIconProps.spanProps.className + " is-left"
            }
          }}
        />
      )}
      {rightIconProps && (
        <Icon
          {...{
            ...rightIconProps,
            spanProps: {
              ...rightIconProps.spanProps,
              className:
                rightIconProps.spanProps &&
                rightIconProps.spanProps.className + " is-right"
            }
          }}
        />
      )}
    </Control>
  );
};

IInputControl.defaultProps = {};

export default IInputControl;
