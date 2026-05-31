// lib/store.ts
import { create } from "zustand";

interface Store {
  // State
  sideMenuOpen: boolean;

  // Actions
  toggleSideMenuOpen: () => void;
  closeSideMenu: () => void;
  openSideMenu: () => void;
}

// Create store
const useStore = create<Store>((set) => ({
  sideMenuOpen: false,

  toggleSideMenuOpen: () =>
    set((state) => ({ sideMenuOpen: !state.sideMenuOpen })),

  closeSideMenu: () => set({ sideMenuOpen: false }),
  
  openSideMenu: () => set({ sideMenuOpen: true }),
}));

export default useStore;