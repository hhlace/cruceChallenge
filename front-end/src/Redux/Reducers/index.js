import { RECEIVE_PRODUCTS } from "./constants";

const initialState = {
  products: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return { ...state, products: action.products };
    default:
      return state;
  }
};
