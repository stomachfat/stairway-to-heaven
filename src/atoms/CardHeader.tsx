import cx from 'classnames'
import * as React from 'react'
import { HTMLAttributes, SFC } from 'react'

export interface ICardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  classNames?: string,
}

const defaultProps: Partial<ICardHeaderProps> = {
  classNames: '',
}

const CardHeader: SFC<Partial<ICardHeaderProps>> = ({
  children,
  classNames,
  ...rest
}) => {
  return (
    <header
    className={cx('card-header', classNames)}
      {...rest}
    >
      {children}
    </header>
  )
}

CardHeader.defaultProps = defaultProps

export default CardHeader
