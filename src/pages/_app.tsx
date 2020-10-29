import "../assets/styles/index.css";
import type { AppProps } from "next/app";
import { AppProvider } from "@Contexts/app/app.provider";
import { AuthProvider } from "@Contexts/auth/auth.provider";
import { LanguageProvider } from "@Contexts/language/language.provider";

const ExtendedApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <AuthProvider>
        <LanguageProvider data={{ appLocales: pageProps.appLocales }}>
          <Component {...pageProps} />
        </LanguageProvider>
      </AuthProvider>
    </AppProvider>
  );
};

export default ExtendedApp;
