import { useMemo } from "react";
import { NextPage, GetStaticProps } from "next";
import AuthLayout from "@Shared/layouts/AuthLayout";
import SignUpForm from "@Components/SignUp/signup.form";
import { MetaTags, PageType, RobotsContent } from "@Interfaces/meta-tags";
import { concatenateStrings } from "@Shared/helper";
import { getSignUpPageData } from "@Core/api";
import { ISignUpPage } from "@Interfaces/signupPage";
import useDataPath from "@Hooks/useDataPath";
import useMediaUtils from "@Hooks/useMediaUtils";

interface ISignUpPageProps {
  signupPage: ISignUpPage;
}

const SignUp: NextPage<ISignUpPageProps> = ({ signupPage }) => {
  const { getKeyValue } = useDataPath();
  const { getMediaValue } = useMediaUtils();
  const metaTags: MetaTags = useMemo(() => {
    return {
      logo:
        "https://blog.mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png",
      canonical: `${process.env.DOMAIN_PUBLIC}`,
      title: getKeyValue(signupPage, "name"),
      description: getKeyValue(signupPage, "infodescripton"),
      image:
        "https://blog.mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png",
      robots: concatenateStrings(RobotsContent.index, RobotsContent.follow),
      type: PageType.website,
    };
  }, [signupPage]);

  return (
    <AuthLayout
      metaTags={metaTags}
      title={getKeyValue(signupPage, "infotitle")}
      description={getKeyValue(signupPage, "infodescripton")}
      image={getMediaValue(getKeyValue(signupPage, "infoimage"), "image")}
      formRender={() => <SignUpForm data={signupPage} />}
    />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { appLocales, signupPage } = await getSignUpPageData();
  return {
    props: {
      appLocales,
      signupPage,
    },
    revalidate: 60,
  };
};
// export async function getStaticPaths() {
//   const locales = await getAppLocales();
//   return {
//     paths: locales.map((item: any) => `/${item.locale}/signup`),
//     fallback: "blocking",
//   };
// }

export default SignUp;
