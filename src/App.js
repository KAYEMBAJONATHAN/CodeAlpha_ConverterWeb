import React, { useState } from 'react';
import Temperature from './Components/Temperature';
import ConversionLogic from './Components/ConversionLogic';
import ResultDisplay from './Components/ResultDisplay';

function App() {
  const [convertedTemperature, setConvertedTemperature] = useState('');
  const [temperature, setTemperature] = useState('');
  const [unit, setUnit] = useState('celsius');
  const [result, setResult] = useState('');

  const handleConversion = (temp, selectedUnit) => {
    let convertedTemp = temp; 

    setTemperature(temp);
    setUnit(selectedUnit);
    setConvertedTemperature(convertedTemp);
  };

  return (
    <div className="App">
      <h1>Temperature Converter</h1>
      <Temperature
        onConvert={(temp, selectedUnit) => handleConversion(temp, selectedUnit)}
      />
      <ConversionLogic 
       temperature={temperature}
       unit={unit}
       onConversion={(convertedTemperature) => setResult(convertedTemperature)}
      />
      <ResultDisplay 
      temperature={convertedTemperature}
      unit={unit}
      originalTemperature={temperature}
      result={result}
      />
    </div>
  );
}

export default App;
