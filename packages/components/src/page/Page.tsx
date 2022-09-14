import React from "react";

import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";

import { AppBar } from "../appBar";
import { Footer } from "../footer";
import { PageContent } from "./PageContent";

const Container = styled(Box)(() => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
}));

interface Props
  extends React.PropsWithChildren<React.ComponentProps<typeof AppBar>> {}

export const Page: React.FC<Props> = ({ pages, onNavigate, children }) => {
  return (
    <Container>
      <AppBar pages={pages} onNavigate={onNavigate} />
      <PageContent>{children}</PageContent>
      <Footer />
    </Container>
  );
};
