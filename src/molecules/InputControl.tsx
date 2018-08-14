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
      classNames={cx({
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
              classNames:
                leftIconProps.spanProps &&
                leftIconProps.spanProps.classNames + " is-left"
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
              classNames:
                rightIconProps.spanProps &&
                rightIconProps.spanProps.classNames + " is-right"
            }
          }}
        />
      )}
    </Control>
  );
};

IInputControl.defaultProps = {};

export default IInputControl;
