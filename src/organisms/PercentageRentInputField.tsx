import * as React from "react";

import LabelInputConversionField, {
  ILabelInputConversionProps
} from "../molecules/LabelInputConversionField";

interface IPercentageRentInputFieldProps
  extends Partial<ILabelInputConversionProps> {
  rent?: string;
}

class PercentageRentInputField extends React.Component<
  Partial<IPercentageRentInputFieldProps>
> {
  private primaryToSecondaryConversion: (percent: number) => number;
  private secondaryToPrimaryConversion: (fractionOfRent: number) => number;

  public dollarsOfRent = (percent: number) => {
    return (percent / 100) * Number(this.props.rent);
  };

  public percentageOfRent = (fractionOfRent: number) => {
    return (fractionOfRent / Number(this.props.rent)) * 100;
  };

  public componentWillMount() {
    this.primaryToSecondaryConversion = this.dollarsOfRent.bind(this);
    this.secondaryToPrimaryConversion = this.percentageOfRent.bind(this);
  }

  public componentWillReceiveProps(nextProps: IPercentageRentInputFieldProps) {
    if (this.props.rent !== nextProps.rent) {
      this.primaryToSecondaryConversion = this.dollarsOfRent.bind(this);
      this.secondaryToPrimaryConversion = this.secondaryToPrimaryConversion.bind(
        this
      );
    }
  }

  public render() {
    const { rent, ...inputProps } = this.props;

    return (
      <LabelInputConversionField
        {...inputProps}
        primaryToSecondaryConversion={this.primaryToSecondaryConversion}
        secondaryToPrimaryConversion={this.secondaryToPrimaryConversion}
      />
    );
  }
}

export default PercentageRentInputField;
