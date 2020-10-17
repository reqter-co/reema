import styled from "styled-components";

export const Wrapper = styled.div`
  ${apply`flex flex-col justify-center items-center bg-primary-color text-white`};
  flex: 1.5;
  ${tscreen`tab-port`} {
    ${apply`hidden`};
  }
`;
export const Title = styled.h1`
  ${apply`text-5xl font-semibold max-w-lg`};
`;
export const Description = styled.h3`
  ${apply`text-gray-100 max-w-lg`};
`;
export const Image = styled.img`
  ${apply`max-w-lg`};
`;
