import styled from "styled-components";

type Props = {
  bgColor?: string;
  bgImage?: string;
};
export const Wrapper = styled.div<Props>`
  background: ${({ bgColor, bgImage }) =>
    bgImage ? `url(${bgImage})` : bgColor ? bgColor : theme`colors.white`};
  ${apply`py-20 bg-cover`}
`;
export const Content = styled.div`
  ${apply`flex flex-col max-w-5xl m-auto`}
`;
