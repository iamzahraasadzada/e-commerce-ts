import { IoClose } from "react-icons/io5";
import { useAppDispatch } from "../../store";
import {
  decreaseQuantity,
  increaseQuantity,
  remove,
  toggle,
} from "./basketSlice";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { basketProduct } from "../../types/Products";
import { capitalizeFirstLetter } from "../../utils/helper";
import { LazyLoadImage } from "react-lazy-load-image-component";

const StyledBasketProduct = styled.div`
  border: 1px solid #e1e1e1;
  margin: 1.4rem 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 4rem 10rem 1fr;
  align-items: center;
  position: relative;
`;

const QuantityButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 100%;
  gap: 0.2rem;
`;

const Button = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: 1px solid #cccccc;
  text-align: center;
  padding: 2rem 0;
  cursor: pointer;
  &:hover {
    background-color: #e5e5e5;
  }
`;

const ImageBox = styled.div`
  width: 9rem;
  height: 9rem;
  position: relative;
  padding: 1rem;
`;

const Image = styled(LazyLoadImage)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
  width: 14rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
`;

const Price = styled.span`
  color: #1a1a1a;
  font-weight: 700;
  padding: 1rem;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`;

const RemoveButton = styled.button`
  font-size: 1.2rem;
  padding: 1.2rem 1.6rem;
  border: 1px solid #e1e1e1;
  padding: 1rem;
  color: #4a4a4a;
  background: transparent;
  margin-right: 1rem;
  position: absolute;
  top: 1rem;
  right: 0.5rem;
`;

const QunatityBox = styled.div``;

const Span = styled.span`
  color: #8d8d8d;
  font-size: 1.2rem;
`;

const Quantity = styled.p``;

interface BasketProductProps {
  data: basketProduct;
}

export default function BasketProduct({ data }: BasketProductProps) {
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(toggle(false));
  }

  function handleRemove(id: number) {
    dispatch(remove(id));
  }

  return (
    <StyledBasketProduct>
      <Grid>
        <QuantityButtons>
          <Button
            className={data?.quantity === 10 ? "disable" : ""}
            onClick={() => {
              if (data?.quantity === 10) return;
              dispatch(increaseQuantity(data?.id));
            }}
          >
            +
          </Button>
          <Button
            className={data?.quantity === 1 ? "disable" : ""}
            onClick={() => {
              if (data?.quantity === 1) return;
              dispatch(decreaseQuantity(data?.id));
            }}
          >
            -
          </Button>
        </QuantityButtons>
        <ImageBox>
          <Image effect="blur" src={data.img} alt={data.name} />
        </ImageBox>
        <InfoBox>
          <StyledLink to={`/product/${data.id}`} onClick={() => handleClick()}>
            {capitalizeFirstLetter(data?.name)}
          </StyledLink>
          <QunatityBox>
            <Span>Quantity</Span>
            <Quantity>{data?.quantity}</Quantity>
          </QunatityBox>
        </InfoBox>
        <Price>$ {(data?.price * data?.quantity).toFixed(2)}</Price>
        <RemoveButton onClick={() => handleRemove(data.id)}>
          <IoClose />
        </RemoveButton>
      </Grid>
    </StyledBasketProduct>
  );
}
