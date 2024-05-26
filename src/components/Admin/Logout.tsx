import styled from "styled-components";
import { useLogout } from "../../features/authentication/useLogout";
import MiniSpiner from "../../ui/MiniSpiner";
import { TbLogout2 } from "react-icons/tb";

const LogoutButton = styled.button`
  font-size: 2.5rem;
  margin-left: auto;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 0;
  outline: 0;
  justify-content: center;
  color: #bf3131;
  font-weight: 700;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    color: #982727;
    text-decoration: none;
  }
`;

export default function Logout() {
  const { logout, isPending } = useLogout();
  function handleClick() {
    logout();
  }

  return (
    <LogoutButton onClick={handleClick}>
      {isPending ? <MiniSpiner color={"#101010"} /> : <TbLogout2 />}
    </LogoutButton>
  );
}
