import * as React from 'react'
import { Component, Fragment } from 'react'

import Container from '../atoms/Container'
import Subtitle from '../atoms/Subtitle'
import Title from '../atoms/Title'
import Header from '../organisms/Header'
import PropertyFinancials from '../organisms/PropertyFinancials'

class JimmysNumbers extends Component {
  public render() {
    return (
      <Fragment>
        <Header
          classNames="is-primary"
        >
          <Container>
            <Title
              id="header-title"
              title="Jimmy's Numbers"
            />
            <Subtitle
              title="Must pass to be a prospect"
            />
          </Container>
        </Header>

        <PropertyFinancials
        />
      </Fragment>
    )
  }
}

export default JimmysNumbers
