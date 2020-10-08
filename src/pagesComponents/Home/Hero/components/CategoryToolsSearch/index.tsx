import { useMemo } from "react";
import { Wrapper, Content, ToolItem } from "./styles";
import useCategoryTools from "@Hooks/useCategoryTools";
import { Tool } from "@Interfaces/tool";

interface IProps {
  searchText: string;
  onItemClicked: (item: Tool) => void;
}

const CategoryToolsSearch = ({ searchText, onItemClicked }: IProps) => {
  const { getCategoryToolsByName } = useCategoryTools();
  const tools = useMemo(() => getCategoryToolsByName(searchText), [searchText]);
  function handleClicked(item: Tool) {
    onItemClicked(item);
  }
  return (
    <Wrapper>
      <Content>
        {tools.map((item) => (
          <ToolItem key={item.id} onClick={() => handleClicked(item)}>
            {item.title}
          </ToolItem>
        ))}
      </Content>
    </Wrapper>
  );
};

export default CategoryToolsSearch;
