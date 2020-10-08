import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #2c3040;
`;
export const Container = styled.div`
  ${apply`py-16 flex items-center max-w-6xl m-auto`};
`;
export const Left = styled.div`
  ${apply`flex`};
  margin-inline-end: 100px;
`;
export const SocialIcon = styled.a`
  ${apply`rounded-full flex items-center justify-center bg-gray-900 text-3xl text-white cursor-pointer`};
  margin-inline-end: 20px;
  width: 66px;
  height: 66px;
  background: rgba(255, 255, 255, 0.06);
  -webkit-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  transition: all 0.2s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.13);
  }
`;
export const Right = styled.div`
  ${apply`flex-1 flex justify-between items-center`};
`;
export const Column = styled.div`
  ${apply`flex flex-col`};
`;
export const Link = styled.a`
  ${apply`text-white mb-2 flex items-center cursor-pointer`};
  &:hover {
    ${apply`underline`};
  }
`;
export const CompanyName = styled.div`
  ${apply`text-white mb-2`};
`;

export const Logo = styled.div`
  ${apply`cursor-pointer bg-primary-color text-white text-2xl px-5 py-1 rounded font-semibold`}
`;
