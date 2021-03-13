//vendor
import React from "react";
//globalVariables
import { typesOfTemperatures } from "../../globalVariables/typesOfTemperatures";
//PropTypes
import PropTypes from "prop-types";

const { temperature1, temperature2 } = typesOfTemperatures;

export const CalculatorOptions = ({ handleOptionsChange }) => {
  return (
    <select className="calculatorOptions" onClick={handleOptionsChange}>
      <option value={temperature1}>Celsius to fahrenheits</option>
      <option value={temperature2}>Fahrenheits to celsius</option>
    </select>
  );
};

CalculatorOptions.propTypes = {
  handleOptionsChange: PropTypes.func.isRequired,
};
