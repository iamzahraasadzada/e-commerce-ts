import { useEffect } from "react";
import Banner from "../components/Home/Banner";
import Products from "../components/Home/Products";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner />
      <Products
        className="mb-sm"
        title={"Recommended products"}
        first={0}
        last={6}
      />
      <Products title={"Featured products"} first={7} last={13} />
    </>
  );
}
