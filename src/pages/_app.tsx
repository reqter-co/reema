import { Provider } from "@Hooks/useGlobal";
import "../styles/index.css";
import { NextNextProvider } from "i18nextnext";
import { initTranslation } from "../services/translation";
import type { AppProps } from "next/app";
const i18n = initTranslation();

interface IApp extends AppProps {
  addProps: {
    dir: string;
    lang: string;
  };
}
const MyApp = ({ Component, pageProps, addProps }: IApp) => {
  return (
    <NextNextProvider i18n={i18n}>
      <Provider
        initialDataFromServer={{
          ...pageProps,
          dir: addProps?.dir,
        }}
      >
        <Component {...pageProps} />
      </Provider>
    </NextNextProvider>
  );
};

export default MyApp;
