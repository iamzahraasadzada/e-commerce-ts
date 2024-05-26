import styled from "styled-components";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AddBasketButton from "../../features/basket/AddBasketButton";
import RemoveBasket from "../../features/basket/RemoveBasket";
import { productsTypes } from "../../types/Products";
import { capitalizeFirstLetter } from "../../utils/helper";

const StyledProductCart = styled.div`
  position: relative;
  max-width: 180px;
  height: 235px;
  border: 1px solid #e1e1e1;
  text-align: center;
  position: relative;
  background: #fff;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  &:hover {
    cursor: pointer;
  }
`;

const Wrapper = styled(Link)``;

const CardContent = styled.div`
  transition: all 0.4s ease-in-out;
`;

const ImageSide = styled.div`
  width: 100%;
  height: 100px;
  padding: 0 1.6rem;
  margin: auto;
  position: relative;
  background: #f6f6f6;
  transition: all 0.4s ease-in-out;
`;

const CheckIcon = styled(FaCheck)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: #3b9620;
  z-index: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  -webkit-transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  -moz-transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  -o-transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  -ms-transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  &:hover {
    transform: scale(1.1);
  }
`;

const TextSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  /* margin-bottom: 10rem; */
`;

const H3 = styled.h3`
  max-width: 12rem;
  display: block;
  white-space: nowrap;
  overflow-x: clip;
  text-overflow: ellipsis;
  width: 100%;
  height: 2rem;
`;

const H5 = styled.h5`
  color: #000;
  font-size: 1.6rem;
  margin-top: 1.4rem;
`;

const P = styled.p`
  margin-top: 0;
  font-size: 1.2rem;
  color: #b6b6b6;
  font-style: italic;
  line-height: 2.4rem;
`;

interface productCardProps {
  data: productsTypes;
  isSelected: boolean;
}

export default function ProductCard({ data, isSelected }: productCardProps) {
  return (
    <StyledProductCart
      className={"product_card" + (isSelected ? " selected" : "")}
    >
      <Wrapper to={`/product/${data?.id}`}>
        <CardContent className="card_content">
          <ImageSide>
            {isSelected ? <CheckIcon /> : null}
            <Image src={data?.img} alt={data?.name} />
          </ImageSide>
          <TextSide>
            <H3>{capitalizeFirstLetter(data?.name)}</H3>
            <P>{capitalizeFirstLetter(data?.brand)}</P>
            <H5>${data?.price.toFixed(2)}</H5>
          </TextSide>
        </CardContent>
      </Wrapper>
      {isSelected ? (
        <RemoveBasket dataId={data.id} className="prod_btn__remove" />
      ) : (
        <AddBasketButton data={data} className="prod_btn" />
      )}
    </StyledProductCart>
  );
}
