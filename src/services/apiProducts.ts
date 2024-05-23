import { productsTypes } from "../types/Products";

export async function getProducts(): Promise<productsTypes[]> {
  const res = await fetch("http://localhost:4000/products");
  if (!res.ok) throw new Error("Products could not be loaded");
  const data: productsTypes[] = await res.json();
  return data;
}

export async function getProduct(
  id: string | undefined
): Promise<productsTypes> {
  const res = await fetch(`http://localhost:4000/products/${id}`);
  if (!res.ok) throw new Error("something went wrong");
  const data: productsTypes = await res.json();
  return data;
}

export async function getSearchedProducts(
  value: string | undefined
): Promise<productsTypes[] | null> {
  const res = await fetch("http://localhost:4000/products");
  if (!res.ok) throw new Error("something went wrong");
  const data: productsTypes[] = await res.json();

  const searchedName = value?.toLowerCase().trim();

  return data.filter((el) => {
    if (el.name.split(" ").length >= 2) {
      const first = el.name.split(" ")[0].toLowerCase();
      if (searchedName) {
        if (first.includes(searchedName)) return el;
      }

      return null;
    } else {
      const toLower = el.name.toLowerCase();
      if (searchedName) {
        if (toLower.includes(searchedName)) return el;
      }
      return null;
    }
  });
}
