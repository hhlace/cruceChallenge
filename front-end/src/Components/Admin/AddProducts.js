import React, { useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct } from "../../Redux/Reducers/actions";

const initialState = {
  image: "",
  name: "",
  price: "",
  discount: "",
  stock: "",
};

function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value,
  };
}

export default () => {
  const dispatch = useDispatch();
  const [state, stateDispatch] = useReducer(reducer, initialState);
  const onChange = (e) => {
    stateDispatch({ field: e.target.name, value: e.target.value });
  };
  const handleSubmit = () => {
    dispatch(addProduct(state));
  };
  const { image, name, price, discount, stock } = state;
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <a className="navbar-brand" href="http://www.e-cruce.com">
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
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col mb-4">
                  <img
                    src={image || "http://via.placeholder.com/150x150"}
                    className="rounded"
                    style={{ width: 150, height: 150 }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <div className="form-group">
                    <label>URL de la imagen</label>
                    <input
                      className="form-control"
                      type="url"
                      name="image"
                      placeholder="http://via.placeholder.com/150x150"
                      onChange={onChange}
                      value={image}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <div className="form-group">
                    <label>Nombre del producto</label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      onChange={onChange}
                      value={name}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <div className="form-group">
                    <label>Precio</label>
                    <input
                      className="form-control"
                      type="number"
                      name="price"
                      onChange={onChange}
                      value={price}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <div className="form-group">
                    <label>Descuento</label>
                    <input
                      className="form-control"
                      type="number"
                      name="discount"
                      onChange={onChange}
                      value={discount}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <div className="form-group">
                    <label>Stock</label>
                    <input
                      className="form-control"
                      type="number"
                      name="stock"
                      onChange={onChange}
                      value={stock}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                      Guardar
                    </button>
                    <Link to="/admin">
                      <button type="submit" className="btn btn-light">
                        Volver
                      </button>
                    </Link>
                    <div
                      className="alert alert-secondary"
                      role="alert"
                      style={{ display: "none" }}
                    >
                      Producto agregado!
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
