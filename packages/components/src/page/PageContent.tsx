import React from "react";

import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";

const Container = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2, 4),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const PageContent: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <Container>{children}</Container>;
};
