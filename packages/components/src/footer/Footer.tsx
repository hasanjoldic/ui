import React from "react";

import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";

import { Logo } from "../logo";

const Container = styled(Box)(({ theme }) => ({
  boxShadow: theme.shadows[1],
  padding: theme.spacing(1),
  display: "flex",
  justifyContent: "center",
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
