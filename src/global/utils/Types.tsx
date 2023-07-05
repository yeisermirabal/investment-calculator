export interface IInvestment {
    currentSavings: number
    yearlySavings: number
    expectedInterest: number
    investmentDuration: number
}

export interface IInvestmentForm {
    onSaveInvestmentData: (investmentItem: IInvestment) => void
}

export interface IInvestmentCalculated {
    year: number
    yearlyInterest: number
    savingsEndOfYear: number
    yearlyContribution: number
}

export interface InvestmentListProps {
    items: IInvestmentCalculated[]
    initialInvestment?: number
}

export interface InvestmentItemProps {
    data: IInvestmentCalculated;
    initialInvestment?: number
}
