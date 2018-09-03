import * as React from "react";

import Card from "../atoms/Card";
import CardContent from "../atoms/CardContent";
import CardFooter from "../atoms/CardFooter";
import CardHeader from "../atoms/CardHeader";
import CardHeaderIcon from "../atoms/CardHeaderIcon";
import CardHeaderTitle from "../atoms/CardHeaderTitle";
import Content from "../atoms/Content";
import Icon from "../atoms/Icon";
import LabelInputField from "../molecules/LabelInputField";
// import PercentageAmountInputField from "./PercentageAmountInputField";

export type InputChangeHandlerFunc = (value: string) => void;

interface IProps {
  cashOnCashReturnBeforeTaxesMonthly?: number;
  cashOnCashReturnBeforeTaxesYearly?: number;
  capitalRateOfReturn?: number;
  // amortizationPeriodInYears: string;
  // amortizationPeriodInYearsHandleInputChange: InputChangeHandlerFunc;
  // askingPrice: string;
  // askingPriceHandleInputChange: InputChangeHandlerFunc;
  // closingCosts: string;
  // closingCostsHandleInputChange: InputChangeHandlerFunc;
  // downPayment: string;
  // downPaymentHandleInputChange: InputChangeHandlerFunc;
  // interestRate: string;
  // interestRateHandleInputChange: InputChangeHandlerFunc;
  // loanAmount: string;
  // monthlyPrincipalAndInterest: string;
  // offerPrice: string;
  // offerPriceHandleInputChange: InputChangeHandlerFunc;
  // outOfPocketCost: string;
  // repairCosts: string;
  // repairCostsHandleInputChange: InputChangeHandlerFunc;
  // fairMarketValue: string;
  // fairMarketValueHandleInputChange: InputChangeHandlerFunc;
}

class Yields extends React.Component<Partial<IProps>> {
  public static defaultProps: IProps = {
    cashOnCashReturnBeforeTaxesMonthly: undefined,
    cashOnCashReturnBeforeTaxesYearly: undefined,
    capitalRateOfReturn: undefined
    // allInCost: "",
    // amortizationPeriodInYears: "",
    // amortizationPeriodInYearsHandleInputChange: (value: string) => undefined,
    // askingPrice: "",
    // askingPriceHandleInputChange: (value: string) => undefined,
    // closingCosts: "",
    // closingCostsHandleInputChange: (value: string) => undefined,
    // downPayment: "",
    // downPaymentHandleInputChange: (value: string) => undefined,
    // fairMarketValue: "",
    // fairMarketValueHandleInputChange: (value: string) => undefined,
    // interestRate: "",
    // interestRateHandleInputChange: (value: string) => undefined,
    // loanAmount: "",
    // monthlyPrincipalAndInterest: "",
    // offerPrice: "",
    // offerPriceHandleInputChange: (value: string) => undefined,
    // outOfPocketCost: "",
    // repairCosts: "",
    // repairCostsHandleInputChange: (value: string) => undefined
  };

