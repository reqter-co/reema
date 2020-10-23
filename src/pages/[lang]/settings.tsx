import React from "react";
import { GetStaticProps, NextPage } from "next";
import { defaultMetaTags } from "@Core/constants";
import Layout from "@Shared/layouts/MainLayout";
import Content from "@Components/Profile";
import { getAppLocales, getProfilePageData } from "@Core/api";
import { ProfileProvider } from "@Contexts/profile/profile.provider";
import withLogin from "../../hoc/withLogin";

interface IProps {
  headerData: any;
  footerData: any;
}

const Settings: NextPage<IProps> = ({ headerData, footerData }) => {
  return (
    <Layout
      metaTags={defaultMetaTags}
      footerData={footerData}
      headerData={headerData}
    >
      <ProfileProvider>
        <Content />
      </ProfileProvider>
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
    paths: langs.map((item: any) => `/${item.locale}/settings`),
    fallback: true,
  };
}

export default withLogin<IProps>(Settings);
