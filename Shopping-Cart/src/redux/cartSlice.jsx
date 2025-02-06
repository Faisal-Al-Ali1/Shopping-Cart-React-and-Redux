import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  status: 'idle', 
  error: null,
};

// Cart Slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.status = 'succeeded';
    },
    setLoading: (state) => {
      state.status = 'loading';
    },
    setError: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cart.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }
    },
  },
});

export const { setProducts, setLoading, setError, addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
