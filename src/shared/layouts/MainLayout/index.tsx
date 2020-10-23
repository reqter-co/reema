import React from "react";
import Menu from "./Menu";
import Footer from "@Shared/components/Footer";
import Meta from "@Shared/components/Meta";
import { MetaTags } from "@Interfaces/meta-tags";
import { IHeader } from "@Interfaces/header";
import { IFooter } from "@Interfaces/footer";
import { Main, Content } from "./styles";

interface MainProps {
  metaTags: MetaTags;
  headerData: IHeader;
  footerData: IFooter;
}
const Layout: React.FC<MainProps> = ({
  metaTags,
  headerData,
  footerData,
  children,
}): JSX.Element => {
  return (
    <Main>
      <Meta tags={metaTags} />
      <Menu data={headerData} />
      <Content>{children}</Content>
      <Footer data={footerData} />
      {/* <Modal /> */}
    </Main>
  );
};
export default Layout;
