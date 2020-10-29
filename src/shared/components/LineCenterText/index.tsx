import { Wrapper, Text } from "./styles";
interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
}
const LineCenterText = ({ label }: IProps) => {
  return (
    <Wrapper>
      <Text>{label}</Text>
    </Wrapper>
  );
};
export default LineCenterText;
