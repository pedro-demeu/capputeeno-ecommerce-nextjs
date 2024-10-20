import { create } from "zustand";

type Cart = {
  id: number;
};

interface CartState {
  carts: Cart[];
  addItem: ({ id }: { id: number }) => void;
}

export const useCartStore = create<CartState>((set) => ({
  carts: [],
  addItem: ({ id }) =>
    set((state) => ({
      carts: [...state.carts, { id }],
    })),
}));
