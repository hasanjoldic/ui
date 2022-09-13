// import { useState, useEffect } from "react";

// import type { PaletteMode as MuiPaletteMode } from "@mui/material";

// function getDarkPaletteModeMQ() {
//   if (typeof window === "undefined") return;

//   return window.matchMedia("(prefers-color-scheme:dark)");
// }

// export function useSystemPaletteMode() {
//   const [systemPaletteMode, setSystemPaletteMode] =
//     useState<MuiPaletteMode>("light");

//   useEffect(() => {
//     const darkPaletteModeMQ = getDarkPaletteModeMQ();

//     const listener = (e: MediaQueryListEventMap["change"]) => {
//       setSystemPaletteMode(getSystemPaletteMode(e.matches));
//     };

//     if (!darkPaletteModeMQ) return;

//     setSystemPaletteMode(getSystemPaletteMode(darkPaletteModeMQ.matches));

//     darkPaletteModeMQ.addEventListener("change", listener);
//     return () => darkPaletteModeMQ.removeEventListener("change", listener);
//   }, []);

//   return systemPaletteMode;
// }

// function getSystemPaletteMode(isDark: boolean) {
//   return isDark ? "dark" : "light";
// }
