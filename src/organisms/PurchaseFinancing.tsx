import * as React from 'react'

import Card from '../atoms/Card'
import CardFooter from '../atoms/CardFooter'
import CardHeader from '../atoms/CardHeader'
import CardHeaderIcon from '../atoms/CardHeaderIcon'
import CardHeaderTitle from '../atoms/CardHeaderTitle'
import Container from '../atoms/Container'
import Icon from '../atoms/Icon'
// import { IInputControl } from '../molecules/InputControl'
import LabelInputField from '../molecules/LabelInputField'
// import Section from '../atoms/Section'

type InputChangeHandlerFunc = (value: string) => void;

interface IProps {
  amortizationPeriodInYears: string,
  amortizationPeriodInYearsHandleInputChange: InputChangeHandlerFunc,
  askingPrice: string,
  askingPriceHandleInputChange: InputChangeHandlerFunc,
  closingCosts: string,
  closingCostsHandleInputChange: InputChangeHandlerFunc,
  downPayment: string,
  downPaymentHandleInputChange: InputChangeHandlerFunc,
  interestRate: string,
  interestRateHandleInputChange: InputChangeHandlerFunc,
  offerPriceHandleInputChange: InputChangeHandlerFunc,
  offerPrice: string,
  repairCosts: string,
  repairCostsHandleInputChange: InputChangeHandlerFunc,
  fairMarketValue: string,
  fairMarketValueHandleInputChange: InputChangeHandlerFunc,
}


class PurchaseFinancing extends React.Component<Partial<IProps>> {
  public static defaultProps: IProps = {
    amortizationPeriodInYears: '',
    amortizationPeriodInYearsHandleInputChange: (value: string) => undefined,
    askingPrice: '',
    askingPriceHandleInputChange: (value: string) => undefined,
    closingCosts: '',
    closingCostsHandleInputChange: (value: string) => undefined,
    downPayment: '',
    downPaymentHandleInputChange: (value: string) => undefined,
    fairMarketValue: '',
    fairMarketValueHandleInputChange: (value: string) => undefined,
    interestRate: '',
    interestRateHandleInputChange: (value: string) => undefined,
    offerPrice: '',
    offerPriceHandleInputChange: (value: string) => undefined,
    repairCosts: '',
    repairCostsHandleInputChange: (value: string) => undefined,
  }

