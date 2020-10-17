import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "@Shared/components/Link";
import { Wrapper, Content, Logo, Menu, MenuItem } from "./styles";
import useDataPath from "@Hooks/useDataPath";
import { IHeader } from "@Interfaces/header";

interface IProps {
  data: IHeader;
}

const HeaderMenu = ({ data }: IProps): JSX.Element => {
  const { getValue } = useDataPath();
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
          <Logo>{getValue(data, "logotitle")}</Logo>
          <Menu>
            <MenuItem>{getValue(data, "contactuslinktitle")}</MenuItem>
            <MenuItem className="phone:hidden">
              <Link href="/login">{getValue(data, "loginlinktitle")}</Link>
            </MenuItem>
            <MenuItem className="phone:hidden">
              {getValue(data, "bloglinktitle")}
            </MenuItem>
          </Menu>
        </Content>
      </Wrapper>
    </>
  );
};

export default HeaderMenu;
