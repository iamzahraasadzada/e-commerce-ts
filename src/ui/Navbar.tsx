import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Link = styled(NavLink)`
  padding: 1rem 1.5rem;
  font-size: 1.4rem;
  opacity: 0.5;
  @media (max-width: 640px) {
    padding: 0 1.5rem;
  }
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
    </StyledNavbar>
  );
}
