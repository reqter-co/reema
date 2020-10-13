import { data as tools } from "@Core/categoryTools";
import useGlobalState from "@Hooks/useGlobal/useGlobalState";
import { Tool } from "@Interfaces/tool";

const useCategoryTools = () => {
  const { categories } = useGlobalState();
  const getCategories = () => {
    return categories;
  };
  const getCategoryToolsById = (categoryId: string): Tool[] => {
    return categoryId ? [] : [];
  };
  const getCategoryToolsByName = (searchText: string): Tool[] => {
    const data = searchText ? [] : [];
    return data;
  };
  return { getCategories, getCategoryToolsById, getCategoryToolsByName };
};

export default useCategoryTools;
