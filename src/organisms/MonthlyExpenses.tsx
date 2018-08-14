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
  capitalExpenditures: string;
  capitalExpendituresHandleInputChange: InputChangeHandlerFunc;
  insurance: string;
  insuranceHandleInputChange: InputChangeHandlerFunc;
  electric: string;
  electricHandleInputChange: InputChangeHandlerFunc;
  management: string;
  managementHandleInputChange: InputChangeHandlerFunc;
  loanAmount: string;
  monthlyPrincipalAndInterest: string;
  maintenance: string;
  maintenanceHandleInputChange: InputChangeHandlerFunc;
  outOfPocketCost: string;
  rent: string;
  water: string;
  waterHandleInputChange: InputChangeHandlerFunc;
  gas: string;
  gasHandleInputChange: InputChangeHandlerFunc;
}

class MonthlyExpenses extends React.Component<Partial<IProps>> {
  public static defaultProps: IProps = {
    allInCost: "",
    amortizationPeriodInYears: "",
    amortizationPeriodInYearsHandleInputChange: (value: string) => undefined,
    capitalExpenditures: "",
    capitalExpendituresHandleInputChange: (value: string) => undefined,
    electric: "",
    electricHandleInputChange: (value: string) => undefined,
    gas: "",
    gasHandleInputChange: (value: string) => undefined,
    insurance: "",
    insuranceHandleInputChange: (value: string) => undefined,
    loanAmount: "",
    maintenance: "",
    maintenanceHandleInputChange: (value: string) => undefined,
    management: "",
    managementHandleInputChange: (value: string) => undefined,
    monthlyPrincipalAndInterest: "",
    outOfPocketCost: "",
    rent: "",
    water: "",
    waterHandleInputChange: (value: string) => undefined
  };

  public percentageOfRent = (percent: number) => {
    return (percent / 100) * Number(this.props.rent);
  };

  public primaryToSecondaryConversion = (p: number) => this.percentageOfRent(p);

