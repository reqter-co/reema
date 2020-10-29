import { useRouter } from "next/router";
import useLanguage from "@Hooks/useLanguage";
const extendedUseRouter = () => {
  const router = useRouter();
  const { currentLang } = useLanguage();
  // const currentLang = router.query.lang;
  return {
    query: router.query,
    currentRoute: router.pathname,
    push(url: string) {
      if (!url || url == "/home") {
        router.push(`/${currentLang}`);
      } else {
        router.push(`/${currentLang}${url}`);
      }
    },
    pushWithParams(obj: {
      pathName: string;
      query: { [key in string]: string };
    }) {
      const pObj = {
        pathName:
          !obj.pathName || obj.pathName === "/home"
            ? `/${currentLang}`
            : `/${currentLang}` + obj.pathName,
        query: obj.query,
      };
      router.push(pObj);
    },
    replace(url: string) {
      if (!url || url == "/home") {
        router.replace(`/${router.query.lang}`);
      } else {
        router.replace(`/${router.query.lang}${url}`);
      }
    },
  };
};

export default extendedUseRouter;
