import React, { useState } from 'react';
import Temperature from './Components/Temperature';

function App() {
 // const [convertedTemperature, setConvertedTemperature] = useState('');

  const handleConversion = (temperature, unit) => {
    // Implement the conversion logic based on the selected unit
    // Update 'convertedTemperature' state with the result
  };

  return (
    <div className="App">
      <h1>Temperature Converter</h1>
      <Temperature onConvert={handleConversion} />
    </div>
  );
}

export default App;
