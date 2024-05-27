import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled(NavLink)`
  width: 15rem;
  height: 5rem;
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export default function Logo() {
  return (
    <StyledLogo to="/">
      <LogoImage src="/logo-full.png" alt="logo" />
    </StyledLogo>
  );
}
