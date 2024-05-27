import styled from "styled-components";
import { useAppDispatch } from "../../store";
import { remove } from "../../features/basket/basketSlice";

const StyledRemoveBasketButton = styled.button`
  font-size: 1.2rem;
  padding: 1.2rem 1.6rem;
  background: #e1e1e1;
  border: 1px solid #9d9d9d !important;
  color: black !important;
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
    background: #f0f0f0 !important;
    text-decoration: none !important;
  }
`;

interface RemoveBasketProps {
  className: string;
  dataId: number | undefined;
}

export default function RemoveBasket({ dataId }: RemoveBasketProps) {
  const dispatch = useAppDispatch();

  function handleClick() {
    if (dataId === undefined) return;
    dispatch(remove(dataId));
  }

  return (
    <StyledRemoveBasketButton onClick={() => handleClick()}>
      Remove from Basket
    </StyledRemoveBasketButton>
  );
}
