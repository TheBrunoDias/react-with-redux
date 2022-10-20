import { createSlice } from '@reduxjs/toolkit';
import { ItemProps, items } from '../../mocks/items';
const itemsSlice = createSlice<ItemProps[], any, 'items'>({
  name: 'items',
  initialState: items,
  reducers: {},
});

export default itemsSlice.reducer;
