import { useRef } from "react";
import useGlobalState from "./useGlobalState";
import { Provider } from "./provider";
const Index = ({ children, initialDataFromServer }) => {
  const data = useRef({ ...initialDataFromServer });
  return (
    <Provider
      initialDataFromServer={{
        ...initialDataFromServer,
      }}
    >
      {children}
    </Provider>
  );
};

export default Index;
