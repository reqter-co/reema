import { useRouter } from "next/router";

// localize next/router to be more easily to use
// push - push with params - replace
const extendedUseRouter = () => {
  const router = useRouter();
  // push to single route name
  function push(path: string) {
    let url = "/";
    if (path && path !== "/home") {
      url = path;
    }
    router.push(url);
  }
  // push to a route with query parameters
  function pushWithParams(path: {
    pathName: string;
    query: { [key in string]: string };
  }) {
    const pObj = {
      pathName:
        path.pathName && path.pathName !== "/home" ? path.pathName : "/",
      query: path.query,
    };
    router.push(pObj);
  }
  // replace a route without backing to previous route
  function replace(path: string) {
    let url = "/";
    if (path && path !== "/home") {
      url = path;
    }
    router.replace(url);
  }
  return {
    query: router.query,
    currentRoute: router.pathname,
    push,
    pushWithParams,
    replace,
  };
};

export default extendedUseRouter;
