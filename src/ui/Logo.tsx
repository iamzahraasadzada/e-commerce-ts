import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled(NavLink)``;

const LogoImage = styled.img`
  width: 15rem;
  height: inherit;
  object-fit: contain;
`;

export default function Logo() {
  return (
    <StyledLogo to="/">
      <LogoImage src="/logo-full.png" alt="logo" />
    </StyledLogo>
  );
}
