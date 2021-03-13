export const fahrenheitToCelsius = (unit) => {
    let fahrenheitToC; 
    if(unit === ''){
    fahrenheitToC = 'No values'
    }else{
    fahrenheitToC = ((unit - 32) * 5/9 ).toFixed(1);
    }
    return fahrenheitToC
} 

export const celsiusToFahrenheit = (unit) => {
    let celsiusToF;
    if(unit === ''){
    celsiusToF = 'No values'
    }else{
    celsiusToF = ((unit * 9/5) + 32).toFixed(1);
    }
    return celsiusToF
  }


  


