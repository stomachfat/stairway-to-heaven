import cx from 'classnames'
import * as React from 'react'
import { HTMLAttributes, SFC } from 'react'

interface ICardHeaderTitleProps extends HTMLAttributes<HTMLParagraphElement> {
  classNames?: string,
  // label?: string,
}

const defaultProps: Partial<ICardHeaderTitleProps> = {
  classNames: '',
  // label: 'CardHeaderTitle',
}

const CardHeaderTitle: SFC<Partial<ICardHeaderTitleProps>> = ({
  // label,
  classNames,
  children,
  ...rest
}) => {
  return (
    <p
      className={cx("card-header-title", classNames)}
      {...rest}
    >
      {children}
    </p>
  )
}

CardHeaderTitle.defaultProps = defaultProps

export default CardHeaderTitle
