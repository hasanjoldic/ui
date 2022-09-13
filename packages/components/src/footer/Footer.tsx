import React from "react";

import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import { default as MuiContainer } from "@mui/material/Container";

import { Logo } from "../logo";

const Container = styled(MuiContainer)(({ theme }) => ({
  boxShadow: theme.shadows[1],
  padding: theme.spacing(1),
}));

export const Footer: React.FC = () => {
  return (
    <Container>
      <Box display="flex" justifyContent="center">
        <Logo variant="link" />
      </Box>
    </Container>
  );
};
