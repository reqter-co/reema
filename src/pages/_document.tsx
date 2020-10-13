import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
interface IDocumentProps {
  lang: string;
  dir: string;
}
export default class MyDocument extends Document<IDocumentProps> {
  static async getInitialProps(ctx: any) {
    const additionalProps = {
      lang: ctx.query.lang,
      dir: ctx.query.lang === "fa" || ctx.query.lang === "ar" ? "rtl" : "ltr",
    };

    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) => {
            return sheet.collectStyles(
              <App {...props} addProps={additionalProps} />
            );
          },
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        ...additionalProps,
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
    const { lang, dir } = this.props;
    return (
      <html lang={lang} dir={dir} prefix="og: http://ogp.me/ns#">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
