import cx from 'classnames'
import * as React from 'react'
import { HTMLAttributes, SFC } from 'react'

export interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  classNames?: string,
}

const defaultProps: Partial<ICardProps> = {
  classNames: '',
}

const Card: SFC<Partial<ICardProps>> = ({
  children,
  classNames,
  ...rest
}) => {
  return (
    <div
    className={cx("card", classNames)}
      {...rest}
    >
      {children}
    </div>
  )
}

Card.defaultProps = defaultProps

export default Card
