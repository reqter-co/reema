import styled from "styled-components";
export const Main = styled.div``;
export const Content = styled.div`
  ${apply`max-w-5xl m-auto`};
`;

export const Container = styled.div`
  ${apply`z-50 w-full relative flex`};
  height: 400px;
  top: -100px;
`;

export const FormContainer = styled.div`
  ${apply`flex-1 bg-white shadow rounded`};
  height: 150px;
  margin-inline-end: 40px;
`;

export const Sidebar = styled.div`
  width: 200px;
  svg {
    margin-top: -100px;
    width: 300px;
  }
`;
