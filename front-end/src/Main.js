import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";

export default (props) => {
  return (
    <div id="main">
      <Header />
      <Products />
    </div>
  );
};
