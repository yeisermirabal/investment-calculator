import React, { useEffect, useState } from 'react';

/**Components */
import Header from './components/UI/Header';
import Form from './components/Form';
import InvestmentList from './components/Investment/InvestmentList';

/**Types */
import { IInvestment, IInvestmentCalculated } from './global/utils/Types';

/*Styles */
import './App.style.scss';



function App() {
  const [userInputData, setUserInputData] = useState<IInvestment>()
  const [listData, setListData] = useState<IInvestmentCalculated[]>([])

  const submitHandler = (investmentItem: IInvestment) => {
    setUserInputData(investmentItem)
  }

  const calculateHandler = (userInput: IInvestment) => {
    const results = [];
    let currentSavings = +userInput.currentSavings;
    const yearlyContribution = +userInput.yearlySavings;
    const expectedReturn = +userInput.expectedInterest / 100;
    const duration = +userInput.investmentDuration;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;

      results.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution
      });

    }
    setListData(results);
  };

  useEffect(() => {
    if (userInputData) {
      calculateHandler(userInputData);
    }
  }, [userInputData])

  return (
    <div className="body-wrapper">
      <Header />
      <Form onSaveInvestmentData={submitHandler} />
      <InvestmentList items={listData} initialInvestment={userInputData?.currentSavings} />
    </div>
  );
}

export default App;
