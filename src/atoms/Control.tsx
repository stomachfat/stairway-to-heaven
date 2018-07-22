import * as React from 'react'
import { HTMLAttributes, SFC } from 'react'

interface IControlProps extends HTMLAttributes<HTMLParagraphElement> {
  classNames?: string,
  Control?: string,
}

const defaultProps: Partial<IControlProps> = {
  classNames: '',
}

const Control: SFC<Partial<IControlProps>> = ({
  children,
  classNames,
  ...rest
}) => {
  return (
    <p
      className={"control " + classNames}
      {...rest}
    >
      {children}
    </p>
  )
}

Control.defaultProps = defaultProps

export default Control
