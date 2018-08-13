import * as React from 'react'

import Card from '../atoms/Card'
import CardContent from '../atoms/CardContent'
import CardFooter from '../atoms/CardFooter'
import CardHeader from '../atoms/CardHeader'
import CardHeaderIcon from '../atoms/CardHeaderIcon'
import CardHeaderTitle from '../atoms/CardHeaderTitle'
import Content from '../atoms/Content'
import Icon from '../atoms/Icon'
import LabelInputField from '../molecules/LabelInputField'
import { InputChangeHandlerFunc } from '../organisms/PurchaseFinancing'

interface IProps {
  capRate: string,
  capRateHandleInputChange: InputChangeHandlerFunc,
  expenseRate: string,
  expenseRateHandleInputChange: InputChangeHandlerFunc,
  rent: string,
  rentHandleInputChange: InputChangeHandlerFunc,
  vacancyRate: string,
  vacancyRateHandleInputChange: InputChangeHandlerFunc,
}


class QuickAndDirtyCapRate extends React.Component<Partial<IProps>> {
  public static defaultProps: IProps = {
    capRate: '',
    capRateHandleInputChange: (value: string) => undefined,
    expenseRate: '',
    expenseRateHandleInputChange: (value: string) => undefined,
    rent: '',
    rentHandleInputChange: (value: string) => undefined,
    vacancyRate: '',
    vacancyRateHandleInputChange: (value: string) => undefined,
  }

  public calculateWhatToOffer = () => {
    const {
      capRate,
      expenseRate,
      rent,
      vacancyRate,
    } = this.props;

    if (capRate === '' || expenseRate === ''
      || rent === '' || vacancyRate === ''
    ) {
      return 'Please fill out all fields';
    }

    const capRateNum = Number(capRate)
    const expenseRateNum = Number(expenseRate)
    const rentNum = Number(rent)
    const vacancyRateNum = Number(vacancyRate)

    const whatToOffer = (( (rentNum*(1-vacancyRateNum/100)) *(1-expenseRateNum/100))*12)/(capRateNum/100)
    const roundedToNearestCent = parseFloat(String((Math.round(whatToOffer * 100) / 100))).toFixed(2);

    return roundedToNearestCent;
  }

  public render() {
    const preformattedWTO = this.calculateWhatToOffer()
    const whatToOffer = preformattedWTO ? String(preformattedWTO) : ''

    return (
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
        <CardContent>
          <Content>
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
                  handleChange: this.props.rentHandleInputChange,
                  placeholder: "Rent",
                  value: this.props.rent,
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
                  handleChange: this.props.vacancyRateHandleInputChange,
                  placeholder: "Vacancy Rate",
                  value: this.props.vacancyRate,
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
                  handleChange: this.props.expenseRateHandleInputChange,
                  placeholder: "Expenses Rate",
                  value: this.props.expenseRate,
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
                  handleChange: this.props.capRateHandleInputChange,
                  placeholder: "Cap Rate",
                  value: this.props.capRate,
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
                    isReadonly: true,
                    placeholder: "What To Offer",
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
          </Content>
        </CardContent>

        <CardFooter>
          <div className="content card-footer-item">Note: Use for ballparking.</div>
        </CardFooter>
      </Card>
    )
  }
}


export default QuickAndDirtyCapRate
