import useGlobalState from "@Hooks/useGlobal/useGlobalState";
import useDataPath from "@Hooks/useDataPath";
import {
  Wrapper,
  Container,
  Left,
  SocialIcon,
  Right,
  Column,
  Link,
  CompanyName,
  Logo,
} from "./styles";
import Icon from "@Shared/components/Icon";
const Footer = () => {
  const { landingPage } = useGlobalState();
  const { getValue } = useDataPath();
  return (
    <Wrapper>
      <Container>
        <Left>
          <SocialIcon
            href={getValue(landingPage, "linkedinlink")}
            target="_blank"
          >
            <Icon name="linkedin" />
          </SocialIcon>
          <SocialIcon href={getValue(landingPage, "fblink")} target="_blank">
            <Icon name="facebook" />
          </SocialIcon>
          <SocialIcon
            href={getValue(landingPage, "instagramlink")}
            target="_blank"
          >
            <Icon name="instagram" />
          </SocialIcon>
        </Left>
        <Right>
          <Column>
            <Link
              href={getValue(landingPage, "footerlink1url")}
              target="_blank"
            >
              {getValue(landingPage, "footerlink1title")}
            </Link>
            <Link
              href={getValue(landingPage, "footerlink2url")}
              target="_blank"
            >
              {getValue(landingPage, "footerlink2title")}
            </Link>
            <Link
              href={getValue(landingPage, "footerlink3url")}
              target="_blank"
            >
              {getValue(landingPage, "footerlink3title")}
            </Link>
          </Column>
          <Column>
            <Link href={getValue(landingPage, "footerlink4url")}>
              {getValue(landingPage, "footerlink4title")}
            </Link>
            <Link href={getValue(landingPage, "footerlink5url")}>
              {getValue(landingPage, "footerlink5title")}
            </Link>
            <Link href={getValue(landingPage, "footerlink6url")}>
              {getValue(landingPage, "footerlink6title")}
            </Link>
          </Column>
          <Column>
            <CompanyName>{getValue(landingPage, "companyname")}</CompanyName>
            <Link href={`mailto:${getValue(landingPage, "companyemail")}`}>
              <Icon name="email" />
              <span className="mx-2">
                {getValue(landingPage, "companyemail")}
              </span>
            </Link>
            <Link href={`tel:${getValue(landingPage, "copmanyphone")}`}>
              <Icon name="phone" />
              <span className="mx-2">
                {getValue(landingPage, "copmanyphone")}
              </span>
            </Link>
          </Column>
          <Column>
            <Logo>Reema</Logo>
          </Column>
        </Right>
      </Container>
    </Wrapper>
  );
};

export default Footer;
