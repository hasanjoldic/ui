import React from "react";

import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import AlternateEmail from "@mui/icons-material/AlternateEmail";
import GitHub from "@mui/icons-material/GitHub";
import Home from "@mui/icons-material/Home";

import { Logo } from "../logo";

const Container = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  display: "flex",
  justifyContent: "center",

  "&": {
    display: "flex",
    alignItems: "center",
  },
}));

const Content = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "& > *": {
    marginTop: theme.spacing(1),
  },
}));

const LinkContent = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  "& > .MuiSvgIcon-root": {
    marginRight: theme.spacing(1),
  },
}));

export const Footer: React.FC = () => {
  return (
    <Container elevation={1} square>
      <Content>
        <Box mb={4} alignSelf="center">
          <Logo variant="link" />
        </Box>

        <Link
          href="https://github.com/hasanjoldic"
          underline="none"
          color="inherit"
        >
          <LinkContent>
            <GitHub /> <Typography>hasanjoldic</Typography>
          </LinkContent>
        </Link>

        <Link
          href="mailto:office@hasanjoldic.com"
          underline="none"
          color="inherit"
        >
          <LinkContent>
            <AlternateEmail /> <Typography>office@hasanjoldic.com</Typography>
          </LinkContent>
        </Link>

        <LinkContent>
          <Home /> <Typography>Bosnia and Herzegovina</Typography>
        </LinkContent>
      </Content>
    </Container>
  );
};
