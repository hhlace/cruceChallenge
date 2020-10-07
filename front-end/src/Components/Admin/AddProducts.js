import React, { useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
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
  console.log("estado ", state);
  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-light navbar-light">
        <a class="navbar-brand" href="http://www.e-cruce.com">
          <img
            src="http://www.e-cruce.com/wp-content/uploads/2019/10/cruce.svg"
            alt="logo"
          />
        </a>

        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/">
              Catalogo
            </a>
          </li>
        </ul>
      </nav>
      <div class="container-fluid mt-4">
        <div class="card">
          <div class="card-body">
            <form onSubmit={handleSubmit}>
              <div class="row">
                <div class="col mb-4">
                  <img
                    src={image || "http://via.placeholder.com/150x150"}
                    class="rounded"
                    style={{ width: 150, height: 150 }}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-sm-3">
                  <div class="form-group">
                    <label>URL de la imagen</label>
                    <input
                      class="form-control"
                      type="url"
                      name="image"
                      placeholder="http://via.placeholder.com/150x150"
                      onChange={onChange}
                      value={image}
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-3">
                  <div class="form-group">
                    <label>Nombre del producto</label>
                    <input
                      class="form-control"
                      type="text"
                      name="name"
                      onChange={onChange}
                      value={name}
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-3">
                  <div class="form-group">
                    <label>Precio</label>
                    <input
                      class="form-control"
                      type="number"
                      name="price"
                      onChange={onChange}
                      value={price}
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-3">
                  <div class="form-group">
                    <label>Descuento</label>
                    <input
                      class="form-control"
                      type="number"
                      name="discount"
                      onChange={onChange}
                      value={discount}
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-3">
                  <div class="form-group">
                    <label>Stock</label>
                    <input
                      class="form-control"
                      type="number"
                      name="stock"
                      onChange={onChange}
                      value={stock}
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <button type="submit" class="btn btn-primary">
                      Guardar
                    </button>
                    <button type="submit" class="btn btn-light">
                      Volver
                    </button>
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
