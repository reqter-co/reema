import { useForm } from "react-hook-form";
import useRouter from "@Hooks/useRouter";
import Input from "@Shared/components/Form/Input";
import Icon from "@Shared/components/Icon";
import Link from "@Shared/components/Link";
import LineCenterText from "@Shared/components/LineCenterText";
import useDataPath from "@Hooks/useDataPath";
import { ISignUpPage } from "@Interfaces/signupPage";
import { emailPattern } from "@Shared/helper/patterns";
import {
  Content,
  Title,
  Description,
  Submit,
  SocialButtons,
  Button,
  SignupRow,
  SignupText,
  SignupLinkText,
} from "./styles";

type Props = {
  data: ISignUpPage;
};
type IFormProps = {
  email: string;
  password: string;
  fullname: string;
};

const LoginForm = ({ data }: Props) => {
  const signupPage = data;
  const { push } = useRouter();
  const { register, errors, handleSubmit } = useForm<IFormProps>();
  const { getKeyValue } = useDataPath();

  const onSubmit = ({ fullname, email, password }: IFormProps) => {
    console.log(fullname, email, password);
    push("/home");
  };
  return (
    <Content onSubmit={handleSubmit(onSubmit)}>
      <Title>{getKeyValue(signupPage, "formtitle")}</Title>
      <Description>{getKeyValue(signupPage, "formdescription")}</Description>
      <Input
        type="text"
        autoFocus
        placeholder={getKeyValue(signupPage, "fullnameplaceholder")}
        name="fullname"
        ref={register({
          required: true,
        })}
        hasError={errors.fullname ? true : false}
      />
      <Input
        type="email"
        placeholder={getKeyValue(signupPage, "emailplaceholder")}
        name="email"
        ref={register({
          required: true,
          pattern: emailPattern,
        })}
        hasError={errors.email ? true : false}
      />
      <Input
        placeholder={getKeyValue(signupPage, "passwordplaceholder")}
        name="password"
        ref={register({
          required: true,
          minLength: 6,
        })}
        hasError={errors.password ? true : false}
      />
      <Submit>{getKeyValue(signupPage, "submittext")}</Submit>
      <LineCenterText label={getKeyValue(signupPage, "socialboxtitle")} />
      <SocialButtons>
        <Button>
          <Icon name="google" />
        </Button>
        <Button>
          <Icon name="linkedin" />
        </Button>
      </SocialButtons>
      <SignupRow>
        <SignupText>{getKeyValue(signupPage, "logintext")}</SignupText>
        <SignupLinkText>
          <Link href="/login">{getKeyValue(signupPage, "loginlinktext")}</Link>
        </SignupLinkText>
      </SignupRow>
    </Content>
  );
};
export default LoginForm;
