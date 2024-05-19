import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledSearchBar = styled.div`
  position: relative;
  width: 30rem;
  display: flex;
  align-items: center;
  margin-left: 10rem;
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
  const navigate = useNavigate();
  const [searchName, setSearchName] = useState("");

  function onSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchName(e.target.value);
  }

  function handleEvent(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.keyCode === 13) {
      const name = searchName?.toLowerCase().trim();
      setSearchName("");
      navigate(`/search/${name}`);
    }
  }

  return (
    <StyledSearchBar>
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
  );
}
