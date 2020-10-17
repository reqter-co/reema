import "../styles/index.css";
import type { AppProps } from "next/app";
import { AppProvider } from "@Contexts/app/app.provider";

const ExtendedApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default ExtendedApp;
