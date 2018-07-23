import cx from 'classnames'
import * as React from 'react'
import { HTMLAttributes, SFC } from 'react'

export interface IColumnProps extends HTMLAttributes<HTMLDivElement> {
  classNames?: string,
}

const defaultProps: Partial<IColumnProps> = {
  classNames: '',
}

const Column: SFC<Partial<IColumnProps>> = ({
  children,
  classNames,
  ...rest
}) => {
  return (
    <div
    className={cx("column", classNames)}
      {...rest}
    >
      {children}
    </div>
  )
}

Column.defaultProps = defaultProps

export default Column
