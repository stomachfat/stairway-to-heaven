import cx from 'classnames'
import * as React from 'react'
import { HTMLAttributes, SFC } from 'react'

export interface ICardFooterProps extends HTMLAttributes<HTMLDivElement> {
  classNames?: string,
}

const defaultProps: Partial<ICardFooterProps> = {
  classNames: '',
}

const CardFooter: SFC<Partial<ICardFooterProps>> = ({
  children,
  classNames,
  ...rest
}) => {
  return (
    <footer
    className={cx('card-footer', classNames)}
      {...rest}
    >
      {children}
    </footer>
  )
}

CardFooter.defaultProps = defaultProps

export default CardFooter
