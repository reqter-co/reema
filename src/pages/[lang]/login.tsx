import { GetStaticProps } from "next";
import AuthLayout from "@Shared/layouts/AuthLayout";
import LoginForm from "@Components/Login/login.form";
import { MetaTags, PageType, RobotsContent } from "@Interfaces/meta-tags";
import { concatenateStrings } from "@Shared/helper";
import { getLoginPageData, getAppLocales } from "@Core/api";
import { ILogin } from "@Interfaces/login";
import useDataPath from "@Hooks/useDataPath";
import useMediaUtils from "@Hooks/useMediaUtils";

const Login = ({ loginPage }: { loginPage: ILogin }) => {
  const { getKeyValue } = useDataPath();
  const { getMediaValue } = useMediaUtils();
  const metaTags: MetaTags = {
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
  const response = await getLoginPageData();
  return {
    props: {
      loginPage: response && response.length ? response[0] : null,
    },
    revalidate: 60,
  };
};
export async function getStaticPaths() {
  const locales = await getAppLocales();
  const langs =
    locales && locales.length ? locales : [{ locale: "en" }, { locale: "fa" }];
  return {
    paths: langs.map((item: any) => `/${item.locale}/login`),
    fallback: true,
  };
}

export default Login;
