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
import PercentageAmountInputField from "./PercentageAmountInputField";

export type InputChangeHandlerFunc = (value: string) => void;

interface IProps {
  allInCost: string;
  amortizationPeriodInYears: string;
  amortizationPeriodInYearsHandleInputChange: InputChangeHandlerFunc;
  askingPrice: string;
  askingPriceHandleInputChange: InputChangeHandlerFunc;
  closingCosts: string;
  closingCostsHandleInputChange: InputChangeHandlerFunc;
  downPayment: string;
  downPaymentHandleInputChange: InputChangeHandlerFunc;
  interestRate: string;
  interestRateHandleInputChange: InputChangeHandlerFunc;
  loanAmount: string;
  monthlyPrincipalAndInterest: string;
  offerPrice: string;
  offerPriceHandleInputChange: InputChangeHandlerFunc;
  outOfPocketCost: string;
  repairCosts: string;
  repairCostsHandleInputChange: InputChangeHandlerFunc;
  fairMarketValue: string;
  fairMarketValueHandleInputChange: InputChangeHandlerFunc;
}

class PurchaseFinancing extends React.Component<Partial<IProps>> {
  public static defaultProps: IProps = {
    allInCost: "",
    amortizationPeriodInYears: "",
    amortizationPeriodInYearsHandleInputChange: (value: string) => undefined,
    askingPrice: "",
    askingPriceHandleInputChange: (value: string) => undefined,
    closingCosts: "",
    closingCostsHandleInputChange: (value: string) => undefined,
    downPayment: "",
    downPaymentHandleInputChange: (value: string) => undefined,
    fairMarketValue: "",
    fairMarketValueHandleInputChange: (value: string) => undefined,
    interestRate: "",
    interestRateHandleInputChange: (value: string) => undefined,
    loanAmount: "",
    monthlyPrincipalAndInterest: "",
    offerPrice: "",
    offerPriceHandleInputChange: (value: string) => undefined,
    outOfPocketCost: "",
    repairCosts: "",
    repairCostsHandleInputChange: (value: string) => undefined
  };

