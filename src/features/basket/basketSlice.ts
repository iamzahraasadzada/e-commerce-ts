import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { basketProduct } from "../../types/Products";

const basketFromLocalStorage = localStorage.getItem("basket");

interface StateType {
  isOpen: boolean;
  basketProducts: basketProduct[];
  isOpenSearch: boolean;
}

const initialState: StateType = {
  isOpen: false,
  basketProducts: basketFromLocalStorage
    ? [...JSON.parse(basketFromLocalStorage)]
    : ([] as basketProduct[]),
  isOpenSearch: false,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<basketProduct>) {
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
    increaseQuantity(state, action: PayloadAction<number>) {
      state.basketProducts = state.basketProducts.map((data) => {
        return data.id === action.payload
          ? { ...data, quantity: data.quantity + 1 }
          : { ...data };
      });
      localStorage.setItem("basket", JSON.stringify(state.basketProducts));
    },
    decreaseQuantity(state, action: PayloadAction<number>) {
      state.basketProducts = state.basketProducts.map((data) => {
        return data.id === action.payload
          ? { ...data, quantity: data.quantity - 1 }
          : { ...data };
      });
      localStorage.setItem("basket", JSON.stringify(state.basketProducts));
    },
    toggleSearch(state, action: PayloadAction<boolean>) {
      state.isOpenSearch = action.payload;
    },
  },
});

export const {
  addProduct,
  toggle,
  clear,
  remove,
  increaseQuantity,
  decreaseQuantity,
  toggleSearch,
} = basketSlice.actions;
export default basketSlice.reducer;
