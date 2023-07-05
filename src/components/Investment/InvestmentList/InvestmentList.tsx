import React from "react";

/**Components */
import InvestmentItem from "../InvestmentItem";

/**Types */
import { IInvestmentCalculated, InvestmentListProps } from "../../../global/utils/Types";

/*Styles */
import './InvestmentList.style.scss'



const InvestmentList = ({ items, initialInvestment }: InvestmentListProps) => {

    if (!items.length) {
        return <div className="investment-list--empty">No investment calculated yet.</div>;
    }

    return (
        <div className="investment-list--container">
            <div className="investment-list--wrapper">
                <table className="investment-list">
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Total Savings</th>
                            <th>Interest</th>
                            <th>Total Interest</th>
                            <th>Invested Capital</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item: IInvestmentCalculated, index) => {
                            return (
                                <InvestmentItem key={index} data={item} initialInvestment={initialInvestment} />
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default InvestmentList;