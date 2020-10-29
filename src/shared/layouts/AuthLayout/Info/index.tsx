import { Wrapper, Title, Description, Image } from "./styles";

type Props = {
  title: string;
  description: string;
  image: string;
};

const AuthLayoutInfo = ({ title, description, image }: Props) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Image src={image} />
    </Wrapper>
  );
};
export default AuthLayoutInfo;
