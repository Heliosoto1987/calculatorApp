//vendor
import React from 'react';
//PropTypes
import PropTypes from 'prop-types';

export const CalculatorInput = ({ inputState, handLeInputChange }) => {
    return (
        <input
        value={ inputState }
        type="text"
        onChange={ handLeInputChange }
        className="calculatorInput"
        >
        </input>
    )
}

CalculatorInput.propTypes = {
    handLeInputChange: PropTypes.func.isRequired,
    inputState: PropTypes.string.isRequired,
  }
  
