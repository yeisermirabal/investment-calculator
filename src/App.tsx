import React from 'react';

/**Components */
import Header from './components/UI/Header';
import Form from './components/Form';
import InvestmentList from './components/Investment/InvestmentList';

/*Styles */
import './App.style.scss';


function App() {

  return (
    <div className="body-wrapper">
      <Header />
      <Form />
      <InvestmentList />
    </div>
  );
}

export default App;
