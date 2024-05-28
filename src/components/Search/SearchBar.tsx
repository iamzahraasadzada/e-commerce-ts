import { useState } from "react";
import toast from "react-hot-toast";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../store";
import { toggleSearch } from "../../features/basket/basketSlice";

const StyledSearchBar = styled.div`
  position: relative;
  width: 30rem;
  display: flex;
  background-color: #ffff;
  align-items: center;
  margin-left: auto;
  @media (max-width: 690px) {
    display: none;
  }
  z-index: 18;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 5;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Input = styled.input`
  width: 100%;
  background: #fff;
  padding-left: 4.8rem !important;
  border: 1px solid #e1e1e1;
  background: transparent;
  font-size: 1.2rem;
  padding: 1.2rem 1.6rem;
  font-weight: 700;
  box-shadow: 0;
  outline: 0;
  &&:focus {
    outline: none;
    border: 1px solid #c5c5c5 !important;
  }
`;

const Icon = styled(CiSearch)`
  position: absolute;
  left: 1.6rem;
  top: 0;
  bottom: 0;
  margin: auto;
  color: #7a7a7a;
  font-size: 1.6rem;
`;

export default function SearchBar() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchName, setSearchName] = useState("");
  const isOpen = useAppSelector((store) => store.basket.isOpenSearch);

  function onSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchName(e.target.value);
  }

  function handleEvent(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.keyCode === 13) {
      dispatch(toggleSearch(false));
      const name = searchName?.toLowerCase().trim();
      if (name?.length <= 2) {
        toast.error("Product name must be at least 3 characters long");
      } else {
        setSearchName("");
        navigate(`/search/${name}`);
      }
    }
  }

  return (
    <>
      {isOpen ? (
        <Overlay
          onClick={() => {
            dispatch(toggleSearch(false));
          }}
        />
      ) : null}
      <StyledSearchBar className={isOpen ? "opened" : ""}>
        <Icon />
        <Input
          type="text"
          name="searchBar"
          value={searchName}
          onKeyDown={(e) => handleEvent(e)}
          onChange={(e) => onSearchChange(e)}
          placeholder="Search product..."
        />
      </StyledSearchBar>
    </>
  );
}
