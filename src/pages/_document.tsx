import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import { isRTL } from "@Hooks/useLanguage";
export default class ExtendedDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    // initialize styled-component ssr config
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) => {
            return sheet.collectStyles(<App {...props} />);
          },
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    // read local from global next config to set the html direction
    // to use logical css we have to put direction for html tag
    const { locale } = this.props.__NEXT_DATA__;
    return (
      <Html dir={isRTL(locale) ? "rtl" : "ltr"} prefix="og: http://ogp.me/ns#">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
