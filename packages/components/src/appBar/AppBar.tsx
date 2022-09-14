import React from "react";

import { default as MuiAppBar } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import { PaletteModeButton } from "@hasan.joldic/theme";

import { LogoAndTitle } from "./LogoAndTitle";
import { DrawerButton } from "./DrawerButton";

interface Props extends React.ComponentProps<typeof DrawerButton> {}

export const AppBar: React.FC<Props> = ({ pages, onNavigate }) => {
  const handleNavigate = (path: string) => () => {
    onNavigate(path);
  };

  return (
    <MuiAppBar position="static" color="transparent">
      <Toolbar disableGutters>
        <DrawerButton pages={pages} onNavigate={onNavigate} />

        <LogoAndTitle />

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
          }}
        >
          {pages.map(({ path, label }) => (
            <Button key={path} onClick={handleNavigate(path)}>
              {label}
            </Button>
          ))}
        </Box>

        <PaletteModeButton />
      </Toolbar>
    </MuiAppBar>
  );
};
