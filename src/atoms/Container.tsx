import * as React from 'react'
import { HTMLAttributes, SFC } from 'react'

export interface IContainerProps extends HTMLAttributes<HTMLDivElement> {
  classNames?: string,
}

const defaultProps: Partial<IContainerProps> = {
  classNames: '',
}

const Container: SFC<Partial<IContainerProps>> = ({
  children,
  classNames,
  ...rest
}) => {
  return (
    <div
      className={"container " + classNames}
      {...rest}
    >
      {children}
    </div>
  )
}

Container.defaultProps = defaultProps

export default Container
