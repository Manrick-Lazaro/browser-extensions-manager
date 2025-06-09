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
        if (get().theme == "light") {
          set({ theme: "dark" });
        } else {
          set({ theme: "light" });
        }
      },
    }),
    {
      name: "data_theme",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
