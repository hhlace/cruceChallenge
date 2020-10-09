import Axios from "axios";
import React, { useReducer, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../Redux/Reducers/actions";

export default () => {
  const dispatch = useDispatch();

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState(0);
  const [stock, setStock] = useState("");
  const params = useParams();

  useEffect(() => {
    name == ""
      ? Axios.get(`/products/${params.id}`)
          .then((res) => res.data)
          .then((prod) => {
            setImage(prod.image);
            setName(prod.name);
            setPrice(prod.price);
            setDiscount(prod.discount);
            setStock(prod.stock);
          })
      : null;
  }, []);

  const onChangeImage = (e) => {
    setImage(e.target.value);
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const onChangeDiscount = (e) => {
    setDiscount(e.target.value);
  };
  const onChangeStock = (e) => {
    setStock(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct(params.id, {
        image,
        name,
        price,
        discount,
        stock,
      })
    );
  };

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
                      onChange={onChangeImage}
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
                      onChange={onChangeName}
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
                      onChange={onChangePrice}
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
                      onChange={onChangeDiscount}
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
                      onChange={onChangeStock}
                      value={stock}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                      Guardar cambios
                    </button>
                    <Link to="/listOfProducts">
                      <button type="submit" className="btn btn-light">
                        Volver
                      </button>
                    </Link>
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
