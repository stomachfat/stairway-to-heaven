import * as React from 'react'
import { SFC } from 'react'

interface ISpanProps extends HTMLSpanElement {
  classNames: string,
}

interface IiProps extends HTMLDivElement {
  classNames: string,
}

export interface IIconProps {
  spanProps: Partial<ISpanProps>,
  iconProps: Partial<IiProps>,
}

const Icon: SFC<IIconProps> = ({
  spanProps: {
    classNames: spanClassNames,
    // ...spanRest
  },
  iconProps: {
    classNames: iconClassNames,
    // ...iconRest
  },
}) => {
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
  spanProps: {
    classNames: '',
  },
}

export default Icon
