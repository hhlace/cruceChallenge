import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../../Redux/store";
import Products from "./Products";
import { fetchProducts } from "../../Redux/Reducers/actions";

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [products]);
  const products = useSelector((store) => store.products);
  return (
    <div className="container-fluid">
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <Products product={product} key={product.id} />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};
