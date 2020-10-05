import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Wrapper, Content, Logo, Menu, MenuItem } from "./styles";

const HeaderMenu = (): JSX.Element => {
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
    return router.pathname === "/";
  };

  return (
    <>
      <Wrapper
        className={isSticky || !checkIsTransparent() ? "shadow-md" : ""}
        isSticky={isSticky}
        isTransparent={checkIsTransparent()}
      >
        <Content>
          <Logo>Reema</Logo>
          <Menu>
            <MenuItem>Menu</MenuItem>
            <MenuItem>Login</MenuItem>
            <MenuItem>Blog</MenuItem>
          </Menu>
        </Content>
      </Wrapper>
    </>
  );
};

export default HeaderMenu;
