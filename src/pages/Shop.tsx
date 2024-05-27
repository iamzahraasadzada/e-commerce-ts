import { useEffect } from "react";
import Products from "../components/Shop/Products";

export default function Shop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Products />;
}
