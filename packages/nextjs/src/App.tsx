import Head from "next/head";
import { useRouter } from "next/router";
import { AppInitialProps } from "next/app";
import { NextComponentType } from "next";
import { AppContextType, AppPropsType } from "next/dist/shared/lib/utils";

import { CacheProvider, EmotionCache } from "@emotion/react";

import styled from "@mui/material/styles/styled";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import { ThemeProvider } from "@hasanjoldic/theme";
import { Page } from "@hasanjoldic/components";

import { createEmotionCache } from "./createEmotionCache";

const Content = styled("div")(({ theme }) => ({
  maxWidth: theme.breakpoints.values.lg,

  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export type EnhancedAppPropsType = AppPropsType & {
  emotionCache?: EmotionCache;
};

export type EnhancedAppType = NextComponentType<
  AppContextType,
  AppInitialProps,
  EnhancedAppPropsType
>;

export const App: EnhancedAppType = ({
  emotionCache = clientSideEmotionCache,
  Component,
  pageProps,
}) => {
  const router = useRouter();

  const onNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>

      <Box>
        <Page onNavigate={onNavigate}>
          <Content>
            <Component {...pageProps} />
          </Content>
        </Page>
      </Box>
    </CacheProvider>
  );
};
