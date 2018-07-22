import * as React from 'react'
import { Component } from 'react'

import Card from '../atoms/Card'
import CardFooter from '../atoms/CardFooter'
import CardHeader from '../atoms/CardHeader'
import CardHeaderIcon from '../atoms/CardHeaderIcon'
import CardHeaderTitle from '../atoms/CardHeaderTitle'
import Container from '../atoms/Container'
import Icon from '../atoms/Icon'
import Section from '../atoms/Section'
import LabelInputField from '../molecules/LabelInputField'
import PurchaseFinancing from '../organisms/PurchaseFinancing'

// Interface Istate {
//   amortizationPeriodInYears: string,
// }

class PropertyFinancials extends Component {
  public state = {
    amortizationPeriodInYears: '',
    askingPrice: '',
    capRate: '',
    closingCosts: '',
    downPayment: '',
    expenseRate: '',
    fairMarketValue: '',
    interestRate: '',
    offerPrice: '',
    rent: '',
    repairCosts: '',
    vacancyRate: '',
  }

  public calculateWhatToOffer = () => {
    const {
      capRate,
      expenseRate,
      rent,
      vacancyRate,
    } = this.state;

    if (capRate === '' || expenseRate === ''
      || rent === '' || vacancyRate === ''
    ) {
      return 'Please fill out all fields';
    }

    // const askingPriceNum = Number(askingPrice)
    const capRateNum = Number(capRate)
    const expenseRateNum = Number(expenseRate)
    // const offerPriceNum = Number(offerPrice)
    const rentNum = Number(rent)
    const vacancyRateNum = Number(vacancyRate)

    const whatToOffer = (( (rentNum*(1-vacancyRateNum/100)) *(1-expenseRateNum/100))*12)/(capRateNum/100)
    const roundedToNearestCent = parseFloat(String((Math.round(whatToOffer * 100) / 100))).toFixed(2);

    return String(roundedToNearestCent);
  }


  public handleInputChange = (field: string) => (value: string) => {
    this.setState({
      [field]: value,
    })
  }

  public render(){
    const whatToOffer = this.calculateWhatToOffer();

    return (
      <Section>
        <PurchaseFinancing
          askingPrice={this.state.askingPrice}
          askingPriceHandleInputChange={this.handleInputChange('askingPrice')}
          amortizationPeriodInYears={this.state.amortizationPeriodInYears}
          amortizationPeriodInYearsHandleInputChange={this.handleInputChange('amortizationPeriodInYears')}
          closingCosts={this.state.closingCosts}
          closingCostsHandleInputChange={this.handleInputChange('closingCosts')}
          downPayment={this.state.downPayment}
          downPaymentHandleInputChange={this.handleInputChange('downPayment')}
          fairMarketValue={this.state.fairMarketValue}
          fairMarketValueHandleInputChange={this.handleInputChange('fairMarketValue')}
          interestRate={this.state.interestRate}
          interestRateHandleInputChange={this.handleInputChange('interestRate')}
          offerPrice={this.state.offerPrice}
          offerPriceHandleInputChange={this.handleInputChange('offerPrice')}
          repairCosts={this.state.repairCosts}
          repairCostsHandleInputChange={this.handleInputChange('repairCosts')}
        />
        <Card>
        <CardHeader>
          <CardHeaderTitle>
            Quick & Dirty Cap Rate
          </CardHeaderTitle>
          <CardHeaderIcon>
            <Icon
              iconProps={{
                classNames: 'fas fa-seedling',
              }}
            />
          </CardHeaderIcon>
        </CardHeader>
        <Container>
            <LabelInputField
              label="Rent"
              fieldProps={{
                classNames: 'is-horizontal',
              }}
              fieldLabelProps={{
                classNames: 'is-normal',
              }}
              inputControlProps={{
                inputProps: {
                  handleChange: this.handleInputChange('rent'),
                  placeholder: "Rent",
                  value: this.state.rent,
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
              label="Vacancy Rate"
              fieldProps={{
                classNames: 'is-horizontal',
              }}
              fieldLabelProps={{
                classNames: 'is-normal',
              }}
              inputControlProps={{
                inputProps: {
                  handleChange: this.handleInputChange('vacancyRate'),
                  placeholder: "Vacancy Rate",
                  value: this.state.vacancyRate,
                },
                leftIconProps: {
                  iconProps: {
                    classNames: "fas fa-percentage",
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
              label="Expense Rate"
              fieldProps={{
                classNames: 'is-horizontal',
              }}
              fieldLabelProps={{
                classNames: 'is-normal',
              }}
              inputControlProps={{
                inputProps: {
                  handleChange: this.handleInputChange('expenseRate'),
                  placeholder: "Expenses Rate",
                  value: this.state.expenseRate,
                },
                leftIconProps: {
                  iconProps: {
                    classNames: "fas fa-percentage",
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
              label="Cap Rate"
              fieldProps={{
                classNames: 'is-horizontal',
              }}
              fieldLabelProps={{
                classNames: 'is-normal',
              }}
              inputControlProps={{
                inputProps: {
                  handleChange: this.handleInputChange('capRate'),
                  placeholder: "Cap Rate",
                  value: this.state.capRate,
                },
                leftIconProps: {
                  iconProps: {
                    classNames: "fas fa-percentage",
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

            <div className="content">
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
                    classNames: "is-primary",
                    placeholder: "What To Offer",
                    readonly: true,
                    value: String(whatToOffer),
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
            </div>

          </Container>

          <CardFooter>
            <div className="content card-footer-item">Note: Use for ballparking.</div>
          </CardFooter>
          </Card>
        </Section>

    )
  }
}

export default PropertyFinancials
