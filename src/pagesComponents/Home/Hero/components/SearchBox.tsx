import { useState, useRef } from "react";
import CategoryToolsSearch from "./CategoryToolsSearch";
import { SearchWrapper, Input, SearchButton } from "../styles";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import useTranslation from "@Hooks/useTranslation";
import useClickOutside from "@Hooks/useClickOutside";
import { Tool } from "@Interfaces/tool";

const SearchBox = () => {
  const searchBoxRef = useRef<HTMLDivElement>(null);
  const [isOpenSearchModal, toggleSearchModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { direction } = useTranslation();
  function handleInputChanged(e: React.FormEvent<HTMLInputElement>) {
    setSearchText(e.currentTarget.value);
  }
  function handleOnFocusInput(e: React.FormEvent<HTMLInputElement>) {
    if (!isOpenSearchModal) {
      toggleSearchModal(true);
    }
  }

  useClickOutside(searchBoxRef, () => {
    if (isOpenSearchModal) {
      toggleSearchModal(false);
      setSearchText("");
    }
  });
  function handleClickedTools(tools: Tool) {
    toggleSearchModal(false);
  }

  return (
    <div className="relative" ref={searchBoxRef}>
      <SearchWrapper>
        <Input
          placeholder="Enter the tool you need"
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
