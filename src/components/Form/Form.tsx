import React, { ChangeEvent, FormEvent, useState } from "react";

/*Types */
import { IInvestment, IInvestmentForm } from "../../global/utils/Types";

/*Styles */
import './Form.style.scss';


const INITIAL_INPUT_DATA = {
    currentSavings: 0,
    yearlySavings: 0,
    expectedInterest: 0,
    investmentDuration: 0,
}

const Form = ({ onSaveInvestmentData }: IInvestmentForm) => {
    const [userInput, setUserInput] = useState<IInvestment>(INITIAL_INPUT_DATA)
    const [isValid, setIsValid] = useState(true);

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        const hasInvalidNumber = Object.values(userInput).some(value => value <= 0 || value === '');

        if (hasInvalidNumber) {
            setIsValid(false);
            return;
        }

        onSaveInvestmentData(userInput);

        setIsValid(true);
        setUserInput(INITIAL_INPUT_DATA);
    }

    const clickResetHandler = () => {
        setUserInput(INITIAL_INPUT_DATA);
    }

    const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setUserInput(prevState => ({ ...prevState, [name]: +value }));
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <div className="form-controls">
                    <input
                        name="currentSavings"
                        type="number"
                        value={userInput.currentSavings}
                        onChange={inputChangeHandler}
                    />
                    <label className="form-label"><span>Current Savings</span></label>
                </div>
                <div className="form-controls">
                    <input
                        name="yearlySavings"
                        type="number"
                        value={userInput.yearlySavings}
                        onChange={inputChangeHandler}
                    />
                    <label className="form-label"><span>Yearly Savings</span></label>
                </div>
            </div>
            <div className="form-group">
                <div className="form-controls">
                    <input
                        name="expectedInterest"
                        type="number"
                        value={userInput.expectedInterest}
                        onChange={inputChangeHandler}
                    />
                    <label className="form-label"><span>Expected Interest (%, per year)</span></label>
                </div>
                <div className="form-controls">
                    <input
                        name="investmentDuration"
                        type="number"
                        value={userInput.investmentDuration}
                        onChange={inputChangeHandler}
                    />
                    <label className="form-label"><span>Investment Duration (years)</span></label>
                </div>
            </div>
            <div className="form-actions">
                <button type="reset" className="form-button" onClick={clickResetHandler}>
                    Reset
                </button>
                <button type="submit" className="form-button primary">
                    Calculate
                </button>
            </div>
            {!isValid && (
                <div className="form-error">
                    <p>Please fill out all fields correctly</p>
                </div>
            )}
        </form>
    )
}

export default Form;