export const fahrenheitToCelsius = (unit) => {
    const fahrenheitToC = (unit - 32) * 5/9 
    return fahrenheitToC.toFixed(1);
} 

export const celsiusToFahrenheit = (unit) => {
    const celsiusToF = (unit * 9/5) + 32 
    return celsiusToF.toFixed(1);
  }
  


