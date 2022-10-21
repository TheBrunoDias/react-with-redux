import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ItemProps, items } from '../../mocks/items';

type ItemsReducers = {
  handleFavorites: (state: ItemProps[], action: PayloadAction<string>) => void;
};

const itemsSlice = createSlice<ItemProps[], ItemsReducers, 'items'>({
  name: 'items',
  initialState: items,
  reducers: {
    handleFavorites: (state: ItemProps[], action: PayloadAction<string>) => {
      state = state.map((i) => {
        if (i.id === action.payload) i.favorito = !i.favorito;
        return i;
      });
    },
  },
});

export const { handleFavorites } = itemsSlice.actions;

export default itemsSlice.reducer;
