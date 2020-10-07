import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import ProductsContainer from "./Components/Products/ProductsContainer";
import Pagination from "./Components/Pagination/Pagination";
import Admin from "./Components/Admin/Admin";
import AddProducts from "./Components/Admin/AddProducts";
import ProductsList from "./Components/Admin/ProductsList";
import EditProduct from "./Components/Admin/EditProduct";

export default (props) => {
  return (
    <div id="main">
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/addProduct" component={AddProducts} />
      <Route exact path="/listOfProducts" component={ProductsList} />
      <Route exact path="/editProduct/:id" component={EditProduct} />
      <Header />
      <ProductsContainer />
      <Pagination />
    </div>
  );
};
