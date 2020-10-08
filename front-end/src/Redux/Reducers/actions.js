import { RECEIVE_PRODUCTS, ADD_PRODUCT } from "./constants";
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

export const addProduct = (newProduct) => {
  return axios.post("/products/add", newProduct);
};

export const deleteProduct = (id) => (dispatch) => {
  return axios
    .delete(`/products/delete/${id}`)
    .then((res) => res.data)
    .then((products) => dispatch(receiveProducts(products)));
};

export const updateProduct = (id, product) => (dispatch) => {
  return axios
    .post(`/products/${id}`, product)
    .then((res) => res.data)
    .then((products) => dispatch(receiveProducts(products)));
};
