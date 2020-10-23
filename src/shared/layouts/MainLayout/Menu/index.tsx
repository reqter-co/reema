import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "@Shared/components/Link";
import { Wrapper, Content, Logo, Menu, MenuItem } from "./styles";
import useDataPath from "@Hooks/useDataPath";
import useAuth from "@Hooks/useAuth";
import useUser from "@Hooks/useUser";
import { IHeader } from "@Interfaces/header";
import UserMenu from "@Shared/components/UserMenu";

interface IProps {
  data: IHeader;
}

const HeaderMenu = ({ data }: IProps): JSX.Element => {
  const { isAuthenticated } = useAuth();
  const { user } = useUser();
  const { getKeyValue } = useDataPath();
  const [isSticky, setSticky] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset < 45) setSticky(false);
      else setSticky(true);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const checkIsTransparent = (): boolean => {
    return router.asPath === `/${router.query.lang}`;
  };
  return (
    <>
      <Wrapper
        className={isSticky || !checkIsTransparent() ? "shadow-md" : ""}
        isSticky={isSticky}
        isTransparent={checkIsTransparent()}
      >
        <Content>
          <Logo>{getKeyValue(data, "logotitle")}</Logo>
          <Menu>
            <MenuItem className="phone:hidden">
              {!isAuthenticated && !user ? (
                <Link href="/login">{getKeyValue(data, "loginlinktitle")}</Link>
              ) : (
                <UserMenu userName={user?.name as string} />
              )}
            </MenuItem>
            <MenuItem>{getKeyValue(data, "contactuslinktitle")}</MenuItem>
            <MenuItem className="phone:hidden">
              {getKeyValue(data, "bloglinktitle")}
            </MenuItem>
          </Menu>
        </Content>
      </Wrapper>
    </>
  );
};

export default HeaderMenu;
