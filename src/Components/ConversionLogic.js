import React, { useState } from 'react';

const ConversionLogic = ({ temperature, unit, onConversion }) => {
  const [result, setResult] = useState('');

  // Function to convert Celsius to Fahrenheit
  const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  // Function to convert Fahrenheit to Celsius
  const fahrenheitToCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
  };

  // Function to handle the conversion
  const handleConvert = () => {
    let convertedTemperature = '';

    if (unit === 'celsius') {
      // Convert Celsius to Fahrenheit
      convertedTemperature = celsiusToFahrenheit(temperature);
    } else if (unit === 'fahrenheit') {
      // Convert Fahrenheit to Celsius
      convertedTemperature = fahrenheitToCelsius(temperature);
    }

    // Update the result state
    setResult(convertedTemperature);

    // Call the parent component's callback with the result
    onConversion(convertedTemperature);
  };

  return (
    <div>
      <button onClick={handleConvert}>Convert</button>
    </div>
  );
}

export default ConversionLogic;
