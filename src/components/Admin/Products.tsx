import { useQuery } from "@tanstack/react-query";
import { productsTypes } from "../../types/Products";
import { getProducts } from "../../services/apiProducts";
import styled from "styled-components";
import Product from "./Product";

const StyledProducts = styled.div`
  padding: 2rem 3rem;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default function Products() {
  const { data: products } = useQuery<productsTypes[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  return (
    <StyledProducts>
      <Container>
        {products?.map((data) => (
          <Product data={data} key={data.id} />
        ))}
      </Container>
    </StyledProducts>
  );
}
