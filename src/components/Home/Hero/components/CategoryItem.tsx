import { FC } from "react";
import { ICategory } from "@Interfaces/category";
import Icon from "@Shared/components/Icon";
import {
  CategoryItemWrapper,
  CategoryItemTitle,
  CategoryIcon,
} from "../styles";
import useDataPath from "@Hooks/useDataPath";

interface IProps {
  data: ICategory;
  onClickCategory: (category: ICategory) => void;
}

const CategoryItem: FC<IProps> = ({ data, onClickCategory }) => {
  const { getKeyValue } = useDataPath();
  function handleClicked() {
    onClickCategory(data);
  }
  return (
    <CategoryItemWrapper onClick={handleClicked}>
      <CategoryIcon>
        <Icon name={data.icon} />
      </CategoryIcon>
      <CategoryItemTitle>{getKeyValue(data, "name")}</CategoryItemTitle>
    </CategoryItemWrapper>
  );
};

export default CategoryItem;
