//vendor
import React from 'react';
//styles
import '../../styles/calculatorButtons.scss'
//propTypes
import PropTypes from 'prop-types'

export const CalculatorButtons = ({ value, handLeButtonPress }) => {
  return (
      <button 
      className="calculatorButtons"
      onClick={ handLeButtonPress }
      value={ value }
      > 
      { value }
      </button>
  )
}

CalculatorButtons.propTypes = {
  handLeButtonPress: PropTypes.func.isRequired,
}

