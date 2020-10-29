import { useMemo } from "react";
import { NextPage, GetStaticProps } from "next";
import AuthLayout from "@Shared/layouts/AuthLayout";
import LoginForm from "@Components/Login/login.form";
import { MetaTags, PageType, RobotsContent } from "@Interfaces/meta-tags";
import { concatenateStrings } from "@Shared/helper";
import {  getLoginPageData } from "@Core/api";
import { ILogin } from "@Interfaces/login";
import useDataPath from "@Hooks/useDataPath";
import useMediaUtils from "@Hooks/useMediaUtils";

interface ILoginPageProps {
  loginPage: ILogin;
}

const Login: NextPage<ILoginPageProps> = ({ loginPage }) => {
  const { getKeyValue } = useDataPath();
  const { getMediaValue } = useMediaUtils();
  const metaTags: MetaTags = useMemo(() => {
    return {
      logo:
        "https://blog.mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png",
      canonical: `${process.env.DOMAIN_PUBLIC}`,
      title: getKeyValue(loginPage, "name"),
      description: getKeyValue(loginPage, "infodescripton"),
      image:
        "https://blog.mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png",
      robots: concatenateStrings(RobotsContent.index, RobotsContent.follow),
      type: PageType.website,
    };
  }, [loginPage]);

  return (
    <AuthLayout
      metaTags={metaTags}
      title={getKeyValue(loginPage, "infotitle")}
      description={getKeyValue(loginPage, "infodescripton")}
      image={getMediaValue(getKeyValue(loginPage, "infoimage"), "image")}
      formRender={() => <LoginForm data={loginPage} />}
    />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { appLocales, loginPage } = await getLoginPageData();
  return {
    props: {
      appLocales,
      loginPage,
    },
    revalidate: 60,
  };
};
// export async function getStaticPaths() {
//   const locales = await getAppLocales();
//   return {
//     paths: locales.map((item: any) => `/${item.locale}/login`),
//     fallback: "blocking",
//   };
// }

export default Login;
