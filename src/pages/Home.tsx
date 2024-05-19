import styled from "styled-components";
import Banner from "../components/Home/Banner";
import Products from "../components/Home/Products";

const StyledHome = styled.div`
  background: #f9f9f9;
`;

export default function Home() {
  return (
    <StyledHome>
      <Banner />
      <Products title={"Recommended products"} first={0} last={6} />
      <Products title={"Featured products"} first={7} last={13} />
    </StyledHome>
  );
}
