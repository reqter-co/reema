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
  const { getKeyValue } = useDataPath();
  return (
    <Wrapper>
      <Content>
        <Title>{getKeyValue(loginPage, "formtitle")}</Title>
        <Description>{getKeyValue(loginPage, "formdescription")}</Description>
        <Input
          autoFocus
          placeholder={getKeyValue(loginPage, "emailplaceholder")}
        />
        <Input placeholder={getKeyValue(loginPage, "passwordplaceholder")} />
        <div>
          <ForgotPassword>
            <Link href="/signup">{getKeyValue(loginPage, "forgotpasstext")}</Link>
          </ForgotPassword>
        </div>
        <Submit>{getKeyValue(loginPage, "submittext")}</Submit>
        <TextLine>{getKeyValue(loginPage, "socialboxtitle")}</TextLine>
        <SocialButtons>
          <Button>
            <Icon name="google" />
          </Button>
          <Button>
            <Icon name="linkedin" />
          </Button>
        </SocialButtons>
        <SignupRow>
          <SignupText>{getKeyValue(loginPage, "signuptext")}</SignupText>
          <SignupLinkText>
            <Link href="/signup">{getKeyValue(loginPage, "signuplinktext")}</Link>
          </SignupLinkText>
        </SignupRow>
      </Content>
    </Wrapper>
  );
};
export default LoginForm;
