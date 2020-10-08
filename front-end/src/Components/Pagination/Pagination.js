import React from "react";
import leftArrow from "../../../assets/leftPArrow.png";
import rigthArrow from "../../../assets/rightPArrow.png";
import upArrow from "../../../assets/upArrow.png";
import "./pagination.scss";

export default () => {
  return (
    <div className="footer">
      <div className="pagination">
        <button>
          <img src={leftArrow} alt="prev" />
        </button>
        <button>4</button>
        <button>5</button>
        <button className="selected">6</button>
        <button>7</button>
        <button>8</button>
        <button>
          <img src={rigthArrow} alt="next" />
        </button>
      </div>
      <div
        className="up"
        onClick={() =>
          document
            .getElementById("header")
            .scrollIntoView({ block: "start", behavior: "smooth" })
        }
      >
        <img src={upArrow} className="upArrow" />
        <span className="subir">Subir</span>
      </div>
    </div>
  );
};
