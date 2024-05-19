import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../../store";
import { useQuery } from "@tanstack/react-query";
import { getSearchedProducts } from "../../services/apiProducts";
import { productTypes } from "../../types/Product";
import NotFound from "./NotFound";
import ProductCard from "../Shop/ProductCard";

const StyledSearchedProducts = styled.div`
  padding: 0 2rem;
  margin: 10rem 0 5rem;
`;

const Container = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.2rem;
  justify-content: center;
`;

export default function SearchedProducts() {
  const { productName } = useParams();

  const selectedpProducts = useAppSelector(
    (store) => store.basket.basketProducts
  );

  const { data } = useQuery<productTypes[] | null>({
    queryKey: ["products"],
    queryFn: () => getSearchedProducts(productName),
  });

  console.log(data);

  return (
    <StyledSearchedProducts>
      <Container>
        {data?.length === 0 ? (
          <NotFound />
        ) : (
          data?.map((d) => {
            const isSelected = selectedpProducts?.some(
              (selectedProduct) => selectedProduct?.id === d?.id
            );
            {
              if (d) {
                return (
                  <ProductCard isSelected={isSelected} data={d} key={d?.id} />
                );
              }
            }
          })
        )}
      </Container>
    </StyledSearchedProducts>
  );
}
