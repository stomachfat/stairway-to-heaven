import * as React from 'react'
import { Component, SyntheticEvent } from 'react'

// interface IProps extends HTMLInputElement {

// }

interface Istate {
  value: string,
}

class Input extends Component<Partial<HTMLInputElement>, Partial<Istate>> {

  public static defaultProps: Partial<HTMLInputElement> = {
    className: "input is-primary",
    placeholder: "primary input"
  }

  constructor(props: HTMLInputElement) {
    super(props)
    this.state = {value: ''}
  }

  public handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    this.setState({value: event.currentTarget.value});
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
