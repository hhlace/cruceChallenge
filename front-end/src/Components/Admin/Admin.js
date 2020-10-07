import React from "react";
import { Link } from "react-router-dom";
import "./admin.scss";

export default () => {
  return (
    <div className="admin">
      <h3>Admin:</h3>
      <Link to="/addProduct">
        <button>Agregar Producto</button>
      </Link>
      <Link to="/listOfProducts">
        <button>Lista Productos</button>
      </Link>
    </div>
  );
};
