import React from "react";

import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";

const Container = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  p: theme.spacing(2, 4),
}));

export const PageContent: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <Container>{children}</Container>;
};
