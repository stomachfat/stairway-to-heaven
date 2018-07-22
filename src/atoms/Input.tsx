import cx from 'classnames'
import * as React from 'react'
import { Component, SyntheticEvent } from 'react'

export interface Iprops extends HTMLInputElement {
  handleChange: (value: string) => void,
  classNames?: string,
  readonly?: boolean,
}

class Input extends Component<Partial<Iprops>> {

  public static defaultProps: Partial<Iprops> = {
    classNames: "",
    handleChange: () => undefined,
    placeholder: "primary input",
    readonly: false,
    value: '',
  }

  constructor(props: HTMLInputElement) {
    super(props)
  }

  public handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    if (this.props.handleChange === undefined) { return }
    this.props.handleChange(event.currentTarget.value)
  }

  public changeValue = (value: string) => {
    this.setState({value})
  }

  public render() {
    return (
      <input
        className={cx("input", this.props.classNames)}
        placeholder={this.props.placeholder}
        type="text"
        value={this.props.value}
        onChange={this.handleChange}
        readOnly={this.props.readonly}
      />
    );
  }
}

export default Input
