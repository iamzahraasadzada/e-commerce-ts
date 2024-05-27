import styled from "styled-components";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { useAppSelector } from "../store";
import Basket from "../features/basket/Basket";
import SearchBar from "../components/Search/SearchBar";
import BasketButton from "../features/basket/BasketButton";
import SearchButton from "./SearchButton";

const StyledHeader = styled.div`
  padding: 2rem 6rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
`;

const RightSide = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  gap: 1.5rem;
`;

export default function Header() {
  const basket = useAppSelector((store) => store.basket.isOpen);

  return (
    <StyledHeader>
      <Logo />
      <Navbar />
      <RightSide>
        <SearchBar />
        <BasketButton />
        <SearchButton />
      </RightSide>
      {basket ? <Basket /> : null}
    </StyledHeader>
  );
}
