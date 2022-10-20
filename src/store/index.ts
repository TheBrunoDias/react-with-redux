import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './reducers/categories';
import itemsSlice from './reducers/items';

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    items: itemsSlice,
  },
});

export type StoreState = ReturnType<typeof store.getState>;
