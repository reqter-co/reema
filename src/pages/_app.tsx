import "../styles/index.css";
import type { AppProps } from "next/app";
import { AppProvider } from "@Contexts/app/app.provider";
import { AuthProvider } from "@Contexts/auth/auth.provider";

const ExtendedApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </AppProvider>
  );
};

export default ExtendedApp;
