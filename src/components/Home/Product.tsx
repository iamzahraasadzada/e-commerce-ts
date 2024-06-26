import { Link } from "react-router-dom";
import styled from "styled-components";
import { productsTypes } from "../../types/Products";
import { capitalizeFirstLetter } from "../../utils/helper";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import { LazyLoadImage } from "react-lazy-load-image-component";

const StyledProduct = styled(Link)`
  max-height: 30rem;
  border: 1px solid #e1e1e1;
  display: block;
`;

const ImageSide = styled.div`
  width: 100%;
  height: 20rem;
  background: #f1f1f1;
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);

  &:hover {
    transform: scale(1.1);
  }
`;

const TextSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.2rem;
`;

const H5 = styled.h5`
  font-size: 1.8rem;
`;

const P = styled.p`
  color: #818181;
  line-height: 2.4rem;
  font-size: 1.6rem;
`;

interface ProductProps {
  data: productsTypes;
}

export default function Product({ data }: ProductProps) {
  return (
    <StyledProduct to={`/product/${data?.id}`}>
      <ImageSide>
        <LazyLoadImage
          alt={data?.name}
          src={data?.img}
          width={"100%"}
          style={{ objectFit: "contain" }}
          height={"100%"}
          effect="blur"
        />
        <Image src={data?.img} alt={data?.name} />
      </ImageSide>
      <TextSide>
        <H5>{capitalizeFirstLetter(data?.name)}</H5>
        <P>{capitalizeFirstLetter(data?.brand)}</P>
      </TextSide>
    </StyledProduct>
  );
}
