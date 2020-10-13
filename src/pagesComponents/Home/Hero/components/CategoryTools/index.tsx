import {
  Wrapper,
  Header,
  Content,
  CategoryTitle,
  CloseIcon,
  ToolItem,
} from "./styles";
import Icon from "@Shared/components/Icon";
import { ICategory } from "@Interfaces/category";
import useCategoryTools from "@Hooks/useCategoryTools";
import useDataPath from "@Hooks/useDataPath";
import { useMemo } from "react";

interface IProps {
  category: ICategory | undefined;
  onClose: () => void;
}

const CategoryTools = ({ category, onClose }: IProps) => {
  const { getValue } = useDataPath();
  const { getCategoryToolsById } = useCategoryTools();
  const tools = useMemo(
    () => (category ? getCategoryToolsById(category._id) : []),
    [category]
  );
  function handleClose() {
    onClose();
  }
  return (
    <Wrapper>
      <Header>
        <CategoryTitle>{getValue(category, "name")}</CategoryTitle>
        <CloseIcon onClick={handleClose}>
          <Icon name="close" />
        </CloseIcon>
      </Header>
      <Content>
        {tools.map((item) => (
          <ToolItem key={item.id}>{item.title}</ToolItem>
        ))}
      </Content>
    </Wrapper>
  );
};

export default CategoryTools;
