import { configureStore } from '@reduxjs/toolkit';
import { camperReducer } from './campers/slice';

export const store = configureStore({
  reducer: { campers: camperReducer },
});
