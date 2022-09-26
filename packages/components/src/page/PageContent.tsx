import React from "react";

import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";

const Container = styled(Box)(({ theme }) => ({
  maxWidth: "100vw",
  flexGrow: 1,
  padding: theme.spacing(2, 4),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1, 1),
  },
}));

export const PageContent: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <Container>{children}</Container>;
};
