import React, { useState } from 'react';
import '../Style/temperature.css';

const Temperature = ({ onConvert }) => {
  const [temperature, setTemperature] = useState('');
  const [unit, setUnit] = useState('celsius');

  const handleTemperatureChange = (e) => {
    setTemperature(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const handleConvert = () => {
    onConvert(temperature, unit);
  };

  //console.log(temperature, unit)

  return (
    <div>
      <input
        type="number"
        placeholder="Enter temperature"
        value={temperature}
        onChange={handleTemperatureChange}
      />
      <select value={unit} onChange={handleUnitChange}>
        <option value="celsius">Celsius</option>
        <option value="fahrenheit">Fahrenheit</option>
        <option value="kelvin">Kelvin</option>
        <option value="rankine">Rankine</option>
      </select>
      <button onClick={handleConvert}>Convert</button>
    </div>
  );
};

export default Temperature;
