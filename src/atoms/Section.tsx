import * as React from 'react'
import { HTMLAttributes, SFC } from 'react'

export interface ISectionProps extends HTMLAttributes<HTMLDivElement> {
  classNames?: string,
}

const defaultProps: Partial<ISectionProps> = {
  classNames: '',
}

const Section: SFC<Partial<ISectionProps>> = ({
  children,
  classNames,
  ...rest
}) => {
  return (
    <section
      className={"section " + classNames}
      {...rest}
    >
      {children}
    </section>
  )
}

Section.defaultProps = defaultProps

export default Section
