import cx from 'classnames'
import * as React from 'react'
import { HTMLAttributes, SFC } from 'react'

export interface IContentProps extends HTMLAttributes<HTMLDivElement> {
  classNames?: string,
}

const defaultProps: Partial<IContentProps> = {
  classNames: '',
}

const Content: SFC<Partial<IContentProps>> = ({
  children,
  classNames,
  ...rest
}) => {
  return (
    <div
    className={cx("content", classNames)}
      {...rest}
    >
      {children}
    </div>
  )
}

Content.defaultProps = defaultProps

export default Content
