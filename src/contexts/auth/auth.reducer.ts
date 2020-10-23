// const isBrowser = typeof window !== "undefined";
export const INITIAL_STATE = {
  // isAuthenticated: isBrowser && !!localStorage.getItem("reema_access_token"),
  isAuthenticated: false,
  isLoggedOut: false,
  redirectPage: "",
};

type ActionType =
  | { type: "LOGIN_SUCCESS" }
  | { type: "LOGOUT" }
  | { type: "SET_REDIRECT_PAGE"; payload: string };

type StateType = typeof INITIAL_STATE;

export function authReducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, isAuthenticated: true };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        isLoggedOut: true,
      };
    case "SET_REDIRECT_PAGE":
      return { ...state, redirectPage: action.payload };
    default: {
      return state;
      // throw new Error(`Unsupported action type at App Reducer`);
    }
  }
}
