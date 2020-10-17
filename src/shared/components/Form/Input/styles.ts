import styled from "styled-components";

export const Input = styled.input`
  ${apply`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight mb-4`}
  &:focus {
    ${apply`outline-none shadow`}
  }
`;
