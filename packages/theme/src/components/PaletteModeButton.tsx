// import { useState } from "react";

// import type { PaletteMode } from "@mui/material";

import IconButton from "@mui/material/IconButton";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import ListItemIcon from "@mui/material/ListItemIcon";

import DarkMode from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode";
// import SettingsBrightness from "@mui/icons-material/SettingsBrightness";

import { useTheme } from "../ThemeProvider";

export const PaletteModeButton: React.FC = () => {
  const { paletteMode, setPaletteMode } = useTheme();

  // const [anchorEl, setAnchorEl] = useState<HTMLElement>();

  // const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(undefined);
  // };

  // const handleChange = (paletteMode: PaletteMode) => () => {
  //   setPaletteMode(paletteMode);

  //   handleClose();
  // };
  return (
    <IconButton
      onClick={() => setPaletteMode(paletteMode === "light" ? "dark" : "light")}
      size="large"
    >
      {/* {paletteMode === "system" && <SettingsBrightness />} */}
      {paletteMode === "light" && <LightMode />}
      {paletteMode === "dark" && <DarkMode />}
    </IconButton>
    // <Menu
    //   id="basic-menu"
    //   anchorEl={anchorEl}
    //   open={!!anchorEl}
    //   onClose={handleClose}
    // >
    //   {/* <MenuItem onClick={handleChange("system")}>
    //     <ListItemIcon>
    //       <SettingsBrightness />
    //     </ListItemIcon>
    //     System
    //   </MenuItem> */}
    //   <MenuItem onClick={handleChange("light")}>
    //     <ListItemIcon>
    //       <LightMode />
    //     </ListItemIcon>
    //     Light
    //   </MenuItem>
    //   <MenuItem onClick={handleChange("dark")}>
    //     <ListItemIcon>
    //       <DarkMode />
    //     </ListItemIcon>
    //     Dark
    //   </MenuItem>
    // </Menu>
  );
};
