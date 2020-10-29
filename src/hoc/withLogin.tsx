import { useEffect } from "react";
import useUser from "@Hooks/useUser";
import useRouter from "@Hooks/useRouter";
import useAuth from "@Hooks/useAuth";

function withLogin<T extends object>(
  WrappedComponent: React.FunctionComponent<T>
) {
  return (props: T) => {
    const { setRedirectPage, isLoggedOut } = useAuth();
    const { user, loading, loggedOut } = useUser();
    const { push, currentRoute } = useRouter();

    useEffect(() => {
      if (loggedOut && !isLoggedOut) {
        setRedirectPage(currentRoute);
        push("/login");
      }
    }, [loading, user, loggedOut]);
    return <WrappedComponent {...props} />;
  };
}

export default withLogin;
