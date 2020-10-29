import React from "react";
import { GetStaticProps, NextPage } from "next";
import { defaultMetaTags } from "@Core/constants";
import Layout from "@Shared/layouts/MainLayout";
import Hero from "@Components/Home/Hero";
import Highlight from "@Components/Home/Highlight";
import {  getLandingPageData } from "@Core/api";
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
        <Hero />
        <Highlight />
      </LandingProvider>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const {
    appLocales,
    headerData,
    footerData,
    landingPageResponse,
    categoriesResponse,
    toolsResponse,
  } = await getLandingPageData();

  return {
    props: {
      appLocales,
      headerData,
      footerData,
      landingPage: landingPageResponse,
      categories: categoriesResponse || [],
      tools: toolsResponse || [],
    },
    revalidate: 60,
  };
};

// export async function getStaticPaths() {
//   const locales = await getAppLocales();
//   return {
//     paths: locales.map((item: any) => `/${item.locale}`),
//     fallback: "blocking",
//   };
// }
export default Home;