  public render() {
    return (
      <Card>
        <CardHeader>
          <CardHeaderTitle>
            Purchase & Financing
          </CardHeaderTitle>
          <CardHeaderIcon>
            <Icon
              iconProps={{
                classNames: 'fas fa-certificate',
              }}
            />
          </CardHeaderIcon>
        </CardHeader>

        <Container>
            <LabelInputField
              label="Asking Price"
              fieldProps={{
                classNames: 'is-horizontal',
              }}
              fieldLabelProps={{
                classNames: 'is-normal',
              }}
              inputControlProps={{
                inputProps: {
                  handleChange: this.props.askingPriceHandleInputChange,
                  placeholder: "Asking Price",
                  value: this.props.askingPrice,
                },
                leftIconProps: {
                  iconProps: {
                    classNames: "fas fa-dollar-sign",
                  },
                  spanProps: {
                    classNames: "icon is-small",
                  },
                },
                rightIconProps: {
                  iconProps: {
                    classNames: "fas fa-sign",
                  },
                  spanProps: {
                    classNames: "icon is-small",
                  },
                },
              }}
            />
            <LabelInputField
              label="Offer Price"
              fieldProps={{
                classNames: 'is-horizontal',
              }}
              fieldLabelProps={{
                classNames: 'is-normal',
              }}
              inputControlProps={{
                inputProps: {
                  handleChange: this.props.offerPriceHandleInputChange,
                  placeholder: "Offer Price",
                  value: this.props.offerPrice,
                },
                leftIconProps: {
                  iconProps: {
                    classNames: "fas fa-dollar-sign",
                  },
                  spanProps: {
                    classNames: "icon is-small",
                  },
                },
                rightIconProps: {
                  iconProps: {
                    classNames: "fas fa-hand-holding-usd",
                  },
                  spanProps: {
                    classNames: "icon is-small",
                  },
                },
              }}
            />

            <LabelInputField
              label="Closing Costs"
              fieldProps={{
                classNames: 'is-horizontal',
              }}
              fieldLabelProps={{
                classNames: 'is-normal',
              }}
              inputControlProps={{
                inputProps: {
                  handleChange: this.props.closingCostsHandleInputChange,
                  placeholder: "Closing Costs",
                  value: this.props.closingCosts,
                },
                leftIconProps: {
                  iconProps: {
                    classNames: "fas fa-dollar-sign",
                  },
                  spanProps: {
                    classNames: "icon is-small",
                  },
                },
                rightIconProps: {
                  iconProps: {
                    classNames: "fas fa-balance-scale",
                  },
                  spanProps: {
                    classNames: "icon is-small",
                  },
                },
              }}
            />

            <LabelInputField
              label="Repair Costs"
              fieldProps={{
                classNames: 'is-horizontal',
              }}
              fieldLabelProps={{
                classNames: 'is-normal',
              }}
              inputControlProps={{
                inputProps: {
                  handleChange: this.props.repairCostsHandleInputChange,
                  placeholder: "Repair Costs",
                  value: this.props.repairCosts,
                },
                leftIconProps: {
                  iconProps: {
                    classNames: "fas fa-dollar-sign",
                  },
                  spanProps: {
                    classNames: "icon is-small",
                  },
                },
                rightIconProps: {
                  iconProps: {
                    classNames: "fas fa-toolbox",
                  },
                  spanProps: {
                    classNames: "icon is-small",
                  },
                },
              }}
            />

            <LabelInputField
              label="Fair Market Value"
              fieldProps={{
                classNames: 'is-horizontal',
              }}
              fieldLabelProps={{
                classNames: 'is-normal',
              }}
              inputControlProps={{
                inputProps: {
                  handleChange: this.props.fairMarketValueHandleInputChange,
                  placeholder: "Fair Market Value",
                  value: this.props.fairMarketValue,
                },
                leftIconProps: {
                  iconProps: {
                    classNames: "fas fa-dollar-sign",
                  },
                  spanProps: {
                    classNames: "icon is-small",
                  },
                },
                rightIconProps: {
                  iconProps: {
                    classNames: "fas fa-handshake",
                  },
                  spanProps: {
                    classNames: "icon is-small",
                  },
                },
              }}
            />

            <LabelInputField
              label="Down Payment"
              fieldProps={{
                classNames: 'is-horizontal',
              }}
              fieldLabelProps={{
                classNames: 'is-normal',
              }}
              inputControlProps={{
                inputProps: {
                  handleChange: this.props.downPaymentHandleInputChange,
                  placeholder: "Down Payment",
                  value: this.props.downPayment,
                },
                leftIconProps: {
                  iconProps: {
                    classNames: "fas fa-dollar-sign",
                  },
                  spanProps: {
                    classNames: "icon is-small",
                  },
                },
                rightIconProps: {
                  iconProps: {
                    classNames: "fas fa-money-bill-alt",
                  },
                  spanProps: {
                    classNames: "icon is-small",
                  },
                },
              }}
            />

            <LabelInputField
              label="Interest Rate"
              fieldProps={{
                classNames: 'is-horizontal',
              }}
              fieldLabelProps={{
                classNames: 'is-normal',
              }}
              inputControlProps={{
                inputProps: {
                  handleChange: this.props.interestRateHandleInputChange,
                  placeholder: "Interest Rate",
                  value: this.props.interestRate,
                },
                leftIconProps: {
                  iconProps: {
                    classNames: "fas fa-percent",
                  },
                  spanProps: {
                    classNames: "icon is-small",
                  },
                },
                rightIconProps: {
                  iconProps: {
                    classNames: "fas fa-chart-area",
                  },
                  spanProps: {
                    classNames: "icon is-small",
                  },
                },
              }}
            />

            <LabelInputField
              label="Mortgage Length"
              fieldProps={{
                classNames: 'is-horizontal',
              }}
              fieldLabelProps={{
                classNames: 'is-normal',
              }}
              inputControlProps={{
                inputProps: {
                  handleChange: this.props.amortizationPeriodInYearsHandleInputChange,
                  placeholder: "In Years",
                  value: this.props.amortizationPeriodInYears,
                },
                leftIconProps: {
                  iconProps: {
                    classNames: "fas fa-sun",
                  },
                  spanProps: {
                    classNames: "icon is-small",
                  },
                },
                rightIconProps: {
                  iconProps: {
                    classNames: "fas fa-file-contract",
                  },
                  spanProps: {
                    classNames: "icon is-small",
                  },
                },
              }}
            />


            {/* <div className="content">
              <LabelInputField
                label="What To Offer"
                fieldProps={{
                  classNames: 'is-horizontal',
                }}
                fieldLabelProps={{
                  classNames: 'is-normal',
                }}
                inputControlProps={{
                  inputProps: {
                    placeholder: "What To Offer",
                    readonly: true,
                    value: String(whatToOffer),
                    classNames: "is-primary"
                  },
                  leftIconProps: {
                    iconProps: {
                      classNames: "fas fa-dollar-sign",
                    },
                    spanProps: {
                      classNames: "icon is-small",
                    },
                  },
                  rightIconProps: {
                    iconProps: {
                      classNames: "fas fa-home",
                    },
                    spanProps: {
                      classNames: "icon is-small",
                    },
                  },
                }}
              />
            </div>  */}

          </Container>

        <CardFooter>
          <div className="content card-footer-item">
            Swear: Never to overpay.
          </div>
        </CardFooter>
      </Card>
    )
  }
}

export default PurchaseFinancing
