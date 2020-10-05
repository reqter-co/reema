import React from "react";
import { defaultMetaTags } from "@Core/constants";
import Layout from "@Shared/components/Layout";
import Content from "./../pagesComponents/Home";

const Home = () => {
  return (
    <Layout metaTags={defaultMetaTags}>
      <Content />
    </Layout>
  );
};

export default Home;
