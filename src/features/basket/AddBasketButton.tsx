import styled from "styled-components";
import { useAppDispatch } from "../../store";
import { addProduct } from "./basketSlice";
import { basketProduct } from "../../types/Products";

const StyledAddBasketButton = styled.button`
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
    background: #2a2a2a;
    border: 1px solid #2a2a2a;
    text-decoration: none;
  }
`;

interface addBasketButtonProps {
  data: basketProduct | undefined;
  className: string;
}

export default function AddBasketButton({
  data,
  className,
}: addBasketButtonProps) {
  const dispatch = useAppDispatch();

  function handleClick() {
    if (data) {
      dispatch(addProduct(data));
    }
  }

  return (
    <StyledAddBasketButton onClick={() => handleClick()} className={className}>
      Add to basket
    </StyledAddBasketButton>
  );
}
