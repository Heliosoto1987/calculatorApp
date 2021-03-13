//vendor
import React from 'react';

export const CalculatorButtons = ({ valueNumber, handLeButtonPress }) => {
  return (
      <button 
      onClick={ handLeButtonPress }
      value={ valueNumber }
      > 
      { valueNumber }
      </button>
  )
}
