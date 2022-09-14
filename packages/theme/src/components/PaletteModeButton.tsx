import IconButton from "@mui/material/IconButton";

import DarkMode from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode";

import { useTheme } from "../hooks";

export const PaletteModeButton: React.FC = () => {
  const { paletteMode, setPaletteMode } = useTheme();

  return (
    <IconButton
      onClick={() => {
        const newPaletteMode = paletteMode === "light" ? "dark" : "light";
        setPaletteMode(newPaletteMode);
      }}
      size="large"
    >
      {paletteMode === "light" && <LightMode />}
      {paletteMode === "dark" && <DarkMode />}
    </IconButton>
  );
};