  public render() {
    const {
      cashOnCashReturnBeforeTaxesYearly,
      cashOnCashReturnBeforeTaxesMonthly,
      capitalRateOfReturn
    } = this.props;
    const CoCRbty = cashOnCashReturnBeforeTaxesYearly
      ? String(cashOnCashReturnBeforeTaxesYearly)
      : "";
    const CoCRbtm = cashOnCashReturnBeforeTaxesMonthly
      ? String(cashOnCashReturnBeforeTaxesMonthly)
      : "";
    const capitalRate = capitalRateOfReturn ? String(capitalRateOfReturn) : "";

    return (
      <Card>
        <CardHeader>
          <CardHeaderTitle>Yields</CardHeaderTitle>
          <CardHeaderIcon>
            <Icon
              iconProps={{
                className: "fas fa-certificate"
              }}
            />
          </CardHeaderIcon>
        </CardHeader>

        <CardContent>
          <Content>
            <LabelInputField
              label="CoCR btm"
              fieldProps={{
                className: "is-horizontal"
              }}
              fieldLabelProps={{
                className: "is-normal"
              }}
              inputControlProps={{
                inputProps: {
                  placeholder: "CoCR-BT (m)",
                  value: CoCRbtm
                },
                leftIconProps: {
                  iconProps: {
                    className: "fas fa-percent"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                },
                rightIconProps: {
                  iconProps: {
                    className: "fas fa-sign"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                }
              }}
            />
            <LabelInputField
              label="CoCR atm"
              fieldProps={{
                className: "is-horizontal"
              }}
              fieldLabelProps={{
                className: "is-normal"
              }}
              inputControlProps={{
                inputProps: {
                  // handleChange: this.props
                  //   .cashOnCashReturnBeforeTaxesMonthlyHandleInputChange,
                  isDisabled: true,
                  placeholder: "CoCR-AT (m)"
                  // value: this.props.cashOnCashReturnBeforeTaxesMonthly
                },
                leftIconProps: {
                  iconProps: {
                    className: "fas fa-percent"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                },
                rightIconProps: {
                  iconProps: {
                    className: "fas fa-sign"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                }
              }}
            />
            <LabelInputField
              label="CoCR bty"
              fieldProps={{
                className: "is-horizontal"
              }}
              fieldLabelProps={{
                className: "is-normal"
              }}
              inputControlProps={{
                inputProps: {
                  placeholder: "CoCR-BT (y)",
                  value: CoCRbty
                },
                leftIconProps: {
                  iconProps: {
                    className: "fas fa-percent"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                },
                rightIconProps: {
                  iconProps: {
                    className: "fas fa-sign"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                }
              }}
            />
            <LabelInputField
              label="CoCR aty"
              fieldProps={{
                className: "is-horizontal"
              }}
              fieldLabelProps={{
                className: "is-normal"
              }}
              inputControlProps={{
                inputProps: {
                  // handleChange: this.props
                  //   .cashOnCashReturnBeforeTaxesMonthlyHandleInputChange,
                  isDisabled: true,
                  placeholder: "CoCR-AT (y)"
                  // value: this.props.cashOnCashReturnBeforeTaxesMonthly
                },
                leftIconProps: {
                  iconProps: {
                    className: "fas fa-percent"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                },
                rightIconProps: {
                  iconProps: {
                    className: "fas fa-sign"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                }
              }}
            />
            <LabelInputField
              label="CoCR atwey"
              fieldProps={{
                className: "is-horizontal"
              }}
              fieldLabelProps={{
                className: "is-normal"
              }}
              inputControlProps={{
                inputProps: {
                  // handleChange: this.props
                  //   .cashOnCashReturnBeforeTaxesMonthlyHandleInputChange,
                  isDisabled: true,
                  placeholder: "CoCRatwe (y)"
                  // value: this.props.cashOnCashReturnBeforeTaxesMonthly
                },
                leftIconProps: {
                  iconProps: {
                    className: "fas fa-percent"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                },
                rightIconProps: {
                  iconProps: {
                    className: "fas fa-sign"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                }
              }}
            />
            <LabelInputField
              label="Cap Rate"
              fieldProps={{
                className: "is-horizontal"
              }}
              fieldLabelProps={{
                className: "is-normal"
              }}
              inputControlProps={{
                inputProps: {
                  placeholder: "Capital Rate of Return",
                  value: capitalRate
                },
                leftIconProps: {
                  iconProps: {
                    className: "fas fa-percent"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                },
                rightIconProps: {
                  iconProps: {
                    className: "fas fa-sign"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                }
              }}
            />
          </Content>
        </CardContent>

        <CardFooter>
          <Content className={"card-footer-item"}>
            Swear: Never to overpay.
          </Content>
        </CardFooter>
      </Card>
    );
  }
}

export default Yields;
