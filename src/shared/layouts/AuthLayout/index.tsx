import React from "react";
import FormContainer from "./FormContainer";
import Info from "./Info";
import Meta from "@Shared/components/Meta";
import { MetaTags } from "@Interfaces/meta-tags";
import { Wrapper } from "./styles";

interface MainProps {
  metaTags: MetaTags;
  title: string;
  description: string;
  image: string;
  formRender: () => JSX.Element;
}
const Layout = ({
  metaTags,
  title,
  description,
  image,
  formRender,
}: MainProps): JSX.Element => {
  return (
    <Wrapper>
      <Meta tags={metaTags} />
      <FormContainer>{formRender()}</FormContainer>
      <Info title={title} description={description} image={image} />
    </Wrapper>
  );
};
export default Layout;
