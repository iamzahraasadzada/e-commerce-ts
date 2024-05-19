import { productTypes } from "../types/Product";
import { productsTypes } from "../types/Products";

export async function getProducts(): Promise<productsTypes[]> {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) throw new Error("something went wrong");
  const data = res.json();
  return data;
}

export async function getProduct(
  id: string | undefined
): Promise<productTypes> {
  if (id === undefined) {
    throw new Error("The product is not defiended");
    return;
  }
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) throw new Error("something went wrong");
  const data = res.json();
  return data;
}

export async function getSearchedProducts(
  value: string | undefined
): Promise<productsTypes[] | null> {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) throw new Error("something went wrong");
  const data: productsTypes[] = await res.json();

  const searchedName = value?.toLowerCase().trim();

  return data.filter((el) => {
    if (el.title.split(" ").length >= 2) {
      const first = el.title.split(" ")[0].toLowerCase();
      if (searchedName) {
        if (first.includes(searchedName)) return el;
      }

      return null;
    } else {
      const toLower = el.title.toLowerCase();
      if (searchedName) {
        if (toLower.includes(searchedName)) return el;
      }
      return null;
    }
  });
}
