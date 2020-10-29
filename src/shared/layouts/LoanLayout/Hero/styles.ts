import styled from "styled-components";
export const Wrapper = styled.div<{ direction: string }>`
  ${apply`w-full bg-green-400 text-white`};
  -webkit-clip-path: ${({ direction }) =>
    direction === "ltr"
      ? "polygon(0 0, 100% 0, 100% 75%, 0 100%)"
      : "polygon(0 0, 100% 0, 100% 100%, 0 75%)"};
  clip-path: ${({ direction }) =>
    direction === "ltr"
      ? "polygon(0 0, 100% 0, 100% 75%, 0 100%)"
      : "polygon(0 0, 100% 0, 100% 100%, 0 75%)"};
  height: 300px;
`;
export const Container = styled.div`
  ${apply`max-w-5xl m-auto pt-16`}
`;
export const Title = styled.h1`
  ${apply`text-3xl font-semibold`}
`;
export const Description = styled.h3`
  ${apply`text-base mt-2`}
`;
