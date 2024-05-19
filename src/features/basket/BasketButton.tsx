import styled from "styled-components";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../store";
import { toggle } from "./basketSlice";

const StyledBasketButton = styled(MdOutlineShoppingBag)`
  color: #1a1a1a;
  text-decoration: none;
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: 700;
  position: relative;
  cursor: pointer;

  &&:hover {
    background: none;
    border: none;
  }
`;

const BasketButtonContainer = styled.div`
  position: relative;
`;

const Quantity = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: rgba(247, 45, 45, 0.986);
  position: absolute;
  top: -1.2rem;
  right: -1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;

const Span = styled.span`
  font-size: 1.1rem;
  color: #fff;
`;

export default function BasketButton() {
  const dispatch = useAppDispatch();

  const quantity = useAppSelector(
    (state) => state.basket.basketProducts
  )?.length;

  function handleClick() {
    dispatch(toggle(true));
  }

  return (
    <BasketButtonContainer>
      {quantity > 0 ? (
        <Quantity>
          <Span>{quantity}</Span>
        </Quantity>
      ) : null}

      <StyledBasketButton
        className="basket_button"
        onClick={() => handleClick()}
      />
    </BasketButtonContainer>
  );
}
