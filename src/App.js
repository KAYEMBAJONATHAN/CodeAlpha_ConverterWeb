import React, { useState } from 'react';
import Temperature from './Components/Temperature';
import ConversionLogic from './Components/ConversionLogic';
import ResultDisplay from './Components/ResultDisplay';

function App() {
  const [convertedTemperature, setConvertedTemperature] = useState('');
  const [temperature, setTemperature] = useState('');
  const [unit, setUnit] = useState('celsius');

  const handleConversion = (temp, selectedUnit) => {
    let result = temp; 

    setTemperature(temp);
    setUnit(selectedUnit);
    setConvertedTemperature(result);
  };
  return (
    <div className="App">
      <h1>Temperature Converter</h1>
      <Temperature
        onConvert={(temp, selectedUnit) => handleConversion(temp, selectedUnit)}
      />
      <ConversionLogic />
      <ResultDisplay temperature={convertedTemperature} />
    </div>
  );
}

export default App;
