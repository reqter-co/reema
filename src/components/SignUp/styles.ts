import styled from "styled-components";

export const Logo = styled.div`
  ${apply`text-secondary-color font-semibold p-2 text-lg border border-secondary-color text-center rounded-lg`};
  width: 120px;
`;
export const Content = styled.form`
  ${apply`flex-1 flex flex-col m-auto justify-center w-full px-10`}
  ${tscreen`phone`} {
    ${apply`px-5`}
  }
`;
export const Title = styled.h1`
  ${apply`text-4xl font-semibold`}
  ${tscreen`phone`} {
    ${apply`text-3xl`}
  }
`;

export const Description = styled.h3`
  ${apply`text-gray-700 mb-10`}
`;
export const Submit = styled.button`
  ${apply`bg-secondary-color text-white py-3 rounded mt-5 text-lg`};
  &:hover {
    ${apply`bg-orange-600`};
  }
`;
export const TextLine = styled.p`
  ${apply`text-gray-500`};
  margin: 25px 10px 0 10px;
  font-size: 13px;
  &:before {
    display: inline-block;
    content: " ";
    height: 2px;
    width: 20%;
    ${apply`bg-gray-200`};
    margin-inline-end: 6%;
    ${tscreen`phone`} {
      width: 15%;
    }
  }

  &:after {
    display: inline-block;
    content: " ";
    height: 2px;
    width: 20%;
    margin-inline-start: 6%;
    ${apply`bg-gray-200`}
    ${tscreen`phone`} {
      width: 15%;
    }
  }
`;

export const SocialButtons = styled.div`
  ${apply`flex mt-3`};
`;
export const Button = styled.button`
  ${apply`bg-gray-100 flex-1 text-center py-3 flex items-center justify-center text-lg`};
  &:hover {
    ${apply`bg-gray-200`};
  }
  &:first-child {
    margin-inline-end: 10px;
  }
`;

export const SignupRow = styled.div`
  ${apply`flex items-center mt-4 justify-center`};
`;
export const SignupText = styled.h3`
  ${apply`text-gray-700 text-sm`};
`;
export const SignupLinkText = styled.div`
  ${apply`text-secondary-color text-sm`};
  margin-inline-start: 5px;
`;
