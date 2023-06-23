import React from "react";

/*Styles */
import './InvestmentList.style.scss'

const InvestmentList = () => {
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
                        <tr>
                            <td>$10000</td>
                            <td>$10000</td>
                            <td>$10000</td>
                            <td>$10000</td>
                            <td>$10000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default InvestmentList;