import { useThemeStore } from "../../hooks/theme";

import iconMoon from "../../assets/images/icon-moon.svg";
import iconSun from "../../assets/images/icon-sun.svg";

export function ThemeToggleButton() {
  const { theme, switchTheme } = useThemeStore();

  return (
    <div onClick={() => switchTheme()}>
      {theme === "light" ? (
        <div className="bg-neutral-100 flex-1 justify-center items-center rounded-xl p-3 overflow-auto">
          <img src={iconMoon} alt="logo" width={25} />
        </div>
      ) : (
        <div className="bg-neutral-700 flex-1 justify-center items-center rounded-xl p-3 overflow-auto">
          <img src={iconSun} alt="logo" width={25} />
        </div>
      )}
    </div>
  );
}
