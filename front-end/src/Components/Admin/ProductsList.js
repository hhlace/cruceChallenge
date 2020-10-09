import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct, fetchProducts } from "../../Redux/Reducers/actions";

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [products]);
  const products = useSelector((store) => store.products);
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <a className="navbar-brand" href="#">
          <img
            src="http://www.e-cruce.com/wp-content/uploads/2019/10/cruce.svg"
            alt="logo"
          />
        </a>

        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Catalogo
            </a>
          </li>
        </ul>
      </nav>
      <div className="container-fluid mt-4">
        <div className="card">
          <div className="card-body">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Descuento</th>
                  <th>Stock</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                {products.length > 0 ? (
                  products.map((product) => {
                    return (
                      <tr key={product.id}>
                        <td>
                          <Link to="#">{product.name}</Link>
                        </td>
                        <td className="text-center">{product.price}</td>
                        <td className="text-center">{product.discount}</td>
                        <td className="text-center">{product.stock}</td>
                        <td className="text-right">
                          <Link style={{ paddingLeft: 10 }} to="#">
                            <i className="fa fa-eye" />
                          </Link>
                          <Link
                            style={{ paddingLeft: 10 }}
                            to={`/editProduct/${product.id}`}
                          >
                            <i className="fas fa-pencil-alt" />
                          </Link>
                          <Link
                            style={{ paddingLeft: 10 }}
                            onClick={() => dispatch(deleteProduct(product.id))}
                            to="#"
                          >
                            <i className="fa fa-trash" />
                          </Link>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <h5>loading...</h5>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <Link to="/admin">
          <button>Volver a Admin</button>
        </Link>
      </div>
    </div>
  );
};
