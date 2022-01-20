import React from "react";
import Data from "../mock/data";



const Buttons = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        {menuItems.map((value, id) => {
          return (
            <button
              className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
              onClick={() => filterItem(value)}
              key={id}
            >
              {value}
            </button>
          );
        })}
        <button
          className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
          onClick={() =>setItem(Data)}
        >
          All
        </button>
      </div>
    </>
  );
};

export default Buttons