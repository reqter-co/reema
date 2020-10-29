import { useState } from "react";
import { Wrapper, MenuContainer, UserIcon, Name } from "./styles";
import Icon from "@Shared/components/Icon";
import DropDown from "./DropDown";

const UserMenu = ({ userName }: { userName: string }): JSX.Element => {
  const [isOpenMenu, toggleUserMenu] = useState(false);
  function handleClick() {
    toggleUserMenu((prev) => !prev);
  }

  return (
    <>
      <Wrapper>
        <MenuContainer onClick={handleClick}>
          <UserIcon>
            <Icon name="user" />
          </UserIcon>
          <Name>
            <span className="text-lgs">
              <Icon name="caret-down" />
            </span>
            {userName}
          </Name>
        </MenuContainer>
      </Wrapper>
      {isOpenMenu && <DropDown onClickOutside={handleClick} />}
    </>
  );
};

export default UserMenu;
