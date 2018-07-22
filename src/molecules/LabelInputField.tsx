import * as React from 'react'
import { SFC } from 'react'

import Field, { IFieldProps } from '../atoms/Field'
import FieldBody from '../atoms/FieldBody'
import FieldLabel, { IFieldLabelProps } from '../atoms/FieldLabel'
import Label from '../atoms/Label'
import InputControl from '../molecules/InputControl'

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
          <InputControl
            inputProps={{
              placeholder: "Asking Price"
            }}
            leftIconProps={{
              iconProps: {
                classNames: "fas fa-envelope",
              },
              spanProps: {
                classNames: "icon is-small",
              },
            }}
            rightIconProps={{
              iconProps: {
                classNames: "fas fa-envelope",
              },
              spanProps: {
                classNames: "icon is-small",
              },
            }}
          />
        </Field>
      </FieldBody>
    </Field>
  )
}

export default LabelInputField
