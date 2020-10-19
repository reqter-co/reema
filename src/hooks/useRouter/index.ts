import { useRouter } from "next/router";
const extendedUseRouter = () => {
  const router = useRouter();
  return {
    push(url: string) {
      if (!url || url == "/home") {
        router.push(`/${router.query.lang}`);
      } else {
        router.push(`/${router.query.lang}${url}`);
      }
    },
  };
};

export default extendedUseRouter;
