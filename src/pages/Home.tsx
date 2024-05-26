import Banner from "../components/Home/Banner";
import Products from "../components/Home/Products";

export default function Home() {
  return (
    <>
      <Banner />
      <Products title={"Recommended products"} first={0} last={6} />
      <Products title={"Featured products"} first={7} last={13} />
    </>
  );
}
