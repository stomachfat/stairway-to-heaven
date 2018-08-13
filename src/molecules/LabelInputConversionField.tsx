import { noop } from "lodash";
import * as React from "react";
import { Component } from "react";

import Field, { IFieldProps } from "../atoms/Field";
import FieldBody from "../atoms/FieldBody";
import FieldLabel, { IFieldLabelProps } from "../atoms/FieldLabel";
import Label from "../atoms/Label";
import InputControl, { IInputControl } from "../molecules/InputControl";

export interface ILabelInputConversionProps {
  label: string;
  fieldLabelProps: IFieldLabelProps;
  fieldProps: IFieldProps;
  inputControlProps: IInputControl;
  conversionControlProps: IInputControl;
  primaryToSecondaryConversion: (a: any) => any;
  secondaryToPrimaryConversion: (a: any) => any;
}

interface ILabelInputConversionState {
  primaryInput: string;
  secondaryInput: string;
}

class LabelInputConversionField extends Component<
  Partial<ILabelInputConversionProps>,
  Partial<ILabelInputConversionState>
> {
  public state = {
    inversionFunction: noop,
    primaryInput: "",
    secondaryInput: ""
  };

  public propagateConversion = (which: string, input: string) => {
    const {
      primaryToSecondaryConversion = noop,
      secondaryToPrimaryConversion = noop
    } = this.props;

    console.log("propagateConversion: ", which, input);

    switch (which) {
      case "primaryInput":
        {
          this.setState({
            secondaryInput: String(primaryToSecondaryConversion(Number(input)))
          });
        }
        break;
      case "secondaryInput":
        {
          const primaryInput = String(
            secondaryToPrimaryConversion(Number(input))
          );
          console.log("primaryInput: ", primaryInput);
          this.setState({
            primaryInput
          });
        }
        break;
    }
  };

  public handleInputChange = (which: string) => (input: string) => {
    this.setState(
      {
        [which]: input
      },
      () => {
        this.propagateConversion(which, input);
      }
    );
  };

  public forceRecalculate = (which: string) => {
    this.handleInputChange(which)(this.state[which]);
  };

  public componentWillReceiveProps(nextProps: ILabelInputConversionProps) {
    if (
      this.props.primaryToSecondaryConversion !==
      nextProps.primaryToSecondaryConversion
    ) {
      this.forceRecalculate("primaryInput");
    }
  }

  public render() {
    const {
      label,
      fieldLabelProps,
      fieldProps,
      inputControlProps,
      conversionControlProps
    } = this.props;
    return (
      <Field {...fieldProps}>
        <FieldLabel {...fieldLabelProps}>
          <Label label={label} />
        </FieldLabel>
        <FieldBody>
          <Field>
            <InputControl
              {...inputControlProps}
              inputProps={{
                handleChange: this.handleInputChange("primaryInput"),
                value: this.state.primaryInput
              }}
            />
          </Field>
          <Field>
            <InputControl
              {...conversionControlProps}
              inputProps={{
                handleChange: this.handleInputChange("secondaryInput"),
                value: this.state.secondaryInput
              }}
            />
          </Field>
        </FieldBody>
      </Field>
    );
  }
}

export default LabelInputConversionField;
