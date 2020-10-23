import { useRouter } from "next/router";
const extendedUseRouter = () => {
  const router = useRouter();
  const currentLang = router.query.lang;
  return {
    query: router.query,
    currentRoute: router.pathname.split("/[lang]")[1],
    push(url: string) {
      if (!url || url == "/home") {
        router.push(`/${router.query.lang}`);
      } else {
        router.push(`/${router.query.lang}${url}`);
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
