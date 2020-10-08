import React from "react";
import banner from "../../../assets/banner_listado.png";
import downArrow from "../../../assets/downArrow.png";
import rightArrow from "../../../assets/rightArrow.png";
import greyArrow from "../../../assets/greyArrow.png";
import "./header.scss";

export default () => {
  return (
    <div className="header" id="header">
      <div className="responsive-header">
        <div className="bread">
          Inicio / Juguetes /<strong>Funko Pop</strong>
        </div>
        <div className="filter">
          <button>
            Filtrar
            <img src={rightArrow} className="right-arrow" />
          </button>
        </div>
        <div className="order">
          <button>
            <span className="order-text">ordenar por</span>{" "}
            <img src={greyArrow} className="greyArrow" />
          </button>
        </div>
      </div>
      <div className="banner">
        <img src={banner} alt="banner" />
      </div>
      <div className="prodcuts-header">
        <span className="bread">
          Inicio / Juguetes /<strong>Funko Pop</strong>
        </span>
        <div className="filter">
          <button>
            Filtrar
            <img src={downArrow} className="down-arrow1" />
          </button>
        </div>
        <div className="order">
          <button>
            <span className="order-text">ordenar por</span>{" "}
            <img src={greyArrow} className="down-arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};
