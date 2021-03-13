//vendor
import React from 'react';

export const CalculatorInput = ({ counter, handLeInputChange, setCounter }) => {
    return (
        <input
            value={ counter }
            type="text"
            onChange={ handLeInputChange }
        >
        </input>
    )
}
