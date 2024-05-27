import { useEffect } from "react";
import SearchedProducts from "../components/Search/SearchedProducts";

export default function Search() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <SearchedProducts />;
}
