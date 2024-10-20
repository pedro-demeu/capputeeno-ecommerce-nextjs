import { create } from "zustand";
import { Ordenation } from "../types/ordenation";

interface ActiveTabState {
  selectedValue: Ordenation;
  setSelectedValue: (newValue: Ordenation) => void;
}

export const useSelectOrdenation = create<ActiveTabState>((set) => ({
  selectedValue: "",
  setSelectedValue: (newValue) => set(() => ({ selectedValue: newValue })),
}));
