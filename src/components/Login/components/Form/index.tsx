import Input from "@Shared/components/Form/Input";
import Icon from "@Shared/components/Icon";
import Link from "@Shared/components/Link";
import useDataPath from "@Hooks/useDataPath";
import { ILogin } from "@Interfaces/login";
import {
  Wrapper,
  Content,
  Title,
  Description,
  ForgotPassword,
  Submit,
  TextLine,
  SocialButtons,
  Button,
  SignupRow,
  SignupText,
  SignupLinkText,
} from "./styles";

type Props = {
  data: ILogin;
};

const LoginForm = ({ data }: Props) => {
  const loginPage = data;
  const { getValue } = useDataPath();
  return (
    <Wrapper>
      <Content>
        <Title>{getValue(loginPage, "formtitle")}</Title>
        <Description>{getValue(loginPage, "formdescription")}</Description>
        <Input
          autoFocus
          placeholder={getValue(loginPage, "emailplaceholder")}
        />
        <Input placeholder={getValue(loginPage, "passwordplaceholder")} />
        <div>
          <ForgotPassword>
            <Link href="/signup">{getValue(loginPage, "forgotpasstext")}</Link>
          </ForgotPassword>
        </div>
        <Submit>{getValue(loginPage, "submittext")}</Submit>
        <TextLine>{getValue(loginPage, "socialboxtitle")}</TextLine>
        <SocialButtons>
          <Button>
            <Icon name="google" />
          </Button>
          <Button>
            <Icon name="linkedin" />
          </Button>
        </SocialButtons>
        <SignupRow>
          <SignupText>{getValue(loginPage, "signuptext")}</SignupText>
          <SignupLinkText>
            <Link href="/signup">{getValue(loginPage, "signuplinktext")}</Link>
          </SignupLinkText>
        </SignupRow>
      </Content>
    </Wrapper>
  );
};
export default LoginForm;
