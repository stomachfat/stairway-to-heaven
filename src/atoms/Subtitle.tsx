import * as React from 'react'
import { HTMLProps, SFC } from 'react'

interface ISubtitleProps {
  classNames?: string,
  title?: string,
}

const defaultProps: ISubtitleProps = {
  classNames: '',
  title: 'Subtitle',
}

const Subtitle: SFC<Partial<ISubtitleProps> & HTMLProps<HTMLHeadingElement>> = ({
  title,
  classNames,
  ...rest
}) => {
  return (
    <h2
      className={"subtitle " + classNames}
      {...rest}
    >
      {title}
    </h2>
  )
}

Subtitle.defaultProps = defaultProps

export default Subtitle
