import { useState, useEffect, useMemo } from "react";

import muiCreateTheme from "@mui/material/styles/createTheme";
import type { PaletteMode } from "@mui/material";
import type { ThemeOptions } from "@mui/material/styles/createTheme";
import MuiThemeProvider from "@mui/material/styles/ThemeProvider";

import { ThemeContext } from "./hooks";

export interface ThemeProviderProps extends React.PropsWithChildren {
  themeOptions?: ThemeOptions;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  themeOptions,
  children,
}) => {
  const [paletteMode, setPaletteMode] = useState<PaletteMode>("light");

  const theme = useMemo(() => {
    return createTheme(themeOptions, paletteMode);
  }, [paletteMode, themeOptions]);

  useEffect(() => {
    if (paletteMode) {
      setCookie("paletteMode", paletteMode);
    }
  }, [paletteMode]);

  useEffect(() => {
    const initialPaletteMode =
      (getCookie("paletteMode") as PaletteMode) || "light";

    setPaletteMode(initialPaletteMode);
  }, [setPaletteMode]);

  return (
    <ThemeContext.Provider value={{ paletteMode, setPaletteMode }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

function createTheme(themeOptions?: ThemeOptions, mode?: PaletteMode) {
  themeOptions = themeOptions ?? {};
  mode = mode ?? "light";

  return muiCreateTheme({
    ...themeOptions,
    palette: {
      ...themeOptions.palette,
      mode,
    },
  });
}

function getDomain() {
  // developer.mozilla.org
  const hostname = window.location.hostname;

  const domains = hostname.split(".");
  // mozilla.ord
  return domains.slice(domains.length - 2).join(".");
}

function getCookie(name: string) {
  if (typeof document === "undefined") return;

  return document.cookie
    .split("; ")
    .find((row) => row.includes(name))
    ?.split("=")[1];
}

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${value}; Domain=${getDomain()}; SameSite=strict; max-age=31536000`;
}

function deleteCookie(name: string) {
  document.cookie = `${name}=; Max-Age=0`;
}
