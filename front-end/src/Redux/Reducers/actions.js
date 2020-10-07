import { RECEIVE_PRODUCTS } from "./constants";
import axios from "axios";

const receiveProducts = (products) => {
  return {
    type: RECEIVE_PRODUCTS,
    products,
  };
};

export const fetchProducts = () => (dispatch) => {
  return axios
    .get("/products")
    .then((res) => res.data)
    .then((products) => dispatch(receiveProducts(products)));
};
