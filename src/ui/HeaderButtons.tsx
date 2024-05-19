import styled from "styled-components";
import BasketButton from "../features/basket/BasketButton";

const StyledButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 5.6rem;
  margin-left: auto;
`;

const SignButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const ButtonUp = styled.button`
  font-size: 1.2rem;
  padding: 1.2rem 1.6rem;
  background: #101010;
  border: 1px solid #101010;
  color: #fff;
  font-weight: 700;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  transition: all 0.3s ease;
`;

const ButtonIn = styled.button`
  font-size: 1.2rem;
  padding: 1.2rem 1.6rem;
  background: #f2f2f2;
  color: #7d7d7d;
  border: 1px solid #e1e1e1;
  font-weight: 700;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  transition: all 0.3s ease;
`;

function Buttons() {
  return (
    <StyledButtons>
      <BasketButton />
      <SignButtons>
        <ButtonUp>Sign Up</ButtonUp>
        <ButtonIn>Sign In</ButtonIn>
      </SignButtons>
    </StyledButtons>
  );
}

export default Buttons;