  public render() {
    return (
      <Card>
        <CardHeader>
          <CardHeaderTitle>Monthly Expenses</CardHeaderTitle>
          <CardHeaderIcon>
            <Icon
              iconProps={{
                classNames: "fas fa-venus"
              }}
            />
          </CardHeaderIcon>
        </CardHeader>

        <CardContent>
          <Content>
            <PercentageAmountInputField
              amount={this.props.rent}
              order={["dollar", "percentage"]}
              label="Capital Expenditures"
              handleChange={this.props.capitalExpendituresHandleInputChange}
              fieldProps={{
                classNames: "is-horizontal"
              }}
              fieldLabelProps={{
                classNames: "is-normal"
              }}
              inputControlProps={{
                inputProps: {
                  placeholder: "Capital Expenditures"
                },
                leftIconProps: {
                  iconProps: {
                    classNames: "fas fa-dollar-sign"
                  },
                  spanProps: {
                    classNames: "icon is-small"
                  }
                },
                rightIconProps: {
                  iconProps: {
                    classNames: "fas fa-allergies"
                  },
                  spanProps: {
                    classNames: "icon is-small"
                  }
                }
              }}
              conversionControlProps={{
                inputProps: {
                  placeholder: "Capital Expenditures"
                },
                leftIconProps: {
                  iconProps: {
                    classNames: "fas fa-percent"
                  },
                  spanProps: {
                    classNames: "icon is-small"
                  }
                },
                rightIconProps: {
                  iconProps: {
                    classNames: "fas fa-allergies"
                  },
                  spanProps: {
                    classNames: "icon is-small"
                  }
                }
              }}
            />

            <PercentageAmountInputField
              amount={this.props.rent}
              order={["dollar", "percentage"]}
              label="Maintenance"
              handleChange={this.props.maintenanceHandleInputChange}
              fieldProps={{
                classNames: "is-horizontal"
              }}
              fieldLabelProps={{
                classNames: "is-normal"
              }}
              inputControlProps={{
                inputProps: {
                  placeholder: "Maintenance & Repairs"
                },
                leftIconProps: {
                  iconProps: {
                    classNames: "fas fa-dollar-sign"
                  },
                  spanProps: {
                    classNames: "icon is-small"
                  }
                },
                rightIconProps: {
                  iconProps: {
                    classNames: "fas fa-bed"
                  },
                  spanProps: {
                    classNames: "icon is-small"
                  }
                }
              }}
              conversionControlProps={{
                inputProps: {
                  placeholder: "Maintenance & Repairs"
                },
                leftIconProps: {
                  iconProps: {
                    classNames: "fas fa-percent"
                  },
                  spanProps: {
                    classNames: "icon is-small"
                  }
                },
                rightIconProps: {
                  iconProps: {
                    classNames: "fas fa-bed"
                  },
                  spanProps: {
                    classNames: "icon is-small"
                  }
                }
              }}
            />

            <PercentageAmountInputField
              amount={this.props.rent}
              order={["dollar", "percentage"]}
              label="Insurance"
              handleChange={this.props.insuranceHandleInputChange}
              fieldProps={{
                classNames: "is-horizontal"
              }}
              fieldLabelProps={{
                classNames: "is-normal"
              }}
              inputControlProps={{
                inputProps: {
                  placeholder: "Insurance"
                },
                leftIconProps: {
                  iconProps: {
                    classNames: "fas fa-dollar-sign"
                  },
                  spanProps: {
                    classNames: "icon is-small"
                  }
                },
                rightIconProps: {
                  iconProps: {
                    classNames: "fas fa-drum"
                  },
                  spanProps: {
                    classNames: "icon is-small"
                  }
                }
              }}
              conversionControlProps={{
                inputProps: {
                  placeholder: "Insurance"
                },
                leftIconProps: {
                  iconProps: {
                    classNames: "fas fa-percent"
                  },
                  spanProps: {
                    classNames: "icon is-small"
                  }
                },
                rightIconProps: {
                  iconProps: {
                    classNames: "fas fa-drum"
                  },
                  spanProps: {
                    classNames: "icon is-small"
                  }
                }
              }}
            />

            <PercentageAmountInputField
              amount={this.props.rent}
              order={["dollar", "percentage"]}
              label="Water"
              handleChange={this.props.waterHandleInputChange}
              fieldProps={{
                classNames: "is-horizontal"
              }}
              fieldLabelProps={{
                classNames: "is-normal"
              }}
              inputControlProps={{
                inputProps: {
                  placeholder: "Water Bill"
                },
                leftIconProps: {
                  iconProps: {
                    classNames: "fas fa-dollar-sign"
                  },
                  spanProps: {
                    classNames: "icon is-small"
                  }
                },
                rightIconProps: {
                  iconProps: {
                    classNames: "fas fa-tint"
                  },
                  spanProps: {
                    classNames: "icon is-small"
                  }
                }
              }}
              conversionControlProps={{
                inputProps: {
                  placeholder: "Water Bill"
                },
                leftIconProps: {
                  iconProps: {
                    classNames: "fas fa-percent"
                  },
                  spanProps: {
                    classNames: "icon is-small"
                  }
                },
                rightIconProps: {
                  iconProps: {
                    classNames: "fas fa-tint"
                  },
                  spanProps: {
                    classNames: "icon is-small"
                  }
                }
              }}
            />

            <PercentageAmountInputField
              amount={this.props.rent}
              order={["dollar", "percentage"]}
              label="Gas"
              handleChange={this.props.gasHandleInputChange}
              fieldProps={{
                classNames: "is-horizontal"
              }}
              fieldLabelProps={{
                classNames: "is-normal"
              }}
              inputControlProps={{
                inputProps: {
                  placeholder: "Gas Bill"
                },
                leftIconProps: {
                  iconProps: {
                    classNames: "fas fa-dollar-sign"
                  },
                  spanProps: {
                    classNames: "icon is-small"
                  }
                },
                rightIconProps: {
                  iconProps: {
                    classNames: "fas fa-burn"
                  },
                  spanProps: {
                    classNames: "icon is-small"
                  }
                }
              }}
              conversionControlProps={{
                inputProps: {
                  placeholder: "Gas Bill"
                },
                leftIconProps: {
                  iconProps: {
                    classNames: "fas fa-percent"
                  },
                  spanProps: {
                    classNames: "icon is-small"
                  }
                },
                rightIconProps: {
                  iconProps: {
                    classNames: "fas fa-burn"
                  },
                  spanProps: {
                    classNames: "icon is-small"
                  }
                }
              }}
            />

            <PercentageAmountInputField
              amount={this.props.rent}
              order={["dollar", "percentage"]}
              label="Electric"
              handleChange={this.props.electricHandleInputChange}
              fieldProps={{
                classNames: "is-horizontal"
              }}
              fieldLabelProps={{
                classNames: "is-normal"
              }}
              inputControlProps={{
                inputProps: {
                  placeholder: "Electric"
                },
                leftIconProps: {
                  iconProps: {
                    classNames: "fas fa-dollar-sign"
                  },
                  spanProps: {
                    classNames: "icon is-small"
                  }
                },
                rightIconProps: {
                  iconProps: {
                    classNames: "fas fa-bolt"
                  },
                  spanProps: {
                    classNames: "icon is-small"
                  }
                }
              }}
              conversionControlProps={{
                inputProps: {
                  placeholder: "Electric"
                },
                leftIconProps: {
                  iconProps: {
                    classNames: "fas fa-percent"
                  },
                  spanProps: {
                    classNames: "icon is-small"
                  }
                },
                rightIconProps: {
                  iconProps: {
                    classNames: "fas fa-bolt"
                  },
                  spanProps: {
                    classNames: "icon is-small"
                  }
                }
              }}
            />

            <PercentageAmountInputField
              amount={this.props.rent}
              order={["dollar", "percentage"]}
              label="Management"
              handleChange={this.props.managementHandleInputChange}
              fieldProps={{
                classNames: "is-horizontal"
              }}
              fieldLabelProps={{
                classNames: "is-normal"
              }}
              inputControlProps={{
                inputProps: {
                  placeholder: "Management"
                },
                leftIconProps: {
                  iconProps: {
                    classNames: "fas fa-dollar-sign"
                  },
                  spanProps: {
                    classNames: "icon is-small"
                  }
                },
                rightIconProps: {
                  iconProps: {
                    classNames: "fas fa-people-carry"
                  },
                  spanProps: {
                    classNames: "icon is-small"
                  }
                }
              }}
              conversionControlProps={{
                inputProps: {
                  placeholder: "Management"
                },
                leftIconProps: {
                  iconProps: {
                    classNames: "fas fa-percent"
                  },
                  spanProps: {
                    classNames: "icon is-small"
                  }
                },
                rightIconProps: {
                  iconProps: {
                    classNames: "fas fa-people-carry"
                  },
                  spanProps: {
                    classNames: "icon is-small"
                  }
                }
              }}
            />

            <LabelInputField
              label="Mortgage Length"
              fieldProps={{
                classNames: "is-horizontal"
              }}
              fieldLabelProps={{
                classNames: "is-normal"
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
                    classNames: "fas fa-sun"
                  },
                  spanProps: {
                    classNames: "icon is-small"
                  }
                },
                rightIconProps: {
                  iconProps: {
                    classNames: "fas fa-file-contract"
                  },
                  spanProps: {
                    classNames: "icon is-small"
                  }
                }
              }}
            />

