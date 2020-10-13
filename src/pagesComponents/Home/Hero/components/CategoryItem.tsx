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
  const { getValue } = useDataPath();
  function handleClicked() {
    onClickCategory(data);
  }
  return (
    <CategoryItemWrapper onClick={handleClicked}>
      <CategoryIcon>
        <Icon name={data.icon} />
      </CategoryIcon>
      <CategoryItemTitle>{getValue(data, "name")}</CategoryItemTitle>
    </CategoryItemWrapper>
  );
};

export default CategoryItem;
