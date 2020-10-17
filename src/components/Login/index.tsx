import { Wrapper } from "./styles";
import Form from "./components/Form";
import Info from "./components/Info";
import { ILogin } from "@Interfaces/login";

type Props = {
  data: ILogin;
};

const LoginContent = ({ data }: Props) => {
  return (
    <Wrapper>
      <Form data={data} />
      <Info data={data} />
    </Wrapper>
  );
};
export default LoginContent;
