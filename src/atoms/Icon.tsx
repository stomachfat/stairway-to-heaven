import * as React from 'react'
import { SFC } from 'react'

interface ISpanProps extends HTMLSpanElement {
  classNames: string,
}

interface IiProps extends HTMLDivElement {
  classNames: string,
}

export interface IIconProps {
  spanProps?: Partial<ISpanProps>,
  iconProps: Partial<IiProps>,
}

const defaultSpanProps = {
  classNames: '',
}

const Icon: SFC<IIconProps> = (props) => {
  const {
    spanProps: {
      classNames: spanClassNames,
    } = defaultSpanProps,
    iconProps: {
      classNames: iconClassNames,
    },
  } = props

  return(
    <span className={"icon " + spanClassNames}>
      <i className={iconClassNames}/>
    </span>
  )
}

Icon.defaultProps = {
  iconProps: {
    classNames: '',
  },
  spanProps: defaultSpanProps,
}


export default Icon
