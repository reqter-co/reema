import { useForm } from "react-hook-form";
import useAuth from "@Hooks/useAuth";
import Input from "@Shared/components/Form/Input";
import Icon from "@Shared/components/Icon";
import LineCenterText from "@Shared/components/LineCenterText";
import Link from "@Shared/components/Link";
import useDataPath from "@Hooks/useDataPath";
import { ILogin } from "@Interfaces/login";
import { emailPattern } from "@Shared/helper/patterns";
import {
  Content,
  Title,
  Description,
  ForgotPassword,
  Submit,
  SocialButtons,
  Button,
  SignupRow,
  SignupText,
  SignupLinkText,
} from "./styles";

type Props = {
  data: ILogin;
};
type IFormProps = {
  email: string;
  password: string;
};

const LoginForm = ({ data }: Props) => {
  const loginPage = data;
  const { handleLoginSuccess } = useAuth();
  const { register, errors, handleSubmit } = useForm<IFormProps>();
  const { getKeyValue } = useDataPath();

  const onSubmit = ({ email, password }: IFormProps) => {
    console.log(email, password);
    handleLoginSuccess("11-aa-22");
  };
  // function handleSocialLogin(user: any) {}
  // function handleSocialLoginFailure(error: any) {}
  return (
    <Content onSubmit={handleSubmit(onSubmit)}>
      <Title>{getKeyValue(loginPage, "formtitle")}</Title>
      <Description>{getKeyValue(loginPage, "formdescription")}</Description>
      <Input
        type="email"
        autoFocus
        placeholder={getKeyValue(loginPage, "emailplaceholder")}
        name="email"
        ref={register({
          required: true,
          pattern: emailPattern,
        })}
        hasError={errors.email ? true : false}
      />
      <Input
        placeholder={getKeyValue(loginPage, "passwordplaceholder")}
        name="password"
        ref={register({
          required: true,
          minLength: 6,
        })}
        hasError={errors.password ? true : false}
      />
      <div>
        <ForgotPassword>
          <Link href="/signup">{getKeyValue(loginPage, "forgotpasstext")}</Link>
        </ForgotPassword>
      </div>
      <Submit type="submit">{getKeyValue(loginPage, "submittext")}</Submit>
      <LineCenterText label={getKeyValue(loginPage, "socialboxtitle")} />
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
  );
};
export default LoginForm;
