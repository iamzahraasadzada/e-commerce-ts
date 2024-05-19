import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../store";
import { clear, toggle } from "./basketSlice";
import { productsTypes } from "../../types/Products";
import BasketProduct from "./BasketProduct";

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 5;
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledBasket = styled.div`
  width: 60rem;
  height: 100vh;
  background: #fff;
  position: fixed;
  top: 0;
  right: 0;
  /* transform: translateX(100%); */
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.08);
  -webkit-transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  -moz-transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  -o-transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  -ms-transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  z-index: 100;
`;

const BasketHeader = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  top: -20px;
  background: #fff;
  z-index: 60;
  padding: 2.4rem 0;
`;

const H3 = styled.h3`
  color: #1a1a1a;
  font-size: 1.8rem;
`;

const Span = styled.span`
  color: #4a4a4a;
  font-size: 1.2rem;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const CloseButton = styled.button`
  font-size: 1.2rem;
  padding: 1.2rem 1.6rem;
  border: 1px solid #e1e1e1;
  color: #4a4a4a;
  background: transparent;
  &:hover {
    cursor: pointer;
    border: 1px solid #e1e1e1;
    background: #e1e1e1;
  }
`;

const ClearButton = styled.button`
  opacity: 0.5;
  font-size: 1.2rem;
  padding: 1.2rem 1.6rem;
  border: 1px solid #e1e1e1;
  color: #4a4a4a;
  background-color: transparent;
  &:hover {
    cursor: not-allowed;
    border: 1px solid #e1e1e1;
    background: #e1e1e1;
  }
`;

const BasketBody = styled.div`
  padding: 1.6rem 1.6rem 100px;
  overflow-y: scroll;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const P = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const BasketFooter = styled.div`
  background: #fff;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const BasketTotal = styled.div``;

const FooterP = styled.p`
  font-size: 1.2rem;
  color: #4a4a4a;
  line-height: 2.4rem;
`;

const SubTotalAmount = styled.h5`
  color: #1a1a1a;
  margin: 1.2rem 0;
  font-size: 2.4rem;
`;

const CheckoutButton = styled.button`
  cursor: not-allowed;
  opacity: 0.5;
  font-size: 1.5rem;
  padding: 1.6rem 3.2rem;
  background: #101010;
  border: 1px solid #101010;
  color: #fff;
  font-weight: 700;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  transition: all 0.3s ease;
`;

export default function Basket() {
  const dispatch = useAppDispatch();

  const basket = useAppSelector((store) => store.basket.basketProducts);

  function closeBasket() {
    dispatch(toggle(false));
  }

  function handleClear() {
    dispatch(clear());
  }

  const subTotal = basket?.reduce((acc, obj: productsTypes) => {
    return acc + obj.price;
  }, 0);

  return (
    <>
      <Overlay onClick={() => closeBasket()} />
      <StyledBasket className="basket">
        <BasketBody>
          <BasketHeader>
            <H3>
              My Basket &nbsp;<Span>(0 item)</Span>
            </H3>
            <Buttons>
              <CloseButton onClick={() => closeBasket()}>Close</CloseButton>
              <ClearButton
                onClick={() => handleClear()}
                className={basket?.length > 0 ? "clearBtn" : ""}
              >
                Clear Basket
              </ClearButton>
            </Buttons>
          </BasketHeader>
          {basket?.length > 0 ? (
            basket?.map((data) => <BasketProduct data={data} key={data.id} />)
          ) : (
            <P>Your basket is empty</P>
          )}
        </BasketBody>
        <BasketFooter>
          <BasketTotal>
            <FooterP>Subtotal Amout:</FooterP>
            <SubTotalAmount>$ {subTotal.toFixed(2)}</SubTotalAmount>
          </BasketTotal>
          <CheckoutButton>Chceck Out</CheckoutButton>
        </BasketFooter>
      </StyledBasket>
    </>
  );
}
