import React, { useState } from 'react';

const ConversionLogic = ({ temperature, unit, onConversion }) => {
  const [result, setResult] = useState('');

  const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  const fahrenheitToCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
  };

  const handleConvert = () => {
    let convertedTemperature = '';

    if (unit === 'celsius') {
      convertedTemperature = celsiusToFahrenheit(temperature);
    } else if (unit === 'fahrenheit') {
      convertedTemperature = fahrenheitToCelsius(temperature);
    }

    setResult(convertedTemperature, result);

    onConversion(convertedTemperature);
  };

  console.log(result)

  return (
    <div>
      <button onClick={handleConvert}>Convert</button>
    </div>
  );
}

export default ConversionLogic;
