import { Provider } from "@Hooks/useGlobal";
import "../styles/index.css";
import { appWithTranslation } from "../../i18n";
import type { AppProps } from "next/app";

interface IApp extends AppProps {
  addProps: {
    dir: string;
    lang: string;
  };
}
const MyApp = ({ Component, pageProps, addProps }: IApp) => {
  return (
    <Provider
      initialDataFromServer={{
        ...pageProps,
        dir: addProps?.dir,
      }}
    >
      <Component {...pageProps} />
    </Provider>
  );
};

export default appWithTranslation(MyApp);
