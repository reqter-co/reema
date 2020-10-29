import React from "react";
import { GetStaticProps, NextPage } from "next";
import { defaultMetaTags } from "@Core/constants";
import Layout from "@Shared/layouts/MainLayout";
import Content from "@Components/Profile";
import { getProfilePageData } from "@Core/api";
import { ProfileProvider } from "@Contexts/profile/profile.provider";
import withLogin from "../hoc/withLogin";

interface IProps {
  headerData: any;
  footerData: any;
}

const Profile: NextPage<IProps> = ({ headerData, footerData }) => {
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
//     paths: locales.map((item: any) => `/${item.locale}/profile`),
//     fallback: "blocking",
//   };
// }

export default withLogin<IProps>(Profile);
