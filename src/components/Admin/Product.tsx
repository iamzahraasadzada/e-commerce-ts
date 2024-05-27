import styled from "styled-components";
import { productsTypes } from "../../types/Products";
import { CiTrash } from "react-icons/ci";
import { useRemove } from "./useRemove";
import { capitalizeFirstLetter } from "../../utils/helper";

interface ProductProps {
  data: productsTypes;
}

const StyledProduct = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const DetailsSide = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
`;

const ImageSide = styled.div`
  width: 100%;
  border: 1px solid #f2f2f2;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const TextSide = styled.div`
  padding: 1.5rem 2rem;
`;

const Name = styled.h2``;

const Brand = styled.h3``;

const Price = styled.p``;

const ButtonSide = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 2rem;
`;

const Icon = styled(CiTrash)`
  font-size: 4rem;
  color: #bf3131;
  cursor: pointer;
  @media (max-width: 500px) {
    /* font-size: 10rem; */
  }
`;

export default function Product({ data }: ProductProps) {
  const { remove } = useRemove();

  async function handleClick(id: number) {
    if (!id) return;
    remove(id);
  }

  return (
    <StyledProduct>
      <DetailsSide>
        <ImageSide>
          <Image src={data?.img} alt={data?.name} />
        </ImageSide>
        <TextSide>
          <Name>{capitalizeFirstLetter(data?.name)}</Name>
          <Brand>{capitalizeFirstLetter(data?.brand)}</Brand>
          <Price>{data?.price.toFixed(2)}$</Price>
        </TextSide>
      </DetailsSide>
      <ButtonSide>
        {/* <RemoveButton onClick={() => handleClick(data?.id)}> */}
        <Icon onClick={() => handleClick(data?.id)} />
      </ButtonSide>
    </StyledProduct>
  );
}
