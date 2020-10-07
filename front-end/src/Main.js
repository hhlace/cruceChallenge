import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import ProductsContainer from "./Components/Products/ProductsContainer";
import Pagination from "./Components/Pagination/Pagination";

export default (props) => {
  return (
    <div id="main">
      <Header />
      <ProductsContainer />
      <Pagination />
    </div>
  );
};
