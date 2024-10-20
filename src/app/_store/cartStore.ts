import { create } from "zustand";
import { Product } from "../types/product";

interface CartState {
  cart: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (productId: number) => void;
}

export const useProductCartStore = create<CartState>((set) => ({
  cart: [],
  addProduct: (product) =>
    set((state) => ({
      cart: [...state.cart, product],
    })),
  removeProduct: (productId) =>
    set((state) => ({
      cart: state.cart.filter((_cart) => _cart.id !== productId),
    })),
}));
