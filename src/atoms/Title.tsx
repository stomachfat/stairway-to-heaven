import * as React from 'react'
import { HTMLProps, SFC } from 'react'

interface ITitleProps extends HTMLProps<HTMLHeadingElement> {
  classNames?: string,
  title?: string,
}

const defaultProps: Partial<ITitleProps> = {
  classNames: '',
  title: 'Hero Banner',
}

const Title: SFC<Partial<ITitleProps>> = ({
  title,
  classNames,
  ...rest
}) => {
  return (
    <h1
      className={"title " + classNames}
      {...rest}
    >
      {title}
    </h1>
  )
}

Title.defaultProps = defaultProps

export default Title
