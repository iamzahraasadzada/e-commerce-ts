import styled from "styled-components";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { useAppSelector } from "../store";
import Basket from "../features/basket/Basket";
import SearchBar from "../components/Search/SearchBar";
import BasketButton from "../features/basket/BasketButton";

const StyledHeader = styled.div`
  /* overflow-x: hidden; */
  padding: 2rem 6rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
`;

export default function Header() {
  const basket = useAppSelector((store) => store.basket.isOpen);

  return (
    <StyledHeader>
      <Logo />
      <Navbar />
      <SearchBar />
      <BasketButton />
      {basket ? <Basket /> : null}
    </StyledHeader>
  );
}
