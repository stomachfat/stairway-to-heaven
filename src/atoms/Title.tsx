import * as React from 'react'
import { HTMLProps, SFC } from 'react'

interface ITitleProps {
  classNames?: string,
  title?: string,
}

const defaultProps: ITitleProps = {
  classNames: '',
  title: 'Hero Banner',
}

const Title: SFC<Partial<ITitleProps> & HTMLProps<HTMLHeadingElement>> = ({
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
