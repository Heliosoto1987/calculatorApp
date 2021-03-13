//vendor
import React, { useEffect, useState } from 'react';
//componets
import { CalculatorInput } from './CalculatorComponets/CalculatorInput';
import { CalculatorButtons } from './CalculatorComponets/CalculatorButtons';
import { CalculatorOptions } from './CalculatorComponets/CalculatorOptions';
//utils
import { celsiusToFahrenheit, fahrenheitToCelsius } from '../funtions/utils'
//styles
import '../styles/calculatorScreen.scss';

const arrayButtons = [1,2,3,4,5,6,7,8,9,0];

export const CalculatorScreen = () => {
  const [inputState, setInputState] = useState(0);
  const [initialTemp, setInitialTemp] = useState('celsius');
  const [result, setResult] = useState(0)

  useEffect(() => {
    if (initialTemp === 'celsius' ){
    setResult(celsiusToFahrenheit( inputState ))
    }else{
    setResult(fahrenheitToCelsius( inputState ))
    }
  }, [initialTemp, inputState])

    const handLeButtonPress = ({ target }) => {
      setInputState(inputState + target.value)
    }
    const handLeOptionsChange = ({ target }) => {
      setInitialTemp(target.value)
    }
    const handLeInputChange = ({ target }) => {
      setInputState((target.value));
    }
    if(result === 'NaN'){
      setResult('cannot be calculated')
    }
  return (
    <main className="calculator">
      <div className="calculator__container">
        <h1 className="container__title">Temperature Calculator App</h1>  
          <div className="container__size">
            <CalculatorInput
              inputState={ inputState }
              setInputState={ setInputState }
              handLeInputChange={ handLeInputChange }
            />
            <CalculatorOptions
            handLeOptionsChange={ handLeOptionsChange }
            />
            <div className="calculatorPrint__result">{ result }</div>
          </div>
            <div className="container__buttons">
              {   
              arrayButtons.map( i => 
              <CalculatorButtons
              handLeButtonPress={ handLeButtonPress } 
              valueNumber={ i + 0 }
              key={ i + 0} />)
              //using index to place the key as these sticks will be static //
              }
            </div>
      </div>
    </main>
  )
}


