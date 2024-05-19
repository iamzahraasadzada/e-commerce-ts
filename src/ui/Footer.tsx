import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFooter = styled.div`
  padding: 0.5rem 1rem 3rem;
  background: #f0f0f0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Container = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FooterCol = styled.div``;

const Span = styled.span`
  color: #4a4a4a;
  font-size: 1.2rem;
`;

const StyledLink = styled(Link)`
  color: #101010;
  text-decoration: underline;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 15rem;
  height: 6rem;
  object-fit: contain;
`;

const H5 = styled.h5`
  color: #1a1a1a;
  font-size: 1.3rem;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <FooterCol>
          <strong>
            <Span>
              Developed by&nbsp;
              <StyledLink to="https://github.com/jgudo">
                ASADZADA ZAHRA
              </StyledLink>
            </Span>
          </strong>
        </FooterCol>
        <FooterCol>
          <Column>
            <Logo src="/logo-full.png" alt="salinka-logo" />
            <H5>©&nbsp;2024</H5>
          </Column>
        </FooterCol>
        <FooterCol>
          <strong>
            <Span>
              Fork this project &nbsp;
              <StyledLink to="https://github.com/iamzahraasadzada/e-commerce">
                HERE
              </StyledLink>
            </Span>
          </strong>
        </FooterCol>
      </Container>
    </StyledFooter>
  );
}
