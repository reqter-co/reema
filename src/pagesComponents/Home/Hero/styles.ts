import styled from "styled-components";
type IProps = {
  img: string;
  direction: string;
};
export const Wrapper = styled.div<IProps>`
  ${apply`w-full bg-contain h-full`};
  z-index: 1;
  background-image: ${({ img, direction }) => `linear-gradient(
    ${direction === "ltr" ? "77deg" : "-77deg"},
    #f7f8fa 0%,
    #f7f8fa 63%,
    transparent 63%
    ),url(${img})`};

  ${tscreen`tab-port`} {
    ${apply`bg-cover`};
    background-image: ${({ img }) => `url(${img})`};
  }
`;

export const Section = styled.div`
  ${apply`max-w-5xl w-full h-full m-auto`};
  padding-top: 180px;
  ${tscreen`phone`} {
    padding-top: 100px;
  }
`;
export const Content = styled.div`
  ${apply`flex flex-col justify-start`};
  width: 65%;
  padding-inline-end: 30px;
  min-height: 620px;
  ${tscreen`tab-port`} {
    ${apply`w-full`};
    padding: 0px;
  }
`;

export const Title = styled.h1`
  ${apply`text-black font-semibold text-5xl text-center`};
  ${tscreen`phone`} {
    ${apply`text-4xl`};
  }
`;

export const Description = styled.div`
  ${apply`text-lg text-center mt-4`};
  ${tscreen`tab-port`} {
    ${apply`text-2xl`};
  }
  ${tscreen`phone`} {
    ${apply`text-sm`};
  }
`;

export const SearchWrapper = styled.div`
  ${apply`bg-white flex p-2 px-3 mt-10 shadow rounded-full`};
  min-height: 50px;
  ${tscreen`tab-land`} {
    margin-inline-start: 30px;
  }
  ${tscreen`tab-port`} {
    margin-inline-start: 0;
    ${apply`mx-10`};
  }
  ${tscreen`phone`} {
    ${apply`mx-5`};
  }
`;

export const Input = styled.input`
  ${apply`flex-1 border-none px-2`};
  &:focus {
    ${apply`outline-none`};
  }
`;

export const SearchButton = styled.button`
  ${apply`bg-secondary-color rounded-full text-white p-3 font-bold text-xl`};
`;
export const CategoriesWrapper = styled.div`
  ${apply`flex flex-wrap mt-10 w-full`};
  ${tscreen`tab-land`} {
    margin-inline-start: 30px;
  }
  ${tscreen`tab-port`} {
    ${apply`px-10`};
    margin-inline-start: 0px;
  }
  ${tscreen`tab-port`} {
    ${apply`px-5`};
  }
`;
export const CategoryItemWrapper = styled.div`
  ${apply`bg-white rounded-lg shadow text-center flex flex-wrap flex-col items-center justify-center cursor-pointer`};
  margin-inline-end: 15px;
  width: calc(25% - 15px);
  min-height: 120px;
  &:hover {
    ${apply`shadow-lg`};
  }
  ${tscreen`phone`} {
    ${apply`mb-4`};
    width: calc(50% - 15px);
  }
`;
export const CategoryItemTitle = styled.h3`
  ${apply`text-lg font-semibold mt-3`};
`;

export const CategoryIcon = styled.div`
  ${apply`text-3xl text-secondary-color text-center`};
`;
