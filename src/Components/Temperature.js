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
  
    switch (unit) {
      case 'celsius':
        convertedTemperature = (temperature * 9) / 5 + 32;
        break;
      case 'fahrenheit':
        convertedTemperature = ((temperature - 32) * 5) / 9;
        break;
      case 'kelvin':
        convertedTemperature = temperature - 273.15;
        break;
      case 'rankine':
        convertedTemperature = ((temperature - 491.67) * 5) / 9;
        break;
      case 'delisle':
        convertedTemperature = 100 - (temperature * 2) / 3;
        break;
      case 'réaumur':
        convertedTemperature = (temperature * 5) / 4;
        break;
      case 'rømer':
        convertedTemperature = ((temperature - 7.5) * 40) / 21;
        break;
      default:
        break;
    }
  
    console.log(convertedTemperature);
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
        <option value="delisle">Delisle</option>
        <option value="réaumur">Réaumur</option>
        <option value="rømer">Rømer</option>
      </select>
      <button onClick={handleConvert}>Convert</button>
    </div>
  );
};

export default Temperature;
