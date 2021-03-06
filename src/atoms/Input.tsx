import cx from "classnames";
import * as React from "react";
import { Component, SyntheticEvent } from "react";

export interface Iprops extends HTMLInputElement {
  handleChange: (value: string) => void;
  // className?: string;
  isDisabled?: boolean;
  isReadonly?: boolean;
}

class Input extends Component<Partial<Iprops>> {
  public static defaultProps: Partial<Iprops> = {
    className: "",
    handleChange: () => undefined,
    isDisabled: false,
    isReadonly: false,
    placeholder: "primary input",
    value: ""
  };

  constructor(props: HTMLInputElement) {
    super(props);
  }

  public handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    if (this.props.handleChange === undefined) {
      return;
    }
    this.props.handleChange(event.currentTarget.value);
  };

  public render() {
    return (
      <input
        className={cx("input", this.props.className)}
        placeholder={this.props.placeholder}
        type="text"
        value={this.props.value}
        onChange={this.handleChange}
        readOnly={this.props.isReadonly}
        disabled={this.props.isDisabled}
      />
    );
  }
}

export default Input;
