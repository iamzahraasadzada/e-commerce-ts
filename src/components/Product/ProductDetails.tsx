import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { getProduct } from "../../services/apiProducts";
import { productTypes } from "../../types/Product";
import { useEffect } from "react";
import AddBasketButton from "../../features/basket/AddBasketButton";
import { FaArrowLeftLong } from "react-icons/fa6";

const StyledeProductDetails = styled.div`
  padding: 5rem 0;
`;

const Container = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

const BackButton = styled(Link)`
  color: rgb(16, 16, 16);
  font-size: 1.6rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ButtonSpan = styled.span`
  color: inherit;
`;

const ProductModal = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  background: #fff;
  border: 1px solid #e1e1e1;
`;

const ImageSide = styled.div`
  background: #f8f8f8;
  height: 50rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const TextSide = styled.div`
  width: 100%;
  height: 100%;
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.2rem;
`;

const H1 = styled.h1`
  color: #1a1a1a;
  font-size: 3.2rem;
`;

const H5 = styled.h5`
  color: #1a1a1a;
  font-size: 3.2rem;
`;

const P = styled.p`
  color: #4a4a4a;
  font-size: 1.4rem;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #f1f1f1;
`;

export default function ProductDetails() {
  const { productId } = useParams();

  const { isLoading, data, refetch } = useQuery<productTypes>({
    queryKey: ["product"],
    queryFn: () => getProduct(productId),
  });

  useEffect(() => {
    refetch();
  }, [productId, refetch]);

  let productDetails: productTypes;
  if (!isLoading && data) {
    productDetails = data;
  }

  return (
    <StyledeProductDetails>
      <Container>
        <BackButton to={"/shop"}>
          <FaArrowLeftLong />
          <ButtonSpan>Back to shop</ButtonSpan>
        </BackButton>
        <ProductModal>
          <ImageSide>
            <Image src={productDetails?.image} alt={productDetails?.title} />
          </ImageSide>
          <TextSide>
            <H1>{productDetails?.title}</H1>
            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              placeat similique dicta nulla praesentium deserunt. Corporis
              repellendus deleniti dolores eligendi.
            </P>
            <Divider />

            <H5>$ {productDetails?.price.toFixed(2)}</H5>
            <AddBasketButton data={productDetails} className="some" />
          </TextSide>
        </ProductModal>
      </Container>
    </StyledeProductDetails>
  );
}
