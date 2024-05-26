import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../../store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getSearchedProducts } from "../../services/apiProducts";
import NotFound from "./NotFound";
import ProductCard from "../Shop/ProductCard";
import { Oval } from "react-loader-spinner";
import { useEffect } from "react";

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

const FullPage = styled.div`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function SearchedProducts() {
  const { productName } = useParams();

  const queryClient = useQueryClient();

  const selectedpProducts = useAppSelector(
    (store) => store.basket.basketProducts
  );

  const { mutate, isPending, data } = useMutation({
    mutationFn: getSearchedProducts,
    onSuccess: (data) => {
      queryClient.setQueryData(["searchedProducts"], data);
    },
  });

  useEffect(() => {
    mutate(productName?.trim());
  }, [productName]);

  if (isPending)
    return (
      <FullPage>
        <Oval
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </FullPage>
    );

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
