import * as React from "react";

import { filter } from "lodash";
import Card from "../atoms/Card";
import CardContent from "../atoms/CardContent";
import CardFooter from "../atoms/CardFooter";
import CardHeader from "../atoms/CardHeader";
import CardHeaderIcon from "../atoms/CardHeaderIcon";
import CardHeaderTitle from "../atoms/CardHeaderTitle";
import Content from "../atoms/Content";
import Icon from "../atoms/Icon";
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
  miscellaneousExpenses: string;
  miscellaneousExpensesHandleInputChange: InputChangeHandlerFunc;
  outOfPocketCost: string;
  rent: string;
  taxes: string;
  taxesHandleInputChange: InputChangeHandlerFunc;
  vacancy: string;
  vacancyHandleInputChange: InputChangeHandlerFunc;
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
    miscellaneousExpenses: "",
    miscellaneousExpensesHandleInputChange: (value: string) => undefined,
    monthlyPrincipalAndInterest: "",
    outOfPocketCost: "",
    rent: "",
    taxes: "",
    taxesHandleInputChange: (value: string) => undefined,
    vacancy: "",
    vacancyHandleInputChange: (value: string) => undefined,
    water: "",
    waterHandleInputChange: (value: string) => undefined
  };

  public percentageOfRent = (percent: number) => {
    return (percent / 100) * Number(this.props.rent);
  };

  public primaryToSecondaryConversion = (p: number) => this.percentageOfRent(p);

  public calculateTotalOperatingExpenses = () => {
    const {
      capitalExpenditures,
      maintenance,
      insurance,
      water,
      gas,
      electric,
      management,
      miscellaneousExpenses,
      taxes,
      vacancy
    } = this.props;

    const expenses = [
      capitalExpenditures,
      maintenance,
      insurance,
      water,
      gas,
      electric,
      management,
      miscellaneousExpenses,
      taxes,
      vacancy
    ];

    const expensesWithUserInput = filter(expenses, exp => {
      return exp !== "" && exp !== undefined;
    });

    if (expensesWithUserInput.length === 0) {
      return "";
    }

    return String(
      expenses.reduce((prevVal, currVal) => {
        return prevVal + Number(currVal);
      }, 0)
    );
  };

  public render() {
    const totalOperatingExpenses = this.calculateTotalOperatingExpenses();
    return (
      <Card>
        <CardHeader>
          <CardHeaderTitle>Monthly Expenses</CardHeaderTitle>
          <CardHeaderIcon>
            <Icon
              iconProps={{
                className: "fas fa-venus"
              }}
            />
          </CardHeaderIcon>
        </CardHeader>

        <CardContent>
          <Content>
            <PercentageAmountInputField
              amount={this.props.rent}
              value={this.props.capitalExpenditures}
              order={["dollar", "percentage"]}
              label="Capital Expenditures"
              handleChange={this.props.capitalExpendituresHandleInputChange}
              fieldProps={{
                className: "is-horizontal"
              }}
              fieldLabelProps={{
                className: "is-normal"
              }}
              inputControlProps={{
                inputProps: {
                  placeholder: "Capital Expenditures"
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
                    className: "fas fa-allergies"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                }
              }}
              conversionControlProps={{
                inputProps: {
                  placeholder: "Capital Expenditures"
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
                    className: "fas fa-allergies"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                }
              }}
            />

            <PercentageAmountInputField
              value={this.props.maintenance}
              amount={this.props.rent}
              order={["dollar", "percentage"]}
              label="Maintenance"
              handleChange={this.props.maintenanceHandleInputChange}
              fieldProps={{
                className: "is-horizontal"
              }}
              fieldLabelProps={{
                className: "is-normal"
              }}
              inputControlProps={{
                inputProps: {
                  placeholder: "Maintenance & Repairs"
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
                    className: "fas fa-bed"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                }
              }}
              conversionControlProps={{
                inputProps: {
                  placeholder: "Maintenance & Repairs"
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
                    className: "fas fa-bed"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                }
              }}
            />

            <PercentageAmountInputField
              value={this.props.insurance}
              amount={this.props.rent}
              order={["dollar", "percentage"]}
              label="Insurance"
              handleChange={this.props.insuranceHandleInputChange}
              fieldProps={{
                className: "is-horizontal"
              }}
              fieldLabelProps={{
                className: "is-normal"
              }}
              inputControlProps={{
                inputProps: {
                  placeholder: "Insurance"
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
                    className: "fas fa-drum"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                }
              }}
              conversionControlProps={{
                inputProps: {
                  placeholder: "Insurance"
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
                    className: "fas fa-drum"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                }
              }}
            />

            <PercentageAmountInputField
              value={this.props.water}
              amount={this.props.rent}
              order={["dollar", "percentage"]}
              label="Water"
              handleChange={this.props.waterHandleInputChange}
              fieldProps={{
                className: "is-horizontal"
              }}
              fieldLabelProps={{
                className: "is-normal"
              }}
              inputControlProps={{
                inputProps: {
                  placeholder: "Water Bill"
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
                    className: "fas fa-tint"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                }
              }}
              conversionControlProps={{
                inputProps: {
                  placeholder: "Water Bill"
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
                    className: "fas fa-tint"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                }
              }}
            />

            <PercentageAmountInputField
              value={this.props.gas}
              amount={this.props.rent}
              order={["dollar", "percentage"]}
              label="Gas"
              handleChange={this.props.gasHandleInputChange}
              fieldProps={{
                className: "is-horizontal"
              }}
              fieldLabelProps={{
                className: "is-normal"
              }}
              inputControlProps={{
                inputProps: {
                  placeholder: "Gas Bill"
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
                    className: "fas fa-burn"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                }
              }}
              conversionControlProps={{
                inputProps: {
                  placeholder: "Gas Bill"
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
                    className: "fas fa-burn"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                }
              }}
            />

            <PercentageAmountInputField
              value={this.props.electric}
              amount={this.props.rent}
              order={["dollar", "percentage"]}
              label="Electric"
              handleChange={this.props.electricHandleInputChange}
              fieldProps={{
                className: "is-horizontal"
              }}
              fieldLabelProps={{
                className: "is-normal"
              }}
              inputControlProps={{
                inputProps: {
                  placeholder: "Electric"
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
                    className: "fas fa-bolt"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                }
              }}
              conversionControlProps={{
                inputProps: {
                  placeholder: "Electric"
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
                    className: "fas fa-bolt"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                }
              }}
            />

            <PercentageAmountInputField
              value={this.props.management}
              amount={this.props.rent}
              order={["dollar", "percentage"]}
              label="Management"
              handleChange={this.props.managementHandleInputChange}
              fieldProps={{
                className: "is-horizontal"
              }}
              fieldLabelProps={{
                className: "is-normal"
              }}
              inputControlProps={{
                inputProps: {
                  placeholder: "Management"
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
                    className: "fas fa-people-carry"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                }
              }}
              conversionControlProps={{
                inputProps: {
                  placeholder: "Management"
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
                    className: "fas fa-people-carry"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                }
              }}
            />

            <PercentageAmountInputField
              value={this.props.taxes}
              amount={this.props.rent}
              order={["dollar", "percentage"]}
              label="Taxes"
              handleChange={this.props.taxesHandleInputChange}
              fieldProps={{
                className: "is-horizontal"
              }}
              fieldLabelProps={{
                className: "is-normal"
              }}
              inputControlProps={{
                inputProps: {
                  placeholder: "Taxes"
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
                    className: "fas fa-taxi"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                }
              }}
              conversionControlProps={{
                inputProps: {
                  placeholder: "Taxes"
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
                    className: "fas fa-taxi"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                }
              }}
            />

            <PercentageAmountInputField
              value={this.props.vacancy}
              amount={this.props.rent}
              order={["dollar", "percentage"]}
              label="Vacancy"
              handleChange={this.props.vacancyHandleInputChange}
              fieldProps={{
                className: "is-horizontal"
              }}
              fieldLabelProps={{
                className: "is-normal"
              }}
              inputControlProps={{
                inputProps: {
                  placeholder: "Vacancy"
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
                    className: "fas fa-door-open"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                }
              }}
              conversionControlProps={{
                inputProps: {
                  placeholder: "Vacancy"
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
                    className: "fas fa-door-open"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                }
              }}
            />

            <PercentageAmountInputField
              value={this.props.miscellaneousExpenses}
              amount={this.props.rent}
              order={["dollar", "percentage"]}
              label="Misc."
              handleChange={this.props.miscellaneousExpensesHandleInputChange}
              fieldProps={{
                className: "is-horizontal"
              }}
              fieldLabelProps={{
                className: "is-normal"
              }}
              inputControlProps={{
                inputProps: {
                  placeholder: "Miscellaneous"
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
                    className: "fas fa-door-open"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                }
              }}
              conversionControlProps={{
                inputProps: {
                  placeholder: "Miscellaneous"
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
                    className: "fas fa-door-open"
                  },
                  spanProps: {
                    className: "icon is-small"
                  }
                }
              }}
            />

            <Content>
              <PercentageAmountInputField
                value={totalOperatingExpenses}
                amount={this.props.rent}
                order={["dollar", "percentage"]}
                label="Total Operating Expenses"
                fieldProps={{
                  className: "is-horizontal"
                }}
                fieldLabelProps={{
                  className: "is-normal"
                }}
                inputControlProps={{
                  inputProps: {
                    className: "is-danger",
                    isDisabled: true,
                    placeholder: "Total Expenses"
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
                      className: "fas fa-table"
                    },
                    spanProps: {
                      className: "icon is-small"
                    }
                  }
                }}
                conversionControlProps={{
                  inputProps: {
                    className: "is-danger",
                    isDisabled: true,
                    placeholder: "Total Expenses"
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
                      className: "fas fa-table"
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
            Be conversative ... like it's a Sunday-church day.
          </Content>
        </CardFooter>
      </Card>
    );
  }
}

export default MonthlyExpenses;
