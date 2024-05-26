import styled from "styled-components";
import Logo from "../../ui/Logo";
import Logout from "./Logout";

const StyledHeader = styled.div`
  padding: 2rem 6rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Logout />
    </StyledHeader>
  );
}
