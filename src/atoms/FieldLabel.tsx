import * as React from 'react'
import { HTMLAttributes, SFC } from 'react'

export interface IFieldLabelProps extends HTMLAttributes<HTMLDivElement> {
  classNames?: string,
  FieldLabel?: string,
}

const defaultProps: Partial<IFieldLabelProps> = {
  classNames: '',
}

const FieldLabel: SFC<Partial<IFieldLabelProps>> = ({
  classNames,
  children,
  ...rest
}) => {
  return (
    <div className={"field-label " + classNames}>
      {children}
    </div>
  )
}

FieldLabel.defaultProps = defaultProps

export default FieldLabel
