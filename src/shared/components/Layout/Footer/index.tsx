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
import { IFooter } from "@Interfaces/footer";
type Props = {
  data: IFooter;
};

const Footer = ({ data }: Props) => {
  const { getValue } = useDataPath();
  return (
    <Wrapper>
      <Container>
        <Left>
          <SocialIcon
            href={getValue(data, "linkedinlink")}
            target="_blank"
          >
            <Icon name="linkedin" />
          </SocialIcon>
          <SocialIcon href={getValue(data, "fblink")} target="_blank">
            <Icon name="facebook" />
          </SocialIcon>
          <SocialIcon
            href={getValue(data, "instagramlink")}
            target="_blank"
          >
            <Icon name="instagram" />
          </SocialIcon>
        </Left>
        <Right>
          <Column>
            <Link
              href={getValue(data, "footerlink1url")}
              target="_blank"
            >
              {getValue(data, "footerlink1title")}
            </Link>
            <Link
              href={getValue(data, "footerlink2url")}
              target="_blank"
            >
              {getValue(data, "footerlink2title")}
            </Link>
            <Link
              href={getValue(data, "footerlink3url")}
              target="_blank"
            >
              {getValue(data, "footerlink3title")}
            </Link>
          </Column>
          <Column>
            <Link href={getValue(data, "footerlink4url")}>
              {getValue(data, "footerlink4title")}
            </Link>
            <Link href={getValue(data, "link5url")}>
              {getValue(data, "link5title")}
            </Link>
            <Link href={getValue(data, "link6url")}>
              {getValue(data, "link6title")}
            </Link>
          </Column>
          <Column>
            <CompanyName>{getValue(data, "companyname")}</CompanyName>
            <Link href={`mailto:${getValue(data, "companyemail")}`}>
              <Icon name="email" />
              <span className="mx-2">
                {getValue(data, "companyemail")}
              </span>
            </Link>
            <Link href={`tel:${getValue(data, "copmanyphone")}`}>
              <Icon name="phone" />
              <span className="mx-2">
                {getValue(data, "copmanyphone")}
              </span>
            </Link>
          </Column>
          <Column>
            <Logo>{getValue(data, "logotitle")}</Logo>
          </Column>
        </Right>
      </Container>
    </Wrapper>
  );
};

export default Footer;
