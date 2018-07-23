import cx from 'classnames'
import * as React from 'react'
import { HTMLAttributes, SFC } from 'react'

export interface IColumnsProps extends HTMLAttributes<HTMLDivElement> {
  classNames?: string,
}

const defaultProps: Partial<IColumnsProps> = {
  classNames: '',
}

const Columns: SFC<Partial<IColumnsProps>> = ({
  children,
  classNames,
  ...rest
}) => {
  return (
    <div
    className={cx("columns", classNames)}
      {...rest}
    >
      {children}
    </div>
  )
}

Columns.defaultProps = defaultProps

export default Columns
