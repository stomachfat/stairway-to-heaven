import * as React from 'react'
import { HTMLAttributes, SFC } from 'react'

interface IFieldBodyProps extends HTMLAttributes<HTMLDivElement> {
  classNames?: string,
}

const defaultProps: Partial<IFieldBodyProps> = {
  classNames: '',
}

const FieldBody: SFC<Partial<IFieldBodyProps>> = ({
  children,
  classNames,
  ...rest
}) => {
  return (
    <div
      className={"field-body " + classNames}
      {...rest}
    >
      {children}
    </div>
  )
}

FieldBody.defaultProps = defaultProps

export default FieldBody
