import styled from "styled-components";
import { useAppDispatch } from "../../store";
import { remove } from "./basketSlice";

const StyledRemoveBasketButton = styled.button`
  font-size: 1.2rem;
  padding: 1.2rem 1.6rem;
  background: #101010;
  border: 1px solid #101010;
  color: #fff;
  font-weight: 700;
  position: relative;

  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    border: 1px solid #e1e1e1 !important;
    background: #e1e1e1 !important;
    text-decoration: none !important;
  }
`;

interface RemoveBasketProps {
  className: string;
  dataId: number;
}

export default function RemoveBasket({ dataId, className }: RemoveBasketProps) {
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(remove(dataId));
  }

  return (
    <StyledRemoveBasketButton
      onClick={() => handleClick()}
      className={className}
    >
      Remove from Basket
    </StyledRemoveBasketButton>
  );
}
