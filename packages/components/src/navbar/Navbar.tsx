import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { PaletteModeButton } from "@hasan.joldic/theme";

import { Logo } from "../logo";
// import { styles } from "../../utils";

export const Navbar: React.FC = () => {
  return (
    <Box
      px={4}
      py={2}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      // borderBottom={styles.shadow.default}
    >
      <Box display="flex" alignItems="center">
        <Box mr={2}>
          <Logo variant="link" />
        </Box>
        <Typography variant="h5" noWrap>
          Hasan Joldic
        </Typography>
      </Box>

      <PaletteModeButton />
    </Box>
  );
};
