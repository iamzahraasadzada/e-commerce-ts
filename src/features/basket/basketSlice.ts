import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { productsTypes } from "../../types/Products";

const basketFromLocalStorage = localStorage.getItem("basket");

interface StateType {
  isOpen: boolean;
  basketProducts: productsTypes[];
}

const initialState: StateType = {
  isOpen: false,
  basketProducts: basketFromLocalStorage
    ? [...JSON.parse(basketFromLocalStorage)]
    : ([] as productsTypes[]),
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<productsTypes>) {
      state.basketProducts.push(action.payload);
      localStorage.setItem("basket", JSON.stringify(state.basketProducts));
    },
    toggle(state, action: PayloadAction<boolean>) {
      if (action.payload === true) {
        document.querySelector("body")?.classList.add("scroll-hidden");
        state.isOpen = action.payload;
      } else {
        document.querySelector("body")?.classList.remove("scroll-hidden");
        state.isOpen = action.payload;
      }
    },
    clear(state) {
      state.basketProducts = [];
      localStorage.clear();
    },
    remove(state, action: PayloadAction<number>) {
      const filtred = state.basketProducts.filter(
        (data) => data.id !== action.payload
      );
      localStorage.setItem("basket", JSON.stringify(filtred));
      state.basketProducts = [...filtred];
    },
  },
});

export const { addProduct, toggle, clear, remove } = basketSlice.actions;
export default basketSlice.reducer;
