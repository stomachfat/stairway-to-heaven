import cx from 'classnames'
import * as React from 'react'
import { HTMLAttributes, SFC } from 'react'

export interface ICardContentProps extends HTMLAttributes<HTMLDivElement> {
  classNames?: string,
}

const defaultProps: Partial<ICardContentProps> = {
  classNames: '',
}

const CardContent: SFC<Partial<ICardContentProps>> = ({
  children,
  classNames,
  ...rest
}) => {
  return (
    <div
    className={cx("card-content", classNames)}
      {...rest}
    >
      {children}
    </div>
  )
}

CardContent.defaultProps = defaultProps

export default CardContent
