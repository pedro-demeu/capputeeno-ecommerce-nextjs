import { create } from "zustand";

type Cart = {
  id: number;
};

interface CartState {
  cart: Cart[];
  addItem: ({ id }: { id: number }) => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addItem: ({ id }) =>
    set((state) => ({
      cart: [...state.cart, { id }],
    })),
}));
