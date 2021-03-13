//vendor
import React from 'react'
//globalVariables
import { typesOfTemperatures } from '../globalVariables/typesOfTemperatures';
const {temperature1, temperature2} = typesOfTemperatures

export const CalculatorOptions = ({ handLeOptionsChange }) => {
  return (
    <select onClick={ handLeOptionsChange }>
      <option value={ temperature1 }>Celsius to fahrenheits</option>
      <option value={ temperature2 }>Fahrenheits to celsius</option>
    </select>
  )
}
