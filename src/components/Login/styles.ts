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
export const ForgotPassword = styled.div`
  ${apply`text-gray-900 text-sm`}
`;
export const Submit = styled.button`
  ${apply`bg-secondary-color text-white py-3 rounded mt-5 text-lg`};
  &:hover {
    ${apply`bg-orange-600`};
  }
`;

export const SocialButtons = styled.div`
  ${apply`flex mt-3`};
`;
export const Button = styled.button`
  ${apply`bg-gray-100 flex-1 text-center py-3 flex items-center justify-center text-xl rounded border border-gray-200`};
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
