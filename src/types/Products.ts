export type productsTypes = {
  id: number;
  name: string;
  brand: string;
  price: number;
  img: string;
};

export type adedProductTypes = {
  name: string;
  brand: string;
  price: number;
  img: string;
};

export type basketProduct = productsTypes & {
  quantity: number;
};
