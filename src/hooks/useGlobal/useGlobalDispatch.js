import { useContext } from "react";
import { GlobalContextDispatch } from "./provider";

const useGlobalDispatch = () => {
  const dispatch = useContext(GlobalContextDispatch);
  return dispatch;
};
export default useGlobalDispatch;
