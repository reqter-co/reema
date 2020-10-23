import styled from "styled-components";
type Props = {
  isSticky?: boolean;
  isTransparent?: boolean;
  selected?: boolean;
};
export const Wrapper = styled.header`
  height: 70px;
  ${apply`w-full bg-white z-50 w-full`};
`;
export const Content = styled.div`
  ${apply`max-w-6xl m-auto h-full flex items-center relative`};
`;
export const Logo = styled.div`
  ${apply`cursor-pointer absolute left-0 bg-primary-color text-white text-2xl px-5 py-1 rounded font-semibold`}
  ${tscreen`tab-land`} {
    left: 10px;
  }
`;
export const Menu = styled.ul`
  ${apply`flex justify-center absolute right-0 items-center`};
  direction: rtl;
`;
export const MenuItem = styled.li`
  ${apply`font-bold px-6 cursor-pointer text-black text-lg`}
`;
