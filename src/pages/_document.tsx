import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
interface IDocumentProps {
  lang: string;
  dir: string;
}
export default class ExtendedDocument extends Document<IDocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
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
    const { locale } = this.props.__NEXT_DATA__;
    return (
      <Html
        dir={locale === "fa" ? "rtl" : "ltr"}
        prefix="og: http://ogp.me/ns#"
      >
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
