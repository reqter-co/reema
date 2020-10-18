import { useMemo } from "react";
import { Wrapper, Content, ToolItem } from "./styles";
import useCategoryTools from "@Hooks/useCategoryTools";
import useDataPath from "@Hooks/useDataPath";
import { ITools } from "@Interfaces/tools";

interface IProps {
  searchText: string;
  onItemClicked: (item: ITools) => void;
}

const CategoryToolsSearch = ({ searchText, onItemClicked }: IProps) => {
  const { getKeyValue } = useDataPath();
  const { getToolsByCategoryName } = useCategoryTools();
  const tools = useMemo(() => getToolsByCategoryName(searchText), [searchText]);
  function handleClicked(item: ITools) {
    onItemClicked(item);
  }
  return (
    <Wrapper>
      <Content>
        {tools.map((item) => (
          <ToolItem key={item._id} onClick={() => handleClicked(item)}>
            {getKeyValue(item, "name")}
          </ToolItem>
        ))}
      </Content>
    </Wrapper>
  );
};

export default CategoryToolsSearch;
