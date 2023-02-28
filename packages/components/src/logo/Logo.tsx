import React from "react";

import {useTheme} from "@mui/material/styles";

import { usePageContext } from "../page/context";

interface Props {
  variant?: "img" | "link";
}

const Img: React.FC<{ url: string }> = ({ url }) => (
  <img src={url} width="auto" height={40} />
);

export const Logo: React.FC<Props> = ({ variant = "img" }) => {
  const theme = useTheme();
  const { onNavigate } = usePageContext();

  const url =
    "https://static.hasanjoldic.com/hasanjoldic.com/" +
    (theme.palette.mode === "light" ? "logo.png" : "logo-white.png");

  if (variant === "img") {
    return <Img url={url} />;
  }

  return (
    <a href="#" onClick={() => onNavigate("/")}>
      <Img url={url} />
    </a>
  );
};
