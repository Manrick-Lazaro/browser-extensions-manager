import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type themeStore = {
  theme: string;
  switchTheme: () => void;
};

export const useThemeStore = create<themeStore>()(
  persist(
    (set, get) => ({
      theme: "light",
      switchTheme: () => {
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
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
