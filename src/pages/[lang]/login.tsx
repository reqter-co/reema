import { GetStaticProps } from "next";
import Layout from "@Shared/components/SimpleLayout";
import Content from "../../components/Login";
import { MetaTags, PageType, RobotsContent } from "@Interfaces/meta-tags";
import { concatenateStrings } from "@Shared/helper";
import { getLoginPageData, getAppLocales } from "@Core/api";
import { ILogin } from "@Interfaces/login";
import useDataPath from "@Hooks/useDataPath";

const Login = ({ loginPage }: { loginPage: ILogin }) => {
  const { getValue } = useDataPath();
  const metaTags: MetaTags = {
    logo:
      "https://blog.mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png",
    canonical: `${process.env.DOMAIN_PUBLIC}`,
    title: getValue(loginPage, "name"),
    description: getValue(loginPage, "infodescripton"),
    image:
      "https://blog.mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png",
    robots: concatenateStrings(RobotsContent.index, RobotsContent.follow),
    type: PageType.website,
  };

  return (
    <Layout metaTags={metaTags}>
      <Content data={loginPage} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await getLoginPageData();
  return {
    props: {
      loginPage: response && response.length ? response[0] : null,
    },
  };
};
export async function getStaticPaths() {
  const locales = await getAppLocales();
  const langs =
    locales && locales.length ? locales : [{ locale: "en" }, { locale: "fa" }];
  return {
    paths: langs.map((item: any) => `/${item.locale}/login`),
    fallback: false,
  };
}

export default Login;
