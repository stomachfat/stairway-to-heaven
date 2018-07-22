import cx from 'classnames'
import * as React from 'react'
import { HTMLAttributes, SFC } from 'react'

export interface ICardHeaderIconProps extends HTMLAttributes<HTMLDivElement> {
  classNames?: string,
}

const defaultProps: Partial<ICardHeaderIconProps> = {
  classNames: '',
}

const CardHeaderIcon: SFC<Partial<ICardHeaderIconProps>> = ({
  children,
  classNames,
  ...rest
}) => {
  return (
    <div
    className={cx("card-header-icon", classNames)}
      {...rest}
    >
      {children}
    </div>
  )
}

CardHeaderIcon.defaultProps = defaultProps

export default CardHeaderIcon
