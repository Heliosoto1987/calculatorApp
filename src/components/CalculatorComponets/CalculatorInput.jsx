//vendor
import React from "react";
//PropTypes
import PropTypes from "prop-types";

export const CalculatorInput = ({ inputState, handleInputChange }) => {
  return (
    <input
    value={inputState}
    type="text"
    onChange={handleInputChange}
    className="calculatorInput"
    />
  );
};

CalculatorInput.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  inputState: PropTypes.string.isRequired,
};
