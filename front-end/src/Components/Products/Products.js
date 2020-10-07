import React from "react";
import fotito from "../../../assets/4048.png";
import cart from "../../../assets/cart.png";
import "./products.scss";

export default () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 product">
          <div className="product-image">
            <img src={fotito} className="prod-pic" />
          </div>
          <div className="data">
            <div className="article">
              <div className="title">Funko</div>
              <div className="name">
                Funko POP | Game Of Thrones - Daenerys 25
              </div>
            </div>
            <div className="price">
              <div className="fee-group">
                <div className="fee-quantity">6 cuotas s/interés de</div>
                <h5 className="fee">$211,50</h5>
              </div>
              <div className="final-price">
                <span className="final">Final:</span>
                <span className="strikethrough">$2.390</span>
                <span className="finalRedPrice">$1.269</span>
              </div>
            </div>
          </div>
          <button className="cart">
            <img src={cart} alt="add to cart" />
          </button>
        </div>
        <div className="col-12 col-sm-6 col-md-4 product">
          <div className="product-image">
            <img src={fotito} className="prod-pic" />
          </div>
          <div className="data">
            <div className="article">
              <div className="title">Funko</div>
              <div className="name">
                Funko POP | Game Of Thrones - Daenerys 25
              </div>
            </div>
            <div className="price">
              <div className="fee-group">
                <div className="fee-quantity">6 cuotas s/interés de</div>
                <h5 className="fee">$211,50</h5>
              </div>
              <div className="final-price">
                <span className="final">Final:</span>
                <span className="strikethrough">$2.390</span>
                <span className="finalRedPrice">$1.269</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 product">
          <div className="product-image">
            <img src={fotito} className="prod-pic" />
          </div>
          <div className="data">
            <div className="article">
              <div className="title">Funko</div>
              <div className="name">
                Funko POP | Game Of Thrones - Daenerys 25
              </div>
            </div>
            <div className="price">
              <div className="fee-group">
                <div className="fee-quantity">6 cuotas s/interés de</div>
                <h5 className="fee">$211,50</h5>
              </div>
              <div className="final-price">
                <span className="final">Final:</span>
                <span className="strikethrough">$2.390</span>
                <span className="finalRedPrice">$1.269</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 product">
          <div className="product-image">
            <img src={fotito} className="prod-pic" />
          </div>
          <div className="data">
            <div className="article">
              <div className="title">Funko</div>
              <div className="name">
                Funko POP | Game Of Thrones - Daenerys 25
              </div>
            </div>
            <div className="price">
              <div className="fee-group">
                <div className="fee-quantity">6 cuotas s/interés de</div>
                <h5 className="fee">$211,50</h5>
              </div>
              <div className="final-price">
                <span className="final">Final:</span>
                <span className="strikethrough">$2.390</span>
                <span className="finalRedPrice">$1.269</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
