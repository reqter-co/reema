import { Provider } from "@Hooks/useGlobal";
import "../styles/index.css";
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
        lang: addProps?.lang,
      }}
    >
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
