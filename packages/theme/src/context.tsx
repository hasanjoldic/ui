import { createContext, useContext, useState, useEffect, useMemo } from "react";

import muiCreateTheme from "@mui/material/styles/createTheme";
import type { PaletteMode as MuiPaletteMode } from "@mui/material";
import type { ThemeOptions } from "@mui/material/styles/createTheme";
import MuiThemeProvider from "@mui/material/styles/ThemeProvider";

import { useSystemPaletteMode } from "./paletteMode";

export type PaletteMode = "system" | MuiPaletteMode;

export interface Theme {
  paletteMode: PaletteMode;
  setPaletteMode: (paletteMode: PaletteMode) => void;
}

const ThemeContext = createContext<Theme>({
  paletteMode: "system",
  setPaletteMode: () => {},
});

export const useTheme = () => {
  return useContext(ThemeContext);
};

export interface ThemeProviderProps extends React.PropsWithChildren {
  themeOptions: ThemeOptions;
  paletteMode?: PaletteMode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  themeOptions,
  paletteMode: propsPaletteMode = "system",
  children,
}) => {
  const systemPaletteMode = useSystemPaletteMode();

  const [paletteMode, setPaletteMode] = useState<PaletteMode>(propsPaletteMode);

  const theme = useMemo(() => {
    const mode = getMode(paletteMode, systemPaletteMode);
    return createTheme(themeOptions, mode);
  }, [paletteMode, systemPaletteMode, themeOptions]);

  useEffect(() => {
    const initialPaletteMode = getInitialPaletteMode(propsPaletteMode);

    if (initialPaletteMode !== propsPaletteMode) {
      setPaletteMode(initialPaletteMode);
    }
  }, []);

  useEffect(() => {
    setCookie("paletteMode", paletteMode);
  }, [systemPaletteMode, paletteMode]);

  return (
    <ThemeContext.Provider value={{ paletteMode, setPaletteMode }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

function getMode(paletteMode: PaletteMode, systemPaletteMode: MuiPaletteMode) {
  return paletteMode === "system" ? systemPaletteMode : paletteMode;
}

function createTheme(themeOptions: ThemeOptions, mode: MuiPaletteMode) {
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

function getInitialPaletteMode(paletteMode?: PaletteMode): PaletteMode {
  const initialPaletteMode: PaletteMode =
    paletteMode || (getCookie("paletteMode") as PaletteMode) || "system";
  return initialPaletteMode;
}
