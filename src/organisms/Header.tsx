import * as React from 'react'
import { Component, HTMLProps } from 'react'

interface ISectionProps {
  classNames: string
}

class Header extends Component<ISectionProps & HTMLProps<HTMLDivElement>> {
  public static defaultProps: ISectionProps = {
    classNames: '',
  }

  public render() {
    return (
      <section className={"hero " + this.props.classNames}>
        <div className="hero-body">
          {this.props.children}
        </div>
      </section>
    )
  }
}

export default Header
