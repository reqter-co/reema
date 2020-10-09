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
  return (
    <Wrapper>
      <Container>
        <Left>
          <SocialIcon href="">
            <Icon name="linkedin" />
          </SocialIcon>
          <SocialIcon href="">
            <Icon name="facebook" />
          </SocialIcon>
          <SocialIcon href="">
            <Icon name="instagram" />
          </SocialIcon>
        </Left>
        <Right>
          <Column>
            <Link href="#">Connect your business</Link>
            <Link href="#">Work with us</Link>
            <Link href="#">The customer school</Link>
          </Column>
          <Column>
            <Link href="#">Blog</Link>
            <Link href="#">Contact Us</Link>
            <Link href="#">Tools</Link>
          </Column>
          <Column>
            <CompanyName>Reema Tools AB</CompanyName>
            <Link href="#">
              <Icon name="email" />
              <span className="mx-2">info@reematools.com</span>
            </Link>
            <Link href="#">
              <Icon name="phone" />
              <span className="mx-2">+46704689504</span>
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
