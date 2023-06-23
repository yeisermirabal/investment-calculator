import React from "react";

/*Styles */
import './Form.style.scss';


const Form = () => {
    const submitHandler = () => {
        console.log('Submit')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <div className="form-controls">
                    <input type="number" placeholder="Current Savings" />
                </div>
                <div className="form-controls">
                    <input type="number" placeholder="Yearly Savings" />
                </div>
            </div>
            <div className="form-group">
                <div className="form-controls">
                    <input type="number" placeholder="Expected Interest (%, per year)" />
                </div>
                <div className="form-controls">
                    <input type="number" placeholder="Investment Duration (years)" />
                </div>
            </div>
            <div className="form-actions">
                <button type="reset" className="form-button">
                    Reset
                </button>
                <button type="submit" className="form-button primary">
                    Calculate
                </button>
            </div>
        </form>
    )
}

export default Form;