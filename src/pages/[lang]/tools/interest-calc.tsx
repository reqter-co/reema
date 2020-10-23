import React from "react";
import { GetStaticProps, NextPage } from "next";
import { defaultMetaTags } from "@Core/constants";
import Layout from "@Shared/layouts/LoanLayout";
import { getAppLocales, getProfilePageData } from "@Core/api";

interface IProps {
  headerData: any;
  footerData: any;
}

const InterestCalc: NextPage<IProps> = ({ headerData, footerData }) => {
  return (
    <Layout
      metaTags={defaultMetaTags}
      footerData={footerData}
      headerData={headerData}
    >
      <div className="p-3 font-semibold">
        Please enter the detail
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { headerData, footerData } = await getProfilePageData();
    return {
      props: {
        headerData,
        footerData,
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
    paths: langs.map((item: any) => `/${item.locale}/tools/interest-calc`),
    fallback: true,
  };
}

export default InterestCalc;
