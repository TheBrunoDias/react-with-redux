import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SearchReducer = {
  updateSearch: (state: string, action: PayloadAction<string>) => string;
  resetSearch: () => string;
};

const initialState = '';

const searchSlice = createSlice<string, SearchReducer, 'search'>({
  name: 'search',
  initialState,
  reducers: {
    updateSearch: (_state, action) => action.payload,
    resetSearch: () => initialState,
  },
});

export const { resetSearch, updateSearch } = searchSlice.actions;

export default searchSlice.reducer;
