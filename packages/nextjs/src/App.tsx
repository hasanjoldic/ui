// import Head from "next/head";
// import { useRouter } from "next/router";
// import { AppInitialProps } from "next/app";
// import { NextComponentType } from "next";
// import { AppContextType, AppPropsType } from "next/dist/shared/lib/utils";

// import { CacheProvider, EmotionCache } from "@emotion/react";

// import { styled } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";

// import { ThemeProvider } from "@hasanjoldic/theme";
// import { Page } from "@hasanjoldic/components";

// import { createEmotionCache } from "./createEmotionCache";

// const Content = styled("div")(({ theme }) => ({
//   maxWidth: theme.breakpoints.values.lg,

//   flexGrow: 1,
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignItems: "center",
// }));

// // Client-side cache, shared for the whole session of the user in the browser.
// const clientSideEmotionCache = createEmotionCache();

// const pages = [
//   {
//     path: "https://hasanjoldic.com",
//     label: "Home",
//   },
//   {
//     path: "https://notes.hasanjoldic.com",
//     label: "Notes",
//   },
//   {
//     path: "https://images.hasanjoldic.com",
//     label: "Images",
//   },
//   {
//     path: "https://static.hasanjoldic.com/hasanjoldic.com/HasanJoldic_CV.pdf",
//     label: "Resume",
//   },
// ];

// export type EnhancedAppPropsType = AppPropsType & {
//   emotionCache?: EmotionCache;
// };

// export type EnhancedAppType = NextComponentType<
//   AppContextType,
//   AppInitialProps,
//   EnhancedAppPropsType
// >;

// export const App: EnhancedAppType = ({
//   emotionCache = clientSideEmotionCache,
//   Component,
//   pageProps,
// }) => {
//   const router = useRouter();

//   const onNavigate = (path: string) => {
//     router.push(path);
//   };

//   return (
//     <CacheProvider value={emotionCache}>
//       <Head>
//         <meta name="viewport" content="initial-scale=1, width=device-width" />
//       </Head>
//       <ThemeProvider>
//         <CssBaseline />

//         <Box>
//           <Page pages={pages} onNavigate={onNavigate}>
//             <Content>
//               <Component {...pageProps} />
//             </Content>
//           </Page>
//         </Box>
//       </ThemeProvider>
//     </CacheProvider>
//   );
// };

import Head from "next/head";
import { useRouter } from "next/router";
import { default as NextApp, AppContext, AppInitialProps } from "next/app";
import { NextComponentType } from "next";
import { AppContextType, AppPropsType } from "next/dist/shared/lib/utils";

import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import { ThemeProvider } from "@hasanjoldic/theme";
import { Page } from "@hasanjoldic/components";

const pages = [
  {
    path: "https://hasanjoldic.com",
    label: "Home",
  },
  {
    path: "https://notes.hasanjoldic.com",
    label: "Notes",
  },
  {
    path: "https://images.hasanjoldic.com",
    label: "Images",
  },
  {
    path: "https://static.hasanjoldic.com/hasanjoldic.com/HasanJoldic_CV.pdf",
    label: "Resume",
  },
];

const Content = styled("div")(({ theme }) => ({
  maxWidth: `min(100%, ${theme.breakpoints.values.lg}px)`,

  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

type Props = {
  cookie: string | undefined;
};

type EnhancedAppPropsType = Props & AppPropsType;

type EnhancedAppType = NextComponentType<
  AppContextType,
  AppInitialProps,
  EnhancedAppPropsType
>;

export const App: EnhancedAppType = ({ Component, pageProps, cookie }) => {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <ThemeProvider cookie={cookie}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Hasan Joldic</title>
      </Head>

      <CssBaseline />

      <Box>
        <Page pages={pages} onNavigate={handleNavigate}>
          <Content>
            <Component {...pageProps} />
          </Content>
        </Page>
      </Box>
    </ThemeProvider>
  );
};

App.getInitialProps = async (
  context: AppContext
): Promise<Props & AppInitialProps> => {
  const pageProps = await NextApp.getInitialProps(context);

  const cookie = context.ctx.req?.headers.cookie;

  return { pageProps, cookie };
};
