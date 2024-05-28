import { BiSearchAlt2 } from "react-icons/bi";
import styled from "styled-components";
import { toggleSearch } from "../features/basket/basketSlice";
import { useAppDispatch } from "../store";

const StyledSearchButton = styled(BiSearchAlt2)`
  display: none;
  font-size: 2.2rem;
  @media (max-width: 690px) {
    display: initial;
  }
`;

export default function SearchButton() {
  const dispatch = useAppDispatch();
  return (
    <StyledSearchButton
      onClick={() => {
        dispatch(toggleSearch(true));
      }}
    />
  );
}
