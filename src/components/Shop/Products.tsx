import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import styled from "styled-components";
import { getProducts } from "../../services/apiProducts";
import { productsTypes } from "../../types/Products";
import ProductCard from "./ProductCard";
import { useAppSelector } from "../../store";

const StyledProducts = styled.div`
  padding: 0 2rem;
  margin: 10rem 0 15rem;
`;

const Container = styled.div`
  max-width: 110rem;
  margin: 0 auto;
`;

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.2rem;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  font-size: 1.2rem;
  padding: 1.2rem 1.6rem;
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

  &:hover {
    cursor: pointer;
    background: #2a2a2a;
    border: 1px solid #2a2a2a;
    text-decoration: none;
  }
`;

export default function Products() {
  const [isShowMore, setShowMore] = useState(false);

  const { data: products, isLoading } = useQuery<productsTypes[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const selectedProducts = useAppSelector(
    (store) => store.basket.basketProducts
  );

  let lessData: productsTypes[] = [];

  if (!isLoading) {
    if (products) {
      lessData = [...products].slice(0, 12);
    }
  }

  function HandleClick() {
    setShowMore(true);
  }

  return (
    <StyledProducts>
      <Container>
        <ProductsWrapper>
          {isShowMore
            ? products?.map((d) => {
                const isSelected = selectedProducts.some(
                  (selectedProduct) => selectedProduct.id === d.id
                );
                return (
                  <ProductCard data={d} isSelected={isSelected} key={d.id} />
                );
              })
            : lessData?.map((d) => {
                const isSelected = selectedProducts.some(
                  (selectedProduct) => selectedProduct.id === d.id
                );
                return (
                  <ProductCard data={d} isSelected={isSelected} key={d.id} />
                );
              })}
        </ProductsWrapper>
        <Wrapper>
          <Button
            className={isShowMore ? "hide" : ""}
            onClick={() => HandleClick()}
          >
            Show More Items
          </Button>
        </Wrapper>
      </Container>
    </StyledProducts>
  );
}
