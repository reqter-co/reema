import React from "react";
import { GetStaticProps, NextPage } from "next";
import { defaultMetaTags } from "@Core/constants";
import Layout from "@Shared/components/Layout";
import Content from "../pagesComponents/Home";
import { getLandingData } from "@Core/api";

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
    const response = await getLandingData();
    return {
      props: {
        landingPage: response && response.length ? response[0] : null,
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

export default Home;
