import { useAuthState, useAuthDispatch } from "@Contexts/auth/auth.provider";
import useRouter from "@Hooks/useRouter";
import { mutate } from "swr";

const useAuth = () => {
  const dispatch = useAuthDispatch();
  const { push, query } = useRouter();
  const isAuthenticated = useAuthState("isAuthenticated");
  const isLoggedOut = useAuthState("isLoggedOut");
  const redirectPage = useAuthState("redirectPage");
  const isRedirected = useAuthState("isRedirected");

  const handleLoginSuccess = (token: string) => {
    document.cookie = "swr-test-token=swr;";
    if (redirectPage) {
      mutate("api_user", null);
      push(redirectPage);
    } else {
      push("/home");
    }
    dispatch({ type: "LOGIN_SUCCESS" });
  };
  const logout = () => {
    document.cookie = "swr-test-token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
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
