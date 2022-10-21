import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartProps } from '../../mocks/cart';
import { ItemProps } from '../../mocks/items';

type CartReducers = {
  addProductToCard: (state: CartProps[], action: PayloadAction<ItemProps>) => CartProps[];
  removeProductFromCart: (state: CartProps[], action: PayloadAction<string>) => CartProps[];
  clearCart: () => [];
};

const cartSlice = createSlice<CartProps[], CartReducers, 'cart'>({
  name: 'cart',
  initialState: [],
  reducers: {
    addProductToCard: (state, action) => {
      const productInCart = state.findIndex((i) => i.item.id === action.payload.id);

      if (productInCart === -1) {
        state.push({
          item: action.payload,
          quantity: 1,
        });
      } else {
        state[productInCart].quantity = ++state[productInCart].quantity;
      }

      return state;
    },
    removeProductFromCart: (state, action) => {
      const productInCart = state.findIndex((i) => i.item.id === action.payload);

      if (productInCart === -1) return state;

      const cartItem = state[productInCart];

      if (cartItem.quantity === 1) {
        state = state.filter((i) => i !== cartItem);
      } else {
        state[productInCart].quantity = --state[productInCart].quantity;
      }

      return state;
    },
    clearCart: () => [],
  },
});

export const { addProductToCard, removeProductFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
