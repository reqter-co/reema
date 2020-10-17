import useLanding from "@Hooks/useLanding";
import useDataPath from "@Hooks/useDataPath";
import { ITools } from "@Interfaces/tools";

const useCategoryTools = () => {
  const { categories, tools } = useLanding();
  const { getValue } = useDataPath();
  const getCategories = () => {
    return categories;
  };
  const getToolsByCategoryId = (categoryId: string): ITools[] => {
    return tools
      ? tools.filter((item: ITools) => item.categoryid._id === categoryId)
      : [];
  };
  const getToolsByCategoryName = (searchText: string): ITools[] => {
    return tools
      ? tools.filter((item: ITools) => {
          const name = getValue(item, "name") as string;
          return name?.toLowerCase().includes(searchText.toLowerCase());
        })
      : [];
  };
  return { getCategories, getToolsByCategoryId, getToolsByCategoryName };
};

export default useCategoryTools;
