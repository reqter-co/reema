import styled from "styled-components";
import Section from "@Shared/components/Section";
export const Wrapper = styled(Section)`
  ${apply`py-20`}
`;
export const Title = styled.h1`
  ${apply`text-5xl text-gray-900 font-bold text-center`}
`;
export const Container = styled.div`
  ${apply`flex justify-between mt-5`};
  ${tscreen`phone`} {
    ${apply`flex-col`}
  }
`;
export const ItemWrapper = styled.div`
  ${apply`flex flex-col items-center text-center`};
  padding-inline-end: 30px;
  ${tscreen`phone`} {
    padding-inline-end: 0px;
  }
`;
export const Icon = styled.div`
  max-width: 150px;
  svg {
    width: 200px;
    height: 200px;
  }
`;
export const ItemTitle = styled.h2`
  ${apply`text-2xl text-gray-800 font-semibold`}
`;
export const Description = styled.h3`
  ${apply`text-gray-700  mt-4`}
`;
