//vendor
import React from 'react';
//styles
import '../../styles/buttons.scss'

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
