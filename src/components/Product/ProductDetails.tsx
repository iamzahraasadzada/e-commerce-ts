import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { getProduct } from "../../services/apiProducts";
import { useEffect } from "react";
import AddBasketButton from "../../features/basket/AddBasketButton";
import { FaArrowLeftLong } from "react-icons/fa6";
import { productsTypes } from "../../types/Products";
import { useAppSelector } from "../../store";
import RemoveBasket from "./RemoveBasket";
import { capitalizeFirstLetter } from "../../utils/helper";
import FullPageSpinner from "../../ui/FullPageSpinner";

const StyledeProductDetails = styled.div`
  padding: 5rem 0;
`;

const Container = styled.div`
  max-width: 120rem;
  padding: 0 5rem;
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
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
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
const Span = styled.span`
  color: #818181;
  font-size: 1.4rem;
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

  const selectedProducts = useAppSelector(
    (store) => store.basket.basketProducts
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  const { isLoading, data, refetch } = useQuery<productsTypes>({
    queryKey: ["product"],
    queryFn: () => getProduct(productId),
  });

  useEffect(() => {
    refetch();
  }, [productId, refetch]);

  const productDetails: productsTypes | undefined =
    !isLoading && data ? data : undefined;

  const isSelected = selectedProducts.some(
    (product) => product.id === productDetails?.id
  );

  let basketData;

  if (productDetails !== undefined) {
    basketData = { ...productDetails, quantity: 1 };
  }

  return (
    <StyledeProductDetails>
      <Container>
        <BackButton to={"/shop"}>
          <FaArrowLeftLong />
          <ButtonSpan>Back to shop</ButtonSpan>
        </BackButton>
        {isLoading ? (
          <FullPageSpinner />
        ) : (
          <ProductModal>
            <ImageSide>
              <Image src={productDetails?.img} alt={productDetails?.name} />
            </ImageSide>
            <TextSide>
              <Span>{capitalizeFirstLetter(productDetails?.brand)}</Span>
              <H1>{capitalizeFirstLetter(productDetails?.name)}</H1>
              <P>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                placeat similique dicta nulla praesentium deserunt. Corporis
                repellendus deleniti dolores eligendi.
              </P>
              <Divider />
              <H5>$ {productDetails?.price.toFixed(2)}</H5>
              {isSelected ? (
                <RemoveBasket
                  dataId={productDetails?.id}
                  className="prod_btn__remove"
                />
              ) : (
                <AddBasketButton data={basketData} className="some" />
              )}
            </TextSide>
          </ProductModal>
        )}
      </Container>
    </StyledeProductDetails>
  );
}
