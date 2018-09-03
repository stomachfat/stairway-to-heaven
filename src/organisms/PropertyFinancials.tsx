import Finance from "financejs";
import { filter } from "lodash";
import { Component } from "react";
import * as React from "react";
import Column from "../atoms/Column";
import Columns from "../atoms/Columns";
import Container from "../atoms/Container";
import Section from "../atoms/Section";
import MonthlyExpenses from "../organisms/MonthlyExpenses";
import PurchaseFinancing from "../organisms/PurchaseFinancing";
import QuickAndDirtyCapRate from "../organisms/QuickAndDirtyCapRate";
import Yields from "../organisms/Yields";
const finance = new Finance();

class PropertyFinancials extends Component {
  public state = {
    amortizationPeriodInYears: "",
    askingPrice: "",
    capRate: "",
    capitalExpenditures: "",
    cashOnCashReturnBeforeTaxes: "",
    closingCosts: "",
    downPayment: "",
    electric: "",
    expenseRate: "",
    fairMarketValue: "",
    gas: "",
    insurance: "",
    interestRate: "",
    maintenance: "",
    management: "",
    miscellaneousExpenses: "",
    offerPrice: "",
    rent: "",
    repairCosts: "",
    taxes: "",
    vacancy: "",
    vacancyRate: "",
    water: ""
  };

  public calculateLoanAmount = () => {
    const { offerPrice, downPayment } = this.state;

    if (offerPrice === "" || downPayment === "") {
      // default to placeholder
      return undefined;
    }

    const offerPriceNum = Number(offerPrice);
    const downPaymentNum = Number(downPayment);

    const loanAmount = offerPriceNum - downPaymentNum;

    return loanAmount;
  };

  public calculateMonthlyPrincipalAndInterest = () => {
    const {
      amortizationPeriodInYears,
      interestRate,
      offerPrice,
      downPayment
    } = this.state;

    if (
      amortizationPeriodInYears === "" ||
      interestRate === "" ||
      offerPrice === "" ||
      downPayment === ""
    ) {
      // default to placeholder
      return undefined;
    }

    const interestRateNum = Number(interestRate);
    const amortizationPeriodInYearsNum = Number(amortizationPeriodInYears);

    const loanAmount = this.calculateLoanAmount();

    return finance.AM(
      loanAmount,
      interestRateNum,
      amortizationPeriodInYearsNum * 12,
      1
    );
  };

  public calculateOutOfPocketCosts = () => {
    const { closingCosts, downPayment } = this.state;

    if (closingCosts === "" || downPayment === "") {
      // default to placeholder
      return undefined;
    }

    const closingCostsNum = Number(closingCosts);
    const downPaymentNum = Number(downPayment);

    return downPaymentNum + closingCostsNum;
  };

