import React from "react";

import {styled} from "@mui/material/styles";
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

const defaultPages = [
  {
    path: "https://hasanjoldic.com",
    label: "Home",
  },
  {
    path: "https://notes.hasanjoldic.com",
    label: "Notes",
  },
  {
    path: "https://images.hasanjoldic.com",
    label: "Images",
  },
  {
    path: "https://static.hasanjoldic.com/hasanjoldic.com/HasanJoldic_CV.pdf",
    label: "Resume",
  },
];

interface Props
  extends React.PropsWithChildren<
    Omit<IPageContext, "pages"> & Partial<Pick<IPageContext, "pages">>
  > {}

export const Page: React.FC<Props> = ({
  pages = defaultPages,
  onNavigate = () => {},
  children,
}) => {
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
