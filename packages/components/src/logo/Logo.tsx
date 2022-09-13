import React from "react";

import useTheme from "@mui/material/styles/useTheme";

interface Props {
  variant?: "img" | "link";
}

const Img: React.FC<{ url: string }> = ({ url }) => (
  <img src={url} width="auto" height={40} />
);

export const Logo: React.FC<Props> = ({ variant = "img" }) => {
  const theme = useTheme();

  const url =
    "https://static.hasanjoldic.com/hasanjoldic.com/" +
    (theme.palette.mode === "light" ? "logo.png" : "logo-white.png");

  if (variant === "img") {
    return <Img url={url} />;
  }

  return (
    <a href="/">
      <Img url={url} />
    </a>
  );
};
