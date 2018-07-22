import cx from 'classnames'
import * as React from 'react'
import { LabelHTMLAttributes, SFC } from 'react'

interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  classNames?: string,
  label?: string,
}

const defaultProps: Partial<ILabelProps> = {
  classNames: '',
  label: 'Label',
}

const Label: SFC<Partial<ILabelProps>> = ({
  label,
  classNames,
  ...rest
}) => {
  return (
    <label
      className={cx("label", classNames)}
      {...rest}
    >
      {label}
    </label>
  )
}

Label.defaultProps = defaultProps

export default Label
