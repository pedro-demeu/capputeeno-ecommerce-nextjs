import { create } from "zustand";

export type ActiveTabType = "all" | "tshirt" | "mug";

interface ActiveTabState {
  activeTab: ActiveTabType;
  setActiveTabValue: (activeTab: ActiveTabType) => void;
}

export const useActiveTab = create<ActiveTabState>((set) => ({
  activeTab: "all",
  setActiveTabValue: (activeTab) => set(() => ({ activeTab })),
}));
