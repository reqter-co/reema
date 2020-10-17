import Categories from "./components/Categories";
import { Wrapper, Section, Content, Title, Description } from "./styles";
import useLanding from "@Hooks/useLanding";
import useTranslation from "@Hooks/useTranslation";
import useDataPath from "@Hooks/useDataPath";

const List = () => {
  const { landingPage } = useLanding();
  const { direction } = useTranslation();
  const { getValue } = useDataPath();
  return (
    <Wrapper
      img={
        "https://www.mcarthurhomes.com/wp-content/uploads/2018/02/catalogo_Page_05_Page_04_Image_0001.jpg"
      }
      direction={direction}
    >
      <Section>
        <Content>
          <Title>{getValue(landingPage, "herotitle")}</Title>
          <Description>{getValue(landingPage, "herodescription")}</Description>
          <Categories />
        </Content>
      </Section>
    </Wrapper>
  );
};

export default List;
