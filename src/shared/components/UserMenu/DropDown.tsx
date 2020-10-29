import {  useRef } from "react";
import { mutate } from "swr";
import { MenuWrapper, MenuIcon, MenuItem } from "./styles";
import useLanguage from "@Hooks/useLanguage";
import useClickOutside from "@Hooks/useClickOutside";
import useRouter from "@Hooks/useRouter";
import useAuth from "@Hooks/useAuth";
import Icon from "@Shared/components/Icon";
import Link from "@Shared/components/Link";

const UserMenu = ({
  onClickOutside,
}: {
  onClickOutside: () => void;
}): JSX.Element => {
  // const { mutate } = useUser();
  const { logout } = useAuth();
  const { push } = useRouter();
  const { direction } = useLanguage();
  const menuRef = useRef<HTMLUListElement>(null);
  useClickOutside(menuRef, () => {
    onClickOutside();
  });

  function handleLogout() {
    push("/home");
    logout();
    onClickOutside();
    mutate("api_user", null);
  }

  return (
    <MenuWrapper direction={direction} ref={menuRef}>
      <Link href="/profile">
        <MenuItem>
          <MenuIcon>
            <Icon name="health" />
          </MenuIcon>
          Profile
        </MenuItem>
      </Link>
      <Link href="/settings">
        <MenuItem>
          <MenuIcon>
            <Icon name="math" />
          </MenuIcon>
          Account
        </MenuItem>
      </Link>
      <MenuItem>
        <MenuIcon>
          <Icon name="financial" />
        </MenuIcon>
        Subscribe
      </MenuItem>
      <MenuItem>
        <MenuIcon>
          <Icon name="legal" />
        </MenuIcon>
        Privacy
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <MenuIcon>
          <Icon name="time" />
        </MenuIcon>
        Logout
      </MenuItem>
    </MenuWrapper>
  );
};

export default UserMenu;
