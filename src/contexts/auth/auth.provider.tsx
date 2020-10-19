import React, { useReducer } from "react";
import { AuthContext } from "./auth.context";
const isBrowser = typeof window !== "undefined";
const INITIAL_STATE = {
  isAuthenticated: isBrowser && !!localStorage.getItem("reema_access_token"),
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case "SIGNIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
      };
    default:
      return state;
  }
}

export const AuthProvider: React.FunctionComponent = ({ children }) => {
  const [authState, authDispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
