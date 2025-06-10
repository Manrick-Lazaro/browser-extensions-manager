import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { cookieStorage } from "../../lib/cookieStorage";

type themeStore = {
  theme: string;
  switchTheme: () => void;
};

function X(): string {
  const theme = JSON.parse(cookieStorage.getItem("data_theme"));
  return theme.state.theme;
}

export const useThemeStore = create<themeStore>()(
  persist(
    (set, get) => ({
      theme: X(),
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
      storage: createJSONStorage(() => cookieStorage),
      skipHydration: true,
    }
  )
);