            <div className="content">
              <LabelInputField
                label="Monthly P&I"
                fieldProps={{
                  classNames: "is-horizontal"
                }}
                fieldLabelProps={{
                  classNames: "is-normal"
                }}
                inputControlProps={{
                  inputProps: {
                    classNames: "is-primary",
                    isDisabled: true,
                    placeholder: "Monthly P&I",
                    value: this.props.monthlyPrincipalAndInterest
                  },
                  leftIconProps: {
                    iconProps: {
                      classNames: "fas fa-dollar-sign"
                    },
                    spanProps: {
                      classNames: "icon is-small"
                    }
                  },
                  rightIconProps: {
                    iconProps: {
                      classNames: "fas fa-home"
                    },
                    spanProps: {
                      classNames: "icon is-small"
                    }
                  }
                }}
              />
            </div>

            <div className="content">
              <LabelInputField
                label="Loan Amount"
                fieldProps={{
                  classNames: "is-horizontal"
                }}
                fieldLabelProps={{
                  classNames: "is-normal"
                }}
                inputControlProps={{
                  inputProps: {
                    classNames: "is-primary",
                    isDisabled: true,
                    placeholder: "Loan Amount",
                    value: this.props.loanAmount
                  },
                  leftIconProps: {
                    iconProps: {
                      classNames: "fas fa-dollar-sign"
                    },
                    spanProps: {
                      classNames: "icon is-small"
                    }
                  },
                  rightIconProps: {
                    iconProps: {
                      classNames: "fas fa-home"
                    },
                    spanProps: {
                      classNames: "icon is-small"
                    }
                  }
                }}
              />
            </div>

            <div className="content">
              <LabelInputField
                label="All-In Cost"
                fieldProps={{
                  classNames: "is-horizontal"
                }}
                fieldLabelProps={{
                  classNames: "is-normal"
                }}
                inputControlProps={{
                  inputProps: {
                    classNames: "is-primary",
                    isDisabled: true,
                    placeholder: "All-In Cost",
                    value: this.props.allInCost
                  },
                  leftIconProps: {
                    iconProps: {
                      classNames: "fas fa-dollar-sign"
                    },
                    spanProps: {
                      classNames: "icon is-small"
                    }
                  },
                  rightIconProps: {
                    iconProps: {
                      classNames: "fas fa-home"
                    },
                    spanProps: {
                      classNames: "icon is-small"
                    }
                  }
                }}
              />
            </div>
            <div className="content">
              <LabelInputField
                label="Out of Pocket Cost"
                fieldProps={{
                  classNames: "is-horizontal"
                }}
                fieldLabelProps={{
                  classNames: "is-normal"
                }}
                inputControlProps={{
                  inputProps: {
                    classNames: "is-primary",
                    isDisabled: true,
                    placeholder: "Out of Pocket Cost",
                    value: this.props.outOfPocketCost
                  },
                  leftIconProps: {
                    iconProps: {
                      classNames: "fas fa-dollar-sign"
                    },
                    spanProps: {
                      classNames: "icon is-small"
                    }
                  },
                  rightIconProps: {
                    iconProps: {
                      classNames: "fas fa-home"
                    },
                    spanProps: {
                      classNames: "icon is-small"
                    }
                  }
                }}
              />
            </div>
          </Content>
        </CardContent>

        <CardFooter>
          <div className="content card-footer-item">
            Be conversative ... like it's a Sunday-church day.
          </div>
        </CardFooter>
      </Card>
    );
  }
}

export default MonthlyExpenses;
