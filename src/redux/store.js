import { configureStore } from '@reduxjs/toolkit';
import { camperReducer } from './campers/slice';
import { favoritesReducer } from './favorites/slice';

export const store = configureStore({
  reducer: { campers: camperReducer, favorites: favoritesReducer },
});
