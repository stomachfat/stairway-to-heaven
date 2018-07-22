import * as React from 'react'
import { Component, Fragment } from 'react'

import Input from '../atoms/Input'
import Subtitle from '../atoms/Subtitle'
import Title from '../atoms/Title'
import Header from '../organisms/Header'

class JimmysNumbers extends Component {
  public render() {
    return (
      <Fragment>
        <Header
          classNames="is-primary"
        >
          <div className="container">
            <Title
              id="wtf"
              title="Jimmy's Numbers"
            />
            <Subtitle
              title="Must pass to be a prospect"
            />
          </div>
        </Header>
        <Input />
      </Fragment>
    )
  }
}

export default JimmysNumbers
