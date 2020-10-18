import React from "react";
import { GetStaticProps, NextPage } from "next";
import { defaultMetaTags } from "@Core/constants";
import Layout from "@Shared/layouts/MainLayout";
import Content from "../../components/Home";
import { getAppLocales, getLandingPageData } from "@Core/api";
import { LandingProvider } from "@Contexts/landing/landing.provider";

interface IProps {
  headerData: any;
  footerData: any;
  landingPage: any;
  categories: any;
  tools: any;
}

const Home: NextPage<IProps, any> = ({
  headerData,
  footerData,
  landingPage,
  categories,
  tools,
}) => {
  return (
    <Layout
      metaTags={defaultMetaTags}
      footerData={footerData}
      headerData={headerData}
    >
      <LandingProvider data={{ landingPage, categories, tools }}>
        <Content />
      </LandingProvider>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const {
      headerData,
      footerData,
      landingPageResponse,
      categoriesResponse,
      toolsResponse,
    } = await getLandingPageData();
    return {
      props: {
        headerData,
        footerData,
        landingPage: landingPageResponse,
        categories: categoriesResponse || [],
        tools: toolsResponse || [],
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      props: {
        isError: true,
      },
    };
  }
};
export async function getStaticPaths() {
  const locales = await getAppLocales();
  const langs =
    locales && locales.length ? locales : [{ locale: "en" }, { locale: "fa" }];
  return {
    paths: langs.map((item: any) => `/${item.locale}`),
    fallback: true,
  };
}

export default Home;
