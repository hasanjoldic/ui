import React, { useState } from "react";

import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { usePageContext } from "../page/context";

export const DrawerButton = () => {
  const { pages, onNavigate } = usePageContext();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElNav(null);
  };

  const handleNavigate = (path: string) => () => {
    setAnchorElNav(null);
    onNavigate(path);
  };

  if (!pages?.length) return null;

  return (
    <Box sx={{ display: { xs: "flex", md: "none" } }}>
      <IconButton size="large" onClick={handleOpen}>
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={Boolean(anchorElNav)}
        onOpen={handleOpen}
        onClose={handleClose}
      >
        {pages.map(({ path, label }) => (
          <MenuItem key={path} onClick={handleNavigate(path)}>
            <Typography textAlign="center">{label}</Typography>
          </MenuItem>
        ))}
      </SwipeableDrawer>
    </Box>
  );
};
