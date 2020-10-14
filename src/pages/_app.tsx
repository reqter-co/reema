import { Provider } from "@Hooks/useGlobal";
import "../styles/index.css";
import type { AppProps } from "next/app";

type dir = "ltr" | "rtl";
// interface IApp extends AppProps {

// }
type AddProps = {
  addProps: {
    dir: dir;
    lang: string;
  };
};
type IApp = AppProps & AddProps;
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
