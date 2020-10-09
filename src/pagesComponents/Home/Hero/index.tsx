import Categories from "./components/Categories";
import { Wrapper, Section, Content, Title, Description } from "./styles";
import useTranslation from "@Hooks/useTranslation";

const List = () => {
  const { direction } = useTranslation();
  return (
    <Wrapper
      img={
        "https://www.mcarthurhomes.com/wp-content/uploads/2018/02/catalogo_Page_05_Page_04_Image_0001.jpg"
      }
      direction={direction}
    >
      <Section>
        <Content>
          <Title>Get the job done By professionals</Title>
          <Description>
            Sweden's most popular service for getting in touch with companies.
            711 857 have received help so far!
          </Description>
          <Categories />
        </Content>
      </Section>
    </Wrapper>
  );
};

export default List;