  public calculateAllInCost = () => {
    const { closingCosts, downPayment, repairCosts } = this.state;

    if (closingCosts === "" || downPayment === "" || repairCosts === "") {
      // default to placeholder
      return undefined;
    }

    const repairCostsNum = Number(repairCosts);
    const outOfPocketCostsNum = this.calculateOutOfPocketCosts() || 0;

    return outOfPocketCostsNum + repairCostsNum;
  };

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
    } = this.state;

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

  public calculateCashOnCashReturnBeforeTaxesMonthly = () => {
    const { downPayment, rent } = this.state;

    const preformattedMPAI = this.calculateMonthlyPrincipalAndInterest();

    if (!downPayment || !rent || !preformattedMPAI) {
      return undefined;
    }

    const totalCashFlowMonthly =
      Number(rent) -
      (Number(this.calculateTotalOperatingExpenses()) + preformattedMPAI);

    const calculateCashOnCashReturnBeforeTaxesMonthly =
      totalCashFlowMonthly / Number(this.state.downPayment);

    return calculateCashOnCashReturnBeforeTaxesMonthly * 100;
  };

  public calculateCashOnCashReturnBeforeTaxesYearly = () => {
    const monthly = this.calculateCashOnCashReturnBeforeTaxesMonthly();

    if (typeof monthly === "number") {
      return monthly * 12;
    }

    return undefined;
  };

  public calculateCapitalRateOfReturn = () => {
    const { downPayment, rent } = this.state;
    const allInCost = this.calculateAllInCost();

    if (!downPayment || !rent || !allInCost) {
      return undefined;
    }

    const totalCashFlowMonthly =
      Number(rent) - Number(this.calculateTotalOperatingExpenses());

    const calculateCashOnCashReturnBeforeTaxesMonthly =
      totalCashFlowMonthly / allInCost;

    return calculateCashOnCashReturnBeforeTaxesMonthly * 12 * 100;
  };

  public handleInputChange = (field: string) => (value: string) => {
    this.setState({
      [field]: value
    });
  };

  public render() {
    const preformattedMPAI = this.calculateMonthlyPrincipalAndInterest();
    const monthlyPrincipalAndInterest = preformattedMPAI
      ? String(preformattedMPAI)
      : "";

    const preformattedLA = this.calculateLoanAmount();
    const loanAmount = preformattedLA ? String(preformattedLA) : "";

    const preformattedAIC = this.calculateAllInCost();
    const allInCost = preformattedAIC ? String(preformattedAIC) : "";

    const preformattedOOPC = this.calculateOutOfPocketCosts();
    const outOfPocketCost = preformattedOOPC ? String(preformattedOOPC) : "";

    return (
      <Section>
        <Section>
          <Container>
            <Columns>
              <Column className="">
                <QuickAndDirtyCapRate
                  capRate={this.state.capRate}
                  capRateHandleInputChange={this.handleInputChange("capRate")}
                  expenseRate={this.state.expenseRate}
                  expenseRateHandleInputChange={this.handleInputChange(
                    "expenseRate"
                  )}
                  rent={this.state.rent}
                  rentHandleInputChange={this.handleInputChange("rent")}
                  vacancyRate={this.state.vacancyRate}
                  vacancyRateHandleInputChange={this.handleInputChange(
                    "vacancyRate"
                  )}
                />
              </Column>
            </Columns>
          </Container>
        </Section>
        <Section>
          <Container>
            <Columns>
              <Column className="is-half-desktop">
                <PurchaseFinancing
                  allInCost={allInCost}
                  askingPrice={this.state.askingPrice}
                  askingPriceHandleInputChange={this.handleInputChange(
                    "askingPrice"
                  )}
                  amortizationPeriodInYears={
                    this.state.amortizationPeriodInYears
                  }
                  amortizationPeriodInYearsHandleInputChange={this.handleInputChange(
                    "amortizationPeriodInYears"
                  )}
                  closingCosts={this.state.closingCosts}
                  closingCostsHandleInputChange={this.handleInputChange(
                    "closingCosts"
                  )}
                  downPayment={this.state.downPayment}
                  downPaymentHandleInputChange={this.handleInputChange(
                    "downPayment"
                  )}
                  fairMarketValue={this.state.fairMarketValue}
                  fairMarketValueHandleInputChange={this.handleInputChange(
                    "fairMarketValue"
                  )}
                  interestRate={this.state.interestRate}
                  interestRateHandleInputChange={this.handleInputChange(
                    "interestRate"
                  )}
                  loanAmount={loanAmount}
                  offerPrice={this.state.offerPrice}
                  offerPriceHandleInputChange={this.handleInputChange(
                    "offerPrice"
                  )}
                  outOfPocketCost={outOfPocketCost}
                  repairCosts={this.state.repairCosts}
                  repairCostsHandleInputChange={this.handleInputChange(
                    "repairCosts"
                  )}
                  monthlyPrincipalAndInterest={monthlyPrincipalAndInterest}
                />
              </Column>
              <Column className="is-half-desktop">
                <MonthlyExpenses
                  allInCost={allInCost}
                  capitalExpenditures={this.state.capitalExpenditures}
                  capitalExpendituresHandleInputChange={this.handleInputChange(
                    "capitalExpenditures"
                  )}
                  amortizationPeriodInYears={
                    this.state.amortizationPeriodInYears
                  }
                  amortizationPeriodInYearsHandleInputChange={this.handleInputChange(
                    "amortizationPeriodInYears"
                  )}
                  electric={this.state.electric}
                  electricHandleInputChange={this.handleInputChange("electric")}
                  gas={this.state.gas}
                  gasHandleInputChange={this.handleInputChange("gas")}
                  insurance={this.state.insurance}
                  insuranceHandleInputChange={this.handleInputChange(
                    "insurance"
                  )}
                  management={this.state.management}
                  managementHandleInputChange={this.handleInputChange(
                    "management"
                  )}
                  loanAmount={loanAmount}
                  maintenance={this.state.maintenance}
                  maintenanceHandleInputChange={this.handleInputChange(
                    "maintenance"
                  )}
                  miscellaneousExpenses={this.state.miscellaneousExpenses}
                  miscellaneousExpensesHandleInputChange={this.handleInputChange(
                    "miscellaneousExpenses"
                  )}
                  outOfPocketCost={outOfPocketCost}
                  rent={this.state.rent}
                  taxes={this.state.taxes}
                  taxesHandleInputChange={this.handleInputChange("taxes")}
                  totalOperatingExpenses={this.calculateTotalOperatingExpenses()}
                  vacancy={this.state.vacancy}
                  vacancyHandleInputChange={this.handleInputChange("vacancy")}
                  water={this.state.water}
                  waterHandleInputChange={this.handleInputChange("water")}
                  monthlyPrincipalAndInterest={monthlyPrincipalAndInterest}
                />
              </Column>
            </Columns>
          </Container>
        </Section>
        <Section>
          <Container>
            <Columns>
              <Column className="is-one-third-desktop">
                <Yields
                  cashOnCashReturnBeforeTaxesMonthly={this.calculateCashOnCashReturnBeforeTaxesMonthly()}
                  cashOnCashReturnBeforeTaxesYearly={this.calculateCashOnCashReturnBeforeTaxesYearly()}
                  capitalRateOfReturn={this.calculateCapitalRateOfReturn()}
                />
              </Column>
            </Columns>
          </Container>
        </Section>
      </Section>
    );
  }
}

export default PropertyFinancials;
