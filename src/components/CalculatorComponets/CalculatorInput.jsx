//vendor
import React from 'react';

export const CalculatorInput = ({ inputState, handLeInputChange }) => {
    return (
        <input
            value={ inputState }
            type="text"
            onChange={ handLeInputChange }
        >
        </input>
    )
}
