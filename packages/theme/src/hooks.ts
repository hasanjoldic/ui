import { createContext, useContext } from "react";

import type { PaletteMode } from "@mui/material";

export interface Theme {
  paletteMode: PaletteMode;
  setPaletteMode: (paletteMode: PaletteMode) => void;
}

export const ThemeContext = createContext<Theme>({
  paletteMode: "light",
  setPaletteMode: () => {},
});

export const useTheme = () => {
  return useContext(ThemeContext);
};
