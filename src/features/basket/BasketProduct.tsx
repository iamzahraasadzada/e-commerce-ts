import { IoClose } from "react-icons/io5";
import { productsTypes } from "../../types/Products";
import { useAppDispatch } from "../../store";
import { remove, toggle } from "./basketSlice";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledBasketProduct = styled.div`
  border: 1px solid #e1e1e1;
  margin: 1.4rem 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 10rem 1fr 8rem 4rem;
  align-items: center;
  padding: 1rem;
`;

const ImageBox = styled.div`
  width: 9rem;
  height: 9rem;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
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
`;

const RemoveButton = styled.button`
  font-size: 1.2rem;
  padding: 1.2rem 1.6rem;
  border: 1px solid #e1e1e1;
  color: #4a4a4a;
  background: transparent;
`;

interface BasketProductProps {
  data: productsTypes;
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
        <ImageBox>
          <Image src={data.image} alt={data.title} />
        </ImageBox>
        <InfoBox>
          <StyledLink to={`/product/${data.id}`} onClick={() => handleClick()}>
            {data.title}
          </StyledLink>
        </InfoBox>
        <Price>$ {data.price.toFixed(2)}</Price>
        <RemoveButton onClick={() => handleRemove(data.id)}>
          <IoClose />
        </RemoveButton>
      </Grid>
    </StyledBasketProduct>
  );
}
