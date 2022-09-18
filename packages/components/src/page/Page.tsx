import React from "react";

import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";

import { AppBar } from "../appBar";
import { Footer } from "../footer";

import { PageContent } from "./PageContent";
import { IPageContext, PageContext } from "./context";

const Container = styled(Box)(() => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
}));

interface Props extends React.PropsWithChildren<IPageContext> {}

export const Page: React.FC<Props> = ({ pages, onNavigate, children }) => {
  return (
    <PageContext.Provider value={{ pages, onNavigate }}>
      <Container>
        <AppBar />
        <PageContent>{children}</PageContent>
        <Footer />
      </Container>
    </PageContext.Provider>
  );
};
