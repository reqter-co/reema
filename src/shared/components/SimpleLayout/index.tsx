import React from "react";
import Meta from "@Shared/components/Meta";
import { MetaTags } from "@Interfaces/meta-tags";
import { Main } from "./styles";

interface MainProps {
  metaTags: MetaTags;
}
const Layout: React.FC<MainProps> = ({ metaTags, children }): JSX.Element => {
  return (
    <Main>
      <Meta tags={metaTags} />
      {children}
    </Main>
  );
};
export default Layout;
