import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.div``;

const Link = styled(NavLink)`
  padding: 1rem 1.5rem;
  font-size: 1.4rem;
  opacity: 0.5;
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
    </StyledNavbar>
  );
}
