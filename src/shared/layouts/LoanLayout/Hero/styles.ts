import styled from "styled-components";
export const Wrapper = styled.div`
  ${apply`w-full bg-secondary-color text-white`}
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
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
