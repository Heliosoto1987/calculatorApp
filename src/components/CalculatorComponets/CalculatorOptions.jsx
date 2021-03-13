//vendor
import React from 'react'
//styles
import '../../styles/options.scss'
const temperature1 = 'celsius'
const temperature2 = 'fahrenheits'

export const CalculatorOptions = ({ handLeOptionsChange }) => {
    return (
        <select
        onClick={ handLeOptionsChange }>
          <option value={ temperature1 }>celsius to fahrenheits</option>
          <option value={ temperature2 }>fahrenheits to celsius</option>
        </select>
    )
}
