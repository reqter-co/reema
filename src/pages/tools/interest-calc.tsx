import React from "react";
import { GetStaticProps, NextPage } from "next";
import { defaultMetaTags } from "@Core/constants";
import Layout from "@Shared/layouts/LoanLayout";
import {  getProfilePageData } from "@Core/api";

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
      <div className="p-3 font-semibold">Please enter the detail</div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { appLocales, headerData, footerData } = await getProfilePageData();
    return {
      props: {
        appLocales,
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
// export async function getStaticPaths() {
//   const locales = await getAppLocales();
//   return {
//     paths: locales.map((item: any) => `/${item.locale}/tools/interest-calc`),
//     fallback: "blocking",
//   };
// }
export default InterestCalc;
