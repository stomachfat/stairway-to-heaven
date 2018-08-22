import * as React from "react";
import { Component, HTMLProps } from "react";

interface ISectionProps extends HTMLProps<HTMLDivElement> {
  className: string;
}

class Header extends Component<ISectionProps> {
  public static defaultProps: ISectionProps = {
    className: ""
  };

  public render() {
    return (
      <section className={"hero " + this.props.className}>
        <div className="hero-body">{this.props.children}</div>
      </section>
    );
  }
}

export default Header;
