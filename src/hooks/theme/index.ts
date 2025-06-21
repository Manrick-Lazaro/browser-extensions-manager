import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { cookieStorage } from "../../lib/cookieStorage";

type themeStore = {
  theme: string;
  switchTheme: () => void;
};

export const useThemeStore = create<themeStore>()(
  persist(
    (set, get) => ({
      theme: "light",
      switchTheme: () => {
        if (typeof window === "undefined") return;

        const root = window.document.documentElement;

        let oldTheme = "";

        if (get().theme === "light") {
          oldTheme = "light";
          set({ theme: "dark" });
        } else {
          oldTheme = "dark";
          set({ theme: "light" });
        }

        root.classList.remove(oldTheme);
        root.classList.add(get().theme);
      },
    }),
    {
      name: "data_theme",
      storage: createJSONStorage(() => cookieStorage),
      onRehydrateStorage: () => (state) => {
        if (typeof window !== "undefined" && state?.theme) {
          const root = window.document.documentElement;
          root.classList.remove("light", "dark");
          root.classList.add(state.theme);
        }
      },
    }
  )
);
