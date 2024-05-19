import styled from "styled-components";

const StyledNotFound = styled.div``;

const Container = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.8rem;
`;

const H3 = styled.h3`
  color: #1a1a1a;
  font-size: 2.8rem;
`;

const Span = styled.span`
  font-size: 2rem;
`;

function NotFound() {
  return (
    <StyledNotFound>
      <Container>
        <H3>No product found.</H3>
        <Span>(๑•́ -•̀)</Span>
      </Container>
    </StyledNotFound>
  );
}

export default NotFound;
