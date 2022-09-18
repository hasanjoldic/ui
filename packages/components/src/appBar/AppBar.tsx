import React from "react";

import { default as MuiAppBar } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import { PaletteModeButton } from "@hasan.joldic/theme";

import { usePageContext } from "../page/context";

import { LogoAndTitle } from "./LogoAndTitle";
import { DrawerButton } from "./DrawerButton";

export const AppBar: React.FC = () => {
  const { pages, onNavigate } = usePageContext();

  return (
    <MuiAppBar position="static" color="transparent" elevation={1} square>
      <Toolbar disableGutters>
        <DrawerButton />

        <LogoAndTitle />

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
          }}
        >
          {pages.map(({ path, label }) => (
            <Button key={path} onClick={() => onNavigate(path)}>
              {label}
            </Button>
          ))}
        </Box>

        <PaletteModeButton />
      </Toolbar>
    </MuiAppBar>
  );
};
