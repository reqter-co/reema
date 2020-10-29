import Categories from "./components/Categories";
import { Wrapper, Section, Content, Title, Description } from "./styles";
import useLanding from "@Hooks/useLanding";
import useLanguage from "@Hooks/useLanguage";
import useDataPath from "@Hooks/useDataPath";
import useMediaUtils from "@Hooks/useMediaUtils";

const Hero = () => {
  const { landingPage } = useLanding();
  const { direction } = useLanguage();
  const { getKeyValue } = useDataPath();
  const { getMediaValue } = useMediaUtils();

  return (
    <Wrapper
      img={getMediaValue(getKeyValue(landingPage, "heroimage"), "image")}
      direction={direction}
    >
      <Section>
        <Content>
          <Title>{getKeyValue(landingPage, "herotitle")}</Title>
          <Description>
            {getKeyValue(landingPage, "herodescription")}
          </Description>
          <Categories />
        </Content>
      </Section>
    </Wrapper>
  );
};

export default Hero;
