import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledBanner = styled.div`
  padding: 0 5rem;
`;

const Container = styled.div`
  margin-top: 2rem;
  height: max-content;
  background: #f3f3f3;
  max-width: 120rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 990px) {
    grid-template-columns: 1fr 0.5fr;
  }
  @media (max-width: 745px) {
    grid-template-columns: 1fr;
  }
`;

const TextSide = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.2rem;
  @media (max-width: 745px) {
    align-items: center;
    text-align: center;
  }
`;

const H1 = styled.h1`
  font-size: 4.8rem;
  margin-bottom: 1rem;
  width: 80%;
  font-weight: 400;
  @media (max-width: 520px) {
    font-size: 3.6rem;
  }
  @media (max-width: 415px) {
    font-size: 3.2rem;
  }
  @media (max-width: 320px) {
    font-size: 2.4rem;
  }
`;

const Strong = styled.strong``;

const P = styled.p`
  color: #4a4a4a;
  line-height: 2.4rem;
  @media (max-width: 320px) {
    font-size: 1.5rem;
  }
`;

const Button = styled(Link)`
  width: max-content;
  background: #101010;
  padding: 1.6rem;
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
  @media (max-width: 320px) {
    font-size: 1.2rem;
  }
`;

const ImageSide = styled.div`
  width: 100%;
  height: 100%;
  /* @media (max-width: 1000px) {
    width: 80%;
  } */
  @media (max-width: 745px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export default function Banner() {
  return (
    <StyledBanner>
      <Container>
        <TextSide>
          <H1>
            <Strong>See</Strong>
            &nbsp;everything with&nbsp;
            <Strong>Clarity</Strong>
          </H1>
          <P>
            Buying eyewear should leave you happy and good-looking, with money
            in your pocket. Glasses, sunglasses, and contacts—we’ve got your
            eyes covered.
          </P>
          <Button to="/shop">Shop now &rarr;</Button>
        </TextSide>
        <ImageSide>
          <Image src="/home_banner.png" alt="Banner" />
        </ImageSide>
      </Container>
    </StyledBanner>
  );
}
