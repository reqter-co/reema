import React from "react";
import { Wrapper, Container, Title, Description } from "./styles";

interface MainProps {}
const LoanLayoutHero: React.FC<MainProps> = (): JSX.Element => {
  return (
    <Wrapper>
      <Container>
        <Title>Income Tax Calculator, Sweden</Title>
        <Description>Find how much your salary is after tax</Description>
      </Container>
    </Wrapper>
  );
};
export default LoanLayoutHero;
