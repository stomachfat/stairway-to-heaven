import * as React from 'react'
import { SFC } from 'react'

import Field, { IFieldProps } from '../atoms/Field'
import FieldBody from '../atoms/FieldBody'
import FieldLabel, { IFieldLabelProps } from '../atoms/FieldLabel'
import Label from '../atoms/Label'
import InputControl, { IInputControl } from '../molecules/InputControl'

interface ILabelInputField {
  label: string,
  fieldLabelProps: IFieldLabelProps,
  fieldProps: IFieldProps,
  inputControlProps: IInputControl,
}

const LabelInputField: SFC<Partial<ILabelInputField>> = ({
  label,
  fieldLabelProps,
  fieldProps,
  inputControlProps,
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
          <InputControl
            {...inputControlProps}
          />
        </Field>
      </FieldBody>
    </Field>
  )
}

export default LabelInputField
