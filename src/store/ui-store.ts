import { create } from 'zustand';

interface UiState {
  sidebarOpen: boolean;
  theme: 'light' | 'dark' | 'system';
  mobileMenuOpen: boolean;
}

interface UiActions {
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  setTheme: (theme: UiState['theme']) => void;
  setMobileMenuOpen: (open: boolean) => void;
}

type UiStore = UiState & UiActions;

export const useUiStore = create<UiStore>()((set) => ({
  sidebarOpen: true,
  theme: 'system',
  mobileMenuOpen: false,

  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  setTheme: (theme) => set({ theme }),
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
}));

export const selectSidebarOpen = (state: UiStore) => state.sidebarOpen;
export const selectTheme = (state: UiStore) => state.theme;
export const selectMobileMenuOpen = (state: UiStore) => state.mobileMenuOpen;
