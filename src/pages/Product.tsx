import { useEffect } from "react";
import Products from "../components/Home/Products";
import ProductDetails from "../components/Product/ProductDetails";

export default function Product() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ProductDetails />
      <Products title={"Recommended Products"} first={0} last={6} />
    </>
  );
}
