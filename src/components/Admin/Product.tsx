import styled from "styled-components";
import { productsTypes } from "../../types/Products";
import { CiTrash } from "react-icons/ci";
import { useRemove } from "./useRemove";
import { useQueryClient } from "@tanstack/react-query";

interface ProductProps {
  data: productsTypes;
}

const StyledProduct = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  /* box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px; */
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
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
  padding: 2rem;
`;

const RemoveButton = styled.button`
  height: 100%;
  border: 0;
  background-color: #bf3131;
  padding: 0 2rem;
`;

const Icon = styled(CiTrash)`
  font-size: 3.5rem;
  color: #fff;
`;

export default function Product({ data }: ProductProps) {
  const { remove, isPending } = useRemove();
  function capitalizeFirstLetter(word: string) {
    const firstLetter = word.split("")[0];
    return word.replace(firstLetter, firstLetter.toUpperCase());
  }

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
        <RemoveButton onClick={() => handleClick(data?.id)}>
          <Icon />
        </RemoveButton>
      </ButtonSide>
    </StyledProduct>
  );
}
