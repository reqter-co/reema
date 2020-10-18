import { Wrapper, Title, Description, Image } from "./styles";
import { ILogin } from "@Interfaces/login";
import useDataPath from "@Hooks/useDataPath";
import useMediaUtils from "@Hooks/useMediaUtils";

type Props = {
  data: ILogin;
};

const LoginInfo = ({ data }: Props) => {
  const loginPage = data;
  const { getKeyValue } = useDataPath();
  const { getMediaValue } = useMediaUtils();
  return (
    <Wrapper>
      <Title>{getKeyValue(loginPage, "infotitle")}</Title>
      <Description>{getKeyValue(loginPage, "infodescripton")}</Description>
      <Image
        src={getMediaValue(getKeyValue(loginPage, "infoimage"), "image")}
      />
    </Wrapper>
  );
};
export default LoginInfo;