  public render() {
    return (
      <Card>
        <CardHeader>
          <CardHeaderTitle>Purchase & Financing</CardHeaderTitle>
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
              label="Asking Price"
              fieldProps={{
                className: "is-horizontal"
              }}
              fieldLabelProps={{
                className: "is-normal"
              }}
              inputControlProps={{
                inputProps: {
                  handleChange: this.props.askingPriceHandleInputChange,
                  placeholder: "Asking Price",
                  value: this.props.askingPrice
                },
                leftIconProps: {
                  iconProps: {
                    className: "fas fa-dollar-sign"
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
              label="Offer Price"
              fieldProps={{
                className: "is-horizontal"
              }}
              fieldLabelProps={{
                className: "is-normal"
              }}
              inputControlProps={{
                inputProps: {
                  handleChange: this.props.offerPriceHandleInputChange,
                  placeholder: "Offer Price",
                  value: this.props.offerPrice
                },
                leftIconProps: {
                  iconProps: {
                    className: "fas fa-dollar-sign"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                },
                rightIconProps: {
                  iconProps: {
                    className: "fas fa-hand-holding-usd"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                }
              }}
            />

            <LabelInputField
              label="Closing Costs"
              fieldProps={{
                className: "is-horizontal"
              }}
              fieldLabelProps={{
                className: "is-normal"
              }}
              inputControlProps={{
                inputProps: {
                  handleChange: this.props.closingCostsHandleInputChange,
                  placeholder: "Closing Costs",
                  value: this.props.closingCosts
                },
                leftIconProps: {
                  iconProps: {
                    className: "fas fa-dollar-sign"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                },
                rightIconProps: {
                  iconProps: {
                    className: "fas fa-balance-scale"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                }
              }}
            />

            <LabelInputField
              label="Repair Costs"
              fieldProps={{
                className: "is-horizontal"
              }}
              fieldLabelProps={{
                className: "is-normal"
              }}
              inputControlProps={{
                inputProps: {
                  handleChange: this.props.repairCostsHandleInputChange,
                  placeholder: "Repair Costs",
                  value: this.props.repairCosts
                },
                leftIconProps: {
                  iconProps: {
                    className: "fas fa-dollar-sign"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                },
                rightIconProps: {
                  iconProps: {
                    className: "fas fa-toolbox"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                }
              }}
            />

            <LabelInputField
              label="Fair Market Value"
              fieldProps={{
                className: "is-horizontal"
              }}
              fieldLabelProps={{
                className: "is-normal"
              }}
              inputControlProps={{
                inputProps: {
                  handleChange: this.props.fairMarketValueHandleInputChange,
                  placeholder: "Fair Market Value",
                  value: this.props.fairMarketValue
                },
                leftIconProps: {
                  iconProps: {
                    className: "fas fa-dollar-sign"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                },
                rightIconProps: {
                  iconProps: {
                    className: "fas fa-handshake"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                }
              }}
            />

            <PercentageAmountInputField
              amount={this.props.offerPrice}
              order={["dollar", "percentage"]}
              label="Down Payment"
              handleChange={this.props.downPaymentHandleInputChange}
              fieldProps={{
                className: "is-horizontal"
              }}
              fieldLabelProps={{
                className: "is-normal"
              }}
              inputControlProps={{
                inputProps: {
                  placeholder: "Down Payment"
                },
                leftIconProps: {
                  iconProps: {
                    className: "fas fa-dollar-sign"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                },
                rightIconProps: {
                  iconProps: {
                    className: "fas fa-money-bill-alt"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                }
              }}
              conversionControlProps={{
                inputProps: {
                  placeholder: "Down Payment"
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
                    className: "fas fa-money-bill-alt"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                }
              }}
            />

            <LabelInputField
              label="Interest Rate"
              fieldProps={{
                className: "is-horizontal"
              }}
              fieldLabelProps={{
                className: "is-normal"
              }}
              inputControlProps={{
                inputProps: {
                  handleChange: this.props.interestRateHandleInputChange,
                  placeholder: "Interest Rate",
                  value: this.props.interestRate
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
                    className: "fas fa-chart-area"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                }
              }}
            />

            <LabelInputField
              label="Mortgage Length"
              fieldProps={{
                className: "is-horizontal"
              }}
              fieldLabelProps={{
                className: "is-normal"
              }}
              inputControlProps={{
                inputProps: {
                  handleChange: this.props
                    .amortizationPeriodInYearsHandleInputChange,
                  placeholder: "In Years",
                  value: this.props.amortizationPeriodInYears
                },
                leftIconProps: {
                  iconProps: {
                    className: "fas fa-sun"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                },
                rightIconProps: {
                  iconProps: {
                    className: "fas fa-file-contract"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                }
              }}
            />

            <Content>
              <LabelInputField
                label="Monthly P&I"
                fieldProps={{
                  className: "is-horizontal"
                }}
                fieldLabelProps={{
                  className: "is-normal"
                }}
                inputControlProps={{
                  inputProps: {
                    className: "is-primary",
                    isDisabled: true,
                    placeholder: "Monthly P&I",
                    value: this.props.monthlyPrincipalAndInterest
                  },
                  leftIconProps: {
                    iconProps: {
                      className: "fas fa-dollar-sign"
                    },
                    spanProps: {
                      className: "icon is-small"
                    }
                  },
                  rightIconProps: {
                    iconProps: {
                      className: "fas fa-home"
                    },
                    spanProps: {
                      className: "icon is-small"
                    }
                  }
                }}
              />
            </Content>

            <Content>
              <LabelInputField
                label="Loan Amount"
                fieldProps={{
                  className: "is-horizontal"
                }}
                fieldLabelProps={{
                  className: "is-normal"
                }}
                inputControlProps={{
                  inputProps: {
                    className: "is-primary",
                    isDisabled: true,
                    placeholder: "Loan Amount",
                    value: this.props.loanAmount
                  },
                  leftIconProps: {
                    iconProps: {
                      className: "fas fa-dollar-sign"
                    },
                    spanProps: {
                      className: "icon is-small"
                    }
                  },
                  rightIconProps: {
                    iconProps: {
                      className: "fas fa-home"
                    },
                    spanProps: {
                      className: "icon is-small"
                    }
                  }
                }}
              />
            </Content>

            <Content>
              <LabelInputField
                label="All-In Cost"
                fieldProps={{
                  className: "is-horizontal"
                }}
                fieldLabelProps={{
                  className: "is-normal"
                }}
                inputControlProps={{
                  inputProps: {
                    className: "is-primary",
                    isDisabled: true,
                    placeholder: "All-In Cost",
                    value: this.props.allInCost
                  },
                  leftIconProps: {
                    iconProps: {
                      className: "fas fa-dollar-sign"
                    },
                    spanProps: {
                      className: "icon is-small"
                    }
                  },
                  rightIconProps: {
                    iconProps: {
                      className: "fas fa-home"
                    },
                    spanProps: {
                      className: "icon is-small"
                    }
                  }
                }}
              />
            </Content>
            <Content>
              <LabelInputField
                label="Out of Pocket Cost"
                fieldProps={{
                  className: "is-horizontal"
                }}
                fieldLabelProps={{
                  className: "is-normal"
                }}
                inputControlProps={{
                  inputProps: {
                    className: "is-primary",
                    isDisabled: true,
                    placeholder: "Out of Pocket Cost",
                    value: this.props.outOfPocketCost
                  },
                  leftIconProps: {
                    iconProps: {
                      className: "fas fa-dollar-sign"
                    },
                    spanProps: {
                      className: "icon is-small"
                    }
                  },
                  rightIconProps: {
                    iconProps: {
                      className: "fas fa-home"
                    },
                    spanProps: {
                      className: "icon is-small"
                    }
                  }
                }}
              />
            </Content>
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

export default PurchaseFinancing;
