//vendor
import React from "react";
//styles
import "../../styles/calculatorButtons.scss";
//propTypes
import PropTypes from "prop-types";

export const CalculatorButtons = ({ value, handleButtonPress }) => {
  return (
    <button
      className="calculatorButtons"
      onClick={handleButtonPress}
      value={value}
    >
      {value}
    </button>
  );
};

CalculatorButtons.propTypes = {
  handleButtonPress: PropTypes.func.isRequired,
};
