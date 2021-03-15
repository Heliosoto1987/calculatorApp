//vendor
import React, { useEffect, useState } from "react";
//componets
import { CalculatorInput } from "./CalculatorComponets/CalculatorInput";
import { CalculatorButtons } from "./CalculatorComponets/CalculatorButtons";
import { CalculatorOptions } from "./CalculatorComponets/CalculatorOptions";
//utils
import { celsiusToFahrenheit, fahrenheitToCelsius } from "../utils/utils";
//styles
import "../styles/calculatorScreen.scss";
//globalVariables
import { typesOfTemperatures } from "../globalVariables/typesOfTemperatures";
const arrayButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export const CalculatorScreen = () => {
  const { temperature1 } = typesOfTemperatures;
  const [inputState, setInputState] = useState("");
  const [initialTemp, setInitialTemp] = useState(temperature1);
  const [result, setResult] = useState(0);

  useEffect(() => {
    if (initialTemp === temperature1) {
      setResult(celsiusToFahrenheit(inputState));
    } else {
      setResult(fahrenheitToCelsius(inputState));
    }
  }, [initialTemp, inputState, temperature1]);

  useEffect(() => {
    if (result === "NaN") {
      setResult("Cannot be calculated");
    }
  }, [result]);

  const handleButtonPress = ({ target: { value } }) => {
    setInputState((inputState) => inputState + value);
  };
  const handleOptionsChange = ({ target: { value } }) => {
    setInitialTemp(value);
  };
  const handleInputChange = ({ target: { value } }) => {
    setInputState(value);
  };

  return (
    <main className="calculator">
      <div className="calculator__container">
        <h2 className="container__title">Temperature Calculator App</h2>
        <div className="container__size">
          <CalculatorInput
            inputState={inputState}
            setInputState={setInputState}
            handleInputChange={handleInputChange}
          />
          <CalculatorOptions handleOptionsChange={handleOptionsChange} />
          <div className="calculatorPrint__result">{result}</div>
        </div>
        <div className="container__buttons">
          {arrayButtons.map((buttonValue) => (
            <CalculatorButtons
              handleButtonPress={handleButtonPress}
              value={buttonValue}
              key={`button${buttonValue}`}
            />
          ))}
          <CalculatorButtons
            handleButtonPress={() => setInputState("")}
            value={"C"}
          />
          <CalculatorButtons
            handleButtonPress={handleButtonPress}
            value={"."}
          />
        </div>
      </div>
    </main>
  );
};
