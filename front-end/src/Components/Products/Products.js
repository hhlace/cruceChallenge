import React from "react";
import fotito from "../../../assets/4048.png";
import cart from "../../../assets/cart.png";
import "./products.scss";

export default ({ product }) => {
  const discountPrice = product.price * ((100 - product.discount) / 100);
  const fee = discountPrice / 6;
  return (
    <div className="col-12 col-sm-6 col-md-4 product">
      <div className="product-image">
        <img src={product.image} className="prod-pic" />
      </div>
      <div className="data">
        <div className="article">
          <div className="title">Funko</div>
          <div className="name">{product.name}</div>
        </div>
        {product.stock > 0 ? (
          <div className="price">
            <div className="fee-group">
              <div className="fee-quantity">6 cuotas s/interés de</div>
              <h5 className="fee">${fee.toFixed(2).replace(".", ",")}</h5>
            </div>
            <div className="final-price">
              <span className="final">Final:</span>
              {product.discount > 0 ? (
                <>
                  <span className="strikethrough">
                    $
                    {product.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </span>
                  <span className="finalRedPrice">
                    $
                    {discountPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </span>
                </>
              ) : (
                <span className="finalPrice">
                  $
                  {product.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              )}
            </div>
          </div>
        ) : (
          <div className="price">
            Final: <h5 className="no-stock">Artículo sin stock</h5>
            <br />
            <button className="ver-articulo">Ver artículo</button>
          </div>
        )}
      </div>
      {product.stock > 0 ? (
        <button className="cart">
          <img src={cart} alt="add to cart" />
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};
