import { useState, useRef } from "react";
import CategoryToolsSearch from "./CategoryToolsSearch";
import { SearchWrapper, Input, SearchButton } from "../styles";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import useLanguage from "@Hooks/useLanguage";
import useClickOutside from "@Hooks/useClickOutside";
import useLanding from "@Hooks/useLanding";
import useDataPath from "@Hooks/useDataPath";

type Props = {
  onShowedToolsList: () => void;
};
const SearchBox = ({ onShowedToolsList }: Props) => {
  const searchBoxRef = useRef<HTMLDivElement>(null);
  const [isOpenSearchModal, toggleSearchModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { direction } = useLanguage();
  const { landingPage } = useLanding();
  const { getKeyValue } = useDataPath();

  function handleInputChanged(e: React.FormEvent<HTMLInputElement>) {
    setSearchText(e.currentTarget.value);
  }
  function handleOnFocusInput() {
    if (!isOpenSearchModal) {
      onShowedToolsList();
      toggleSearchModal(true);
    }
  }
  useClickOutside(searchBoxRef, () => {
    if (isOpenSearchModal) {
      toggleSearchModal(false);
      setSearchText("");
    }
  });
  function handleClickedTools() {
    toggleSearchModal(false);
  }
  return (
    <div className="relative" ref={searchBoxRef}>
      <SearchWrapper>
        <Input
          placeholder={getKeyValue(landingPage, "herosearchplaceholder")}
          value={searchText}
          onChange={handleInputChanged}
          onFocus={handleOnFocusInput}
        />
        <SearchButton>
          {direction === "ltr" ? <BsChevronRight /> : <BsChevronLeft />}
        </SearchButton>
      </SearchWrapper>
      {isOpenSearchModal ? (
        <CategoryToolsSearch
          searchText={searchText}
          onItemClicked={handleClickedTools}
        />
      ) : null}
    </div>
  );
};

export default SearchBox;
