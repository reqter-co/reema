import { ItemWrapper, Icon, ItemTitle, Description } from "./styles";
type Props = {
  icon: any;
  title: string;
  description: string;
};
const HighlightItem = ({ icon, title, description }: Props) => {
  return (
    <ItemWrapper>
      <Icon>{icon}</Icon>
      <ItemTitle>{title}</ItemTitle>
      <Description>{description}</Description>
    </ItemWrapper>
  );
};

export default HighlightItem;
