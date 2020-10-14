import React from "react";
import { GetStaticProps, NextPage } from "next";
import { defaultMetaTags } from "@Core/constants";
import Layout from "@Shared/components/Layout";
import Content from "../../pagesComponents/Home";
import { getAppLocales, getAllData } from "@Core/api";

interface IProps {}

const Home: NextPage<IProps> = () => {
  return (
    <Layout metaTags={defaultMetaTags}>
      <Content />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const {
      landingPageResponse,
      categoriesResponse,
      toolsResponse,
    } = await getAllData();
    return {
      props: {
        landingPage:
          landingPageResponse && landingPageResponse.length
            ? landingPageResponse[0]
            : null,
        categories: categoriesResponse || [],
        tools: toolsResponse || [],
      },
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
    fallback: false,
  };
}

export default Home;
