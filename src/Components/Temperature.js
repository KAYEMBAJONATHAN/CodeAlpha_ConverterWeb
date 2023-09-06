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
        convertedTemperature = {
          celsius: temperature,
          fahrenheit: (temperature * 9) / 5 + 32,
          kelvin: temperature + 273.15,
          rankine: (temperature + 273.15) * 9 / 5,
          delisle: (100 - temperature) * 3 / 2,
          réaumur: temperature * 4 / 5,
          rømer: (temperature * 21 / 40) + 7.5,
        };
        break;
      case 'fahrenheit':
        convertedTemperature = {
          celsius: ((temperature - 32) * 5) / 9,
          fahrenheit: temperature,
          kelvin: ((temperature - 32) * 5) / 9 + 273.15,
          rankine: temperature + 459.67,
          delisle: (212 - temperature) * 5 / 6,
          réaumur: ((temperature - 32) * 4) / 9,
          rømer: ((temperature - 32) * 7) / 24 + 7.5,
        };
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
