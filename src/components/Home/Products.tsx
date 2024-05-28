import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";
import Product from "./Product";
import { productsTypes } from "../../types/Products";
import { ProgressBar } from "react-loader-spinner";

const StyledProducts = styled.div`
  padding: 0 4rem;
  margin: 10rem 0 25rem;
`;

const Container = styled.div`
  max-width: 110rem;
  margin: 0 auto;
`;

const FullPage = styled.div`
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductsHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 0;
  @media (max-width: 340px) {
    justify-content: center;
  }
`;

const Title = styled.h3`
  color: #1a1a1a;
  font-size: 3.2rem;
  @media (max-width: 460px) {
    font-size: 2.8rem;
  }
  @media (max-width: 340px) {
    text-align: center;
  }
`;

const Button = styled(Link)`
  text-decoration: underline;
  margin-left: auto;
  font-size: 1.8rem;
  color: #101010;
  @media (max-width: 460px) {
    font-size: 1.6rem;
  }
  @media (max-width: 340px) {
    display: none;
  }
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
  className?: string;
}

export default function Products({
  title,
  first,
  last,
  className,
}: ProductsProps) {
  const { data: products, isLoading } = useQuery<productsTypes[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <StyledProducts className={className ? className : ""}>
      <Container>
        <ProductsHeader>
          <Title>{title}</Title>
          <Button to="/shop">See All</Button>
        </ProductsHeader>
        {isLoading ? (
          <FullPage>
            <ProgressBar
              visible={true}
              height="80"
              width="80"
              barColor="#040404"
              borderColor="#ffff"
              ariaLabel="progress-bar-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </FullPage>
        ) : (
          <ProductsContainer>
            {products?.slice(first, last).map((d) => (
              <Product data={d} key={d.id} />
            ))}
          </ProductsContainer>
        )}
      </Container>
    </StyledProducts>
  );
}
