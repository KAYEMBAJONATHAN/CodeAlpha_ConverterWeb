import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  temperature: '',
  unit: 'celsius',
};

const temperatureSlice = createSlice({
  name: 'temperature',
  initialState,
  reducers: {
    setTemperature: (state, action) => {
      state.temperature = action.payload;
    },
    setUnit: (state, action) => {
      state.unit = action.payload;
    },
  },
});

export const { setTemperature, setUnit } = temperatureSlice.actions;

export default temperatureSlice.reducer;
