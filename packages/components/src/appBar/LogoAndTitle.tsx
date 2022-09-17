import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import { Logo } from "../logo";

export const LogoAndTitle: React.FC = () => {
  return (
    <Box
      mx={2}
      flexGrow={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Link href="/" underline="none" color="inherit">
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
