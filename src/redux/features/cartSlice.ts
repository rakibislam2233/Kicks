import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: number | string;
  color?: string;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<Omit<CartItem, "quantity"> & { quantity?: number }>,
    ) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) =>
          item.id === newItem.id &&
          item.size === newItem.size &&
          item.color === newItem.color,
      );

      const quantityToAdd = newItem.quantity || 1;

      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: quantityToAdd,
        });
      } else {
        existingItem.quantity += quantityToAdd;
      }

      state.totalQuantity += quantityToAdd;
      state.totalAmount += newItem.price * quantityToAdd;
    },
    removeFromCart: (
      state,
      action: PayloadAction<{
        id: string;
        size?: number | string;
        color?: string;
      }>,
    ) => {
      const { id, size, color } = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === id && item.size === size && item.color === color,
      );

      if (existingItemIndex !== -1) {
        const existingItem = state.items[existingItemIndex];
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.price * existingItem.quantity;
        state.items.splice(existingItemIndex, 1);
      }
    },
    updateQuantity: (
      state,
      action: PayloadAction<{
        id: string;
        quantity: number;
        size?: number | string;
        color?: string;
      }>,
    ) => {
      const { id, quantity, size, color } = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === id && item.size === size && item.color === color,
      );

      if (existingItem && quantity > 0) {
        const quantityDifference = quantity - existingItem.quantity;
        existingItem.quantity = quantity;
        state.totalQuantity += quantityDifference;
        state.totalAmount += existingItem.price * quantityDifference;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
