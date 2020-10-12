import { useContext } from "react";
import { GlobalContextDispatch } from "./index";

const useGlobalDispatch = () => {
  const dispatch = useContext(GlobalContextDispatch);
  return dispatch;
};
export default useGlobalDispatch;
