import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import { Logo } from "../logo";
import { usePageContext } from "../page/context";

export const LogoAndTitle: React.FC = () => {
  const { onNavigate } = usePageContext();

  return (
    <Box
      mx={2}
      flexGrow={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Link underline="none" color="inherit" onClick={() => onNavigate("/")}>
        <Box display="flex" alignItems="center">
          <Box mr={2}>
            <Logo />
          </Box>

          <Typography variant="h5" noWrap>
            Hasan Joldic
          </Typography>
        </Box>
      </Link>
    </Box>
  );
};
