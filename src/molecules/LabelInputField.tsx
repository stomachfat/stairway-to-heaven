import * as React from 'react'
import { SFC } from 'react'

import Control from '../atoms/Control'
import Field, { IFieldProps } from '../atoms/Field'
import FieldBody from '../atoms/FieldBody'
import FieldLabel, { IFieldLabelProps } from '../atoms/FieldLabel'
import Input from '../atoms/Input'
import Label from '../atoms/Label'

interface ILabelInputField {
  label: string,
  fieldLabelProps: IFieldLabelProps,
  fieldProps: IFieldProps,
}

const LabelInputField: SFC<Partial<ILabelInputField>> = ({
  label,
  fieldLabelProps,
  fieldProps,
}) => {
  return (
    <Field
      {...fieldProps}
    >
      <FieldLabel
        {...fieldLabelProps}
      >
        <Label
          label={label}
        />
      </FieldLabel>
      <FieldBody>
        <Field>
          <Control>
            <Input />
          </Control>
        </Field>
      </FieldBody>
    </Field>
  )
}

export default LabelInputField
