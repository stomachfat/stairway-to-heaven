import * as React from 'react'
import { Component, Fragment } from 'react'

import Container from '../atoms/Container'
import Section from '../atoms/Section'
import Subtitle from '../atoms/Subtitle'
import Title from '../atoms/Title'
import LabelInputField from '../molecules/LabelInputField'
import Header from '../organisms/Header'

class JimmysNumbers extends Component {
  public render() {
    return (
      <Fragment>
        <Header
          classNames="is-primary"
        >
          <Container>
            <Title
              id="wtf"
              title="Jimmy's Numbers"
            />
            <Subtitle
              title="Must pass to be a prospect"
            />
          </Container>
        </Header>

        <Section>
          <Container>
            <LabelInputField
              label="Asking Price"
              fieldProps={{
                classNames: 'is-horizontal',
              }}
              fieldLabelProps={{
                classNames: 'is-normal',
              }}
            />
          </Container>
        </Section>
      </Fragment>
    )
  }
}

export default JimmysNumbers
