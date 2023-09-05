import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTemperature, setUnit } from '../Redux/Slice/temperatureSlice';
import '../Style/temperature.css';

const Temperature = () => {
  const temperature = useSelector((state) => state.temperature.temperature);
  const unit = useSelector((state) => state.temperature.unit);
  const dispatch = useDispatch();

  const handleTemperatureChange = (e) => {
    const newTemperature = e.target.value;
    dispatch(setTemperature(newTemperature));
  };

  const handleUnitChange = (e) => {
    const newUnit = e.target.value;
    dispatch(setUnit(newUnit));
  };

  const handleConvert = () => {
      let convertedTemperature = temperature;
    
      if (unit === 'celsius') {
        // Convert Celsius to Fahrenheit
        convertedTemperature = (temperature * 9) / 5 + 32;
      } else if (unit === 'fahrenheit') {
        // Convert Fahrenheit to Celsius
        convertedTemperature = ((temperature - 32) * 5) / 9;
      }
    
      // Update the state with the converted temperature
      dispatch(setTemperature(convertedTemperature));
  };

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
        {/* Add more temperature units as needed */}
      </select>
      <button onClick={handleConvert}>Convert</button>
    </div>
  );
};

export default Temperature;
