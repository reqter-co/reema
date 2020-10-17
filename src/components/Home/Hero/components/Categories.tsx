import { useMemo, useState } from "react";
import { ICategory } from "@Interfaces/category";
import SearchBox from "./SearchBox";
import CategoryItem from "./CategoryItem";
import CategoryTools from "./CategoryTools";
import { CategoriesWrapper } from "../styles";
import useCategoryTools from "@Hooks/useCategoryTools";

const Categories = () => {
  const [isOpenToolsList, toggleToolsList] = useState(false);
  const [selectedCategory, setCategory] = useState<ICategory >();
  const { getCategories } = useCategoryTools();
  const categories = useMemo(() => getCategories(), []);

  function handleClickCategory(category: ICategory) {
    setCategory(category);
    toggleToolsList(true);
  }
  function handleCloseCategoryTools() {
    toggleToolsList(false);
  }
  function handleShowedToolsList() {
    if (isOpenToolsList) {
      toggleToolsList(false);
    }
  }
  return (
    <>
      <SearchBox onShowedToolsList={handleShowedToolsList} />
      {isOpenToolsList && selectedCategory ? (
        <CategoryTools
          category={selectedCategory}
          onClose={handleCloseCategoryTools}
        />
      ) : (
        <CategoriesWrapper>
          {categories
            ? categories.map((item: ICategory) => (
                <CategoryItem
                  key={item._id}
                  data={item}
                  onClickCategory={handleClickCategory}
                />
              ))
            : null}
        </CategoriesWrapper>
      )}
    </>
  );
};

export default Categories;
