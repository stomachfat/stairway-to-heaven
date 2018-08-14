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
  handleSaveWith?: "primaryInput" | "secondaryInput";
  handleChange?: (value: string) => void;
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
      secondaryToPrimaryConversion = noop,
      handleSaveWith
    } = this.props;

    const primaryInput = String(secondaryToPrimaryConversion(Number(input)));
    const secondaryInput = String(primaryToSecondaryConversion(Number(input)));

    switch (which) {
      case "primaryInput":
        {
          this.setState({
            secondaryInput
          });
        }
        break;
      case "secondaryInput":
        {
          this.setState({
            primaryInput
          });
        }
        break;
    }

    switch (handleSaveWith) {
      case "primaryInput":
        {
          if (which === "secondaryInput") {
            if (typeof this.props.handleChange === "function") {
              this.props.handleChange(primaryInput);
            }
          }

          if (which === "primaryInput") {
            if (typeof this.props.handleChange === "function") {
              this.props.handleChange(input);
            }
          }
        }
        break;
      case "secondaryInput":
        {
          if (which === "primaryInput") {
            if (typeof this.props.handleChange === "function") {
              this.props.handleChange(secondaryInput);
            }
          }

          if (which === "secondaryInput") {
            if (typeof this.props.handleChange === "function") {
              this.props.handleChange(input);
            }
          }
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

    const inputControlPropsRecompose = {
      ...inputControlProps,
      inputProps: {
        ...((inputControlProps && inputControlProps.inputProps) || {}),
        handleChange: this.handleInputChange("primaryInput"),
        value: this.state.primaryInput
      }
    };

    const conversionControlPropsRecompose = {
      ...conversionControlProps,
      inputProps: {
        ...((inputControlProps && inputControlProps.inputProps) || {}),
        handleChange: this.handleInputChange("secondaryInput"),
        value: this.state.secondaryInput
      }
    };

    return (
      <Field {...fieldProps}>
        <FieldLabel {...fieldLabelProps}>
          <Label label={label} />
        </FieldLabel>
        <FieldBody>
          <Field>
            <InputControl {...inputControlPropsRecompose} />
          </Field>
          <Field>
            <InputControl {...conversionControlPropsRecompose} />
          </Field>
        </FieldBody>
      </Field>
    );
  }
}

export default LabelInputConversionField;
