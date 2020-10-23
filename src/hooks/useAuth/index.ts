import Cookies from "js-cookie";
import { useAuthState, useAuthDispatch } from "@Contexts/auth/auth.provider";
import useRouter from "@Hooks/useRouter";
import { mutate } from "swr";

const useAuth = () => {
  const dispatch = useAuthDispatch();
  const { push } = useRouter();
  const isAuthenticated = useAuthState("isAuthenticated");
  const isLoggedOut = useAuthState("isLoggedOut");
  const redirectPage = useAuthState("redirectPage");
  const isRedirected = useAuthState("isRedirected");

  const handleLoginSuccess = (token: string) => {
    console.log(token);
    Cookies.set("reema_access_token", "swr");
    if (redirectPage) {
      mutate("api_user", null);
      push(redirectPage);
    } else {
      push("/home");
    }
    dispatch({ type: "LOGIN_SUCCESS" });
  };
  const logout = () => {
    Cookies.remove("reema_access_token");
    dispatch({ type: "LOGOUT" });
  };
  const setRedirectPage = (pageName: string) => {
    dispatch({ type: "SET_REDIRECT_PAGE", payload: pageName });
  };
  return {
    isRedirected,
    redirectPage,
    setRedirectPage,
    isAuthenticated,
    isLoggedOut,
    handleLoginSuccess,
    logout,
  };
};

export default useAuth;
