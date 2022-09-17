import { useState, useEffect, useMemo } from "react";

import muiCreateTheme from "@mui/material/styles/createTheme";
import type { PaletteMode } from "@mui/material";
import type { ThemeOptions } from "@mui/material/styles/createTheme";
import MuiThemeProvider from "@mui/material/styles/ThemeProvider";

import { ThemeContext } from "./hooks";

export interface ThemeProviderProps extends React.PropsWithChildren {
  themeOptions?: ThemeOptions;
  paletteMode?: PaletteMode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  themeOptions,
  paletteMode: propsPaletteMode,
  children,
}) => {
  const initialPaletteMode = useMemo(() => {
    if (propsPaletteMode) return propsPaletteMode;

    if (typeof document !== "undefined") {
      const isCSR = !document?.querySelector(".HJ-ThemeProvider-container");
      if (isCSR) {
        const paletteMode = getCookie("paletteMode") as PaletteMode;
        if (paletteMode) return paletteMode;
      }
    }

    return "light";
  }, []);

  const [paletteMode, setPaletteMode] =
    useState<PaletteMode>(initialPaletteMode);

  const theme = useMemo(() => {
    return createTheme(themeOptions, paletteMode);
  }, [paletteMode, themeOptions]);

  useEffect(() => {
    if (paletteMode) {
      setCookie("paletteMode", paletteMode);
    }
  }, [paletteMode]);

  return (
    <div className="HJ-ThemeProvider-container">
      <ThemeContext.Provider value={{ paletteMode, setPaletteMode }}>
        <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
      </ThemeContext.Provider>
    </div>
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
    components: {
      MuiPaper: {
        styleOverrides: {
          elevation1: {
            boxShadow: "none",
            border: "1px solid rgba(0,0,0,0.1)",
          },
        },
      },
    },
  });
}

function getDomain() {
  const hostname = window.location.hostname; // developer.mozilla.org

  const domains = hostname.split("."); // ["developer", "mozilla", "org"]

  return domains.slice(domains.length - 2).join("."); // mozilla.org
}

function getCookie(name: string) {
  if (typeof document === "undefined") return;

  return document.cookie
    .split("; ")
    .find((row) => row.includes(name))
    ?.split("=")[1];
}

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${value}; Domain=.${getDomain()}; Path=/; SameSite=strict; max-age=31536000`;
}

function deleteCookie(name: string) {
  document.cookie = `${name}=; Max-Age=0`;
}
