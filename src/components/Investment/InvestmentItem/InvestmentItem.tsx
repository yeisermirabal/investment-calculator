import React from "react";

/**Helpers */
import { usdFormatter } from "../../../global/utils/Helpers";

/**Types */
import { InvestmentItemProps } from "../../../global/utils/Types";

/*Style */
import './InvestmentItem.style.scss'

const InvestmentItem = ({ data, initialInvestment }: InvestmentItemProps) => {
    const { year, savingsEndOfYear, yearlyInterest, yearlyContribution } = data;

    if (initialInvestment === undefined) {
        return null;
    }

    const totalInterestGained = savingsEndOfYear - initialInvestment - (yearlyContribution * year)
    const totalInvestedCapital = initialInvestment + (yearlyContribution * year)

    return (
        <tr>
            <td>{year}</td>
            <td>{usdFormatter.format(savingsEndOfYear)}</td>
            <td>{usdFormatter.format(yearlyInterest)}</td>
            <td>{usdFormatter.format(totalInterestGained)}</td>
            <td>{usdFormatter.format(totalInvestedCapital)}</td>
        </tr>
    )
}

export default InvestmentItem