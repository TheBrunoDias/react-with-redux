import { CategoryProps, categories } from './../../mocks/categories';
import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice<CategoryProps[], {}, 'categories'>({
  name: 'categories',
  initialState: categories,
  reducers: {},
});

export default categoriesSlice.reducer;
