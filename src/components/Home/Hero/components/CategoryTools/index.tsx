import { useMemo } from "react";
import Icon from "@Shared/components/Icon";
import { ICategory } from "@Interfaces/category";
import useCategoryTools from "@Hooks/useCategoryTools";
import useDataPath from "@Hooks/useDataPath";
import useLanguage from "@Hooks/useLanguage";
import {
  Wrapper,
  Header,
  Content,
  CategoryTitle,
  CloseIcon,
  ToolItem,
} from "./styles";

interface IProps {
  category: ICategory;
  onClose: () => void;
}

const CategoryTools = ({ category, onClose }: IProps) => {
  const { currentLang } = useLanguage();
  const { getKeyValue } = useDataPath();
  const { getToolsByCategoryId } = useCategoryTools();
  const tools = useMemo(
    () => (category ? getToolsByCategoryId(category._id) : []),
    [category]
  );
  function handleClose() {
    onClose();
  }
  console.log(tools);
  return (
    <Wrapper>
      <Header>
        <CategoryTitle>{getKeyValue(category, "name")}</CategoryTitle>
        <CloseIcon onClick={handleClose}>
          <Icon name="close" />
        </CloseIcon>
      </Header>
      <Content>
        {tools.map((item) => (
          <ToolItem
            href={"/" + currentLang + "/tools/interest-calc"}
            target="_blank"
            key={item._id}
          >
            {getKeyValue(item, "name")}
          </ToolItem>
        ))}
      </Content>
    </Wrapper>
  );
};

export default CategoryTools;
