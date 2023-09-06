import { configureStore } from '@reduxjs/toolkit';
import temperatureReducer from '../Redux/Slice/temperatureSlice';

const store = configureStore({
  reducer: {
    temperature: temperatureReducer,
  },
});

export default store;