import React, { useContext } from "react";
import { GlobalContextState } from "./provider";

const useGlobalState = () => useContext(GlobalContextState);
export default useGlobalState;
