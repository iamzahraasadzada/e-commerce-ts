import styled from "styled-components";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Buttons from "./HeaderButtons";
import { useAppSelector } from "../store";
import Basket from "../features/basket/Basket";
import SearchBar from "../components/Search/SearchBar";

const StyledHeader = styled.div`
  padding: 3rem 1rem 0.5rem;
  background: #f9f9f9;
`;

const Container = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

export default function Header() {
  const basket = useAppSelector((store) => store.basket.isOpen);

  return (
    <StyledHeader>
      <Container>
        <Logo />
        <Navbar />
        <SearchBar />
        <Buttons />
      </Container>
      {basket ? <Basket /> : null}
    </StyledHeader>
  );
}
