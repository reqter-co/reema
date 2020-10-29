import styled from "styled-components";
export const Wrapper = styled.h2`
  ${apply`text-gray-600 text-sm text-center relative mt-5`};
  z-index:2;
  &:after {
      content: "";
      ${apply`absolute left-0 right-0 border-t border-gray-200`};
      top: 50%;
      z-index: -1;
    }
  }
`;
export const Text = styled.span`
  ${apply`text-gray-500 px-5 inline-block bg-white`};
`;
