import React from "react";

import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";

import { AppBar } from "../appBar";
import { Footer } from "../footer";
import { PageContent } from "./PageContent";

const Container = styled(Box)(() => ({
  minWidth: "100vw",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
}));

interface Props extends React.ComponentProps<typeof AppBar> {}

export const Page: React.FC<Props> = ({ pages, onNavigate }) => {
  return (
    <Container>
      <AppBar pages={pages} onNavigate={onNavigate} />
      <PageContent />
      <Footer />
    </Container>
  );
};
