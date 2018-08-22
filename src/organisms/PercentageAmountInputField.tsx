import * as React from "react";

import { isEqual } from "lodash";

import LabelInputConversionField, {
  ILabelInputConversionProps
} from "../molecules/LabelInputConversionField";

interface IPercentageAmountInputFieldProps
  extends Partial<ILabelInputConversionProps> {
  amount: string;
  order: string[];
  handleChange?: (value: string) => void;
  value?: string;
}

class PercentageAmountInputField extends React.Component<
  Partial<IPercentageAmountInputFieldProps>
> {
  private primaryToSecondaryConversion: (percent: number) => number;
  private secondaryToPrimaryConversion: (fractionOfAmount: number) => number;

  public dollarsAmount = (percent: number) => {
    return (percent / 100) * Number(this.props.amount);
  };

  public percentageAmount = (fractionOfAmount: number) => {
    return (fractionOfAmount / Number(this.props.amount)) * 100;
  };

  public assignPrimarySecondaryConversion = () => {
    switch (isEqual(this.props.order, ["percentage", "dollar"])) {
      case true:
        this.primaryToSecondaryConversion = this.dollarsAmount.bind(this);
        this.secondaryToPrimaryConversion = this.percentageAmount.bind(this);
        break;
      case false:
        this.primaryToSecondaryConversion = this.percentageAmount.bind(this);
        this.secondaryToPrimaryConversion = this.dollarsAmount.bind(this);
        break;
    }
  };

  public componentWillMount() {
    this.assignPrimarySecondaryConversion();
  }

  public componentWillReceiveProps(
    nextProps: IPercentageAmountInputFieldProps
  ) {
    if (!isEqual(this.props.order, nextProps.order)) {
      this.assignPrimarySecondaryConversion();
    }

    if (this.props.amount !== nextProps.amount) {
      this.primaryToSecondaryConversion = this.primaryToSecondaryConversion.bind(
        this
      );
      this.secondaryToPrimaryConversion = this.secondaryToPrimaryConversion.bind(
        this
      );
    }
  }

  public render() {
    const { amount, value, ...inputProps } = this.props;

    return (
      <LabelInputConversionField
        {...inputProps}
        value={value}
        primaryToSecondaryConversion={this.primaryToSecondaryConversion}
        secondaryToPrimaryConversion={this.secondaryToPrimaryConversion}
        handleSaveWith={
          isEqual(this.props.order, ["percentage", "dollar"])
            ? "secondaryInput"
            : "primaryInput"
        }
        handleChange={this.props.handleChange}
      />
    );
  }
}

export default PercentageAmountInputField;
