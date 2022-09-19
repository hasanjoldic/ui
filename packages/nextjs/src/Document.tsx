// `getInitialProps` belongs to `_document` (instead of `_app`)

import {
  default as NextDocument,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

import createEmotionServer from "@emotion/server/create-instance";

import { createEmotionCache } from "./createEmotionCache";
import { EnhancedAppType } from "./App";

interface Props {
  emotionStyleTags: JSX.Element[];
}

export class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="shortcut icon"
            href="https://static.hasanjoldic.com/hasanjoldic.com/favicon.ico"
          />
          <meta name="description" content="Hasan Joldic | Personal page" />

          <meta name="emotion-insertion-point" content="" />
          {this.props.emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// it's compatible with static-site generation (SSG).
export const getInitialProps = async (ctx: DocumentContext) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () => {
    return originalRenderPage({
      enhanceApp: (App: EnhancedAppType) => {
        return function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        };
      },
    });
  };

  const initialProps = await NextDocument.getInitialProps(ctx);
  // This is important. It prevents Emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
