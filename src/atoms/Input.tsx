import { noop } from 'lodash'
import * as React from 'react'
import { Component, SyntheticEvent } from 'react'

interface Iprops extends HTMLInputElement {
  handleChange: (state: Partial<Istate>) => string,
}

interface Istate {
  value: string,
}

class Input extends Component<Partial<Iprops>, Partial<Istate>> {

  public static defaultProps: Partial<Iprops> = {
    className: "input is-primary",
    handleChange: (state: Istate) => state.value,
    placeholder: "primary input",
  }

  constructor(props: HTMLInputElement) {
    super(props)
    this.state = {value: ''}
  }

  public handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    this.setState({value: event.currentTarget.value}, () => {
      if (this.props.handleChange === undefined) { return }
      if (this.props.handleChange === noop) { return }

      this.changeValue(this.props.handleChange(this.state));
    })
  }

  public changeValue = (value: string) => {
    this.setState({value})
  }

  public render() {
    return (
      <input
        className={this.props.className}
        placeholder={this.props.placeholder}
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}

export default Input
