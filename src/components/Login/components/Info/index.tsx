import { Wrapper, Title, Description, Image } from "./styles";
import { ILogin } from "@Interfaces/login";
import useDataPath from "@Hooks/useDataPath";

type Props = {
  data: ILogin;
};

const LoginInfo = ({ data }: Props) => {
  const loginPage = data;
  const { getValue } = useDataPath();
  return (
    <Wrapper>
      <Title>{getValue(loginPage, "infotitle")}</Title>
      <Description>{getValue(loginPage, "infodescripton")}</Description>
      <Image src="https://img.icons8.com/clouds/2x/apple-calculator.png" />
    </Wrapper>
  );
};
export default LoginInfo;
