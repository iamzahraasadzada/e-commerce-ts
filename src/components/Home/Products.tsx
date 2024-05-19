import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";
import { productsTypes } from "../../types/Products";
import Product from "./Product";

const StyledProducts = styled.div`
  padding: 0 2rem;
  margin: 10rem 0 25rem;
`;

const Container = styled.div`
  max-width: 110rem;
  margin: 0 auto;
`;

const ProductsHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled.h3`
  color: #1a1a1a;
  font-size: 3.2rem;
`;

const Button = styled(Link)`
  text-decoration: underline;
  margin-left: auto;
  font-size: 1.8rem;
  color: #101010;
`;

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 2rem;
`;

interface ProductsProps {
  title: string;
  first: number;
  last: number;
}

export default function Products({ title, first, last }: ProductsProps) {
  const { data: products } = useQuery<productsTypes[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <StyledProducts>
      <Container>
        <ProductsHeader>
          <Title>{title}</Title>
          <Button to="/shop">See All</Button>
        </ProductsHeader>
        <ProductsContainer>
          {products?.slice(first, last).map((d) => (
            <Product data={d} key={d.id} />
          ))}
        </ProductsContainer>
      </Container>
    </StyledProducts>
  );
}
