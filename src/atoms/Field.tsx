import * as React from 'react'
import { HTMLAttributes, SFC } from 'react'

export interface IFieldProps extends HTMLAttributes<HTMLDivElement> {
  classNames?: string,
}

const defaultProps: Partial<IFieldProps> = {
  classNames: '',
}

const Field: SFC<Partial<IFieldProps>> = ({
  children,
  classNames,
  ...rest
}) => {
  return (
    <div
      className={"field " + classNames}
      {...rest}
    >
      {children}
    </div>
  )
}

Field.defaultProps = defaultProps

export default Field
