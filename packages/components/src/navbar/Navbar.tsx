import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "@mui/material/styles/styled";

import { PaletteModeButton } from "@hasan.joldic/theme";

import { Logo } from "../logo";

const Container = styled("div")(({ theme }) => ({
  boxShadow: theme.shadows[1],
  padding: theme.spacing(4, 2),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const Navbar: React.FC = () => {
  return (
    <Container>
      <Box display="flex" alignItems="center">
        <Box mr={2}>
          <Logo variant="link" />
        </Box>
        <Typography variant="h5" noWrap>
          Hasan Joldic
        </Typography>
      </Box>

      <PaletteModeButton />
    </Container>
  );
};
