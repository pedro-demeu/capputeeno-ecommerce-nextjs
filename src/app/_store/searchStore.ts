import { create } from "zustand";

interface CartState {
  searchName: string;
  setSearchName: (productName: string) => void;
}

export const useSearch = create<CartState>((set) => ({
  searchName: "",
  setSearchName: (productName) =>
    set(() => ({
      searchName: productName,
    })),
}));
