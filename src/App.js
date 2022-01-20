import React, { useState } from "react";
import Data from "./mock/data";
import Card from "./components/card";
import Buttons from "./components/buttons";

const App = () => {
  const [item, setItem] = useState(Data);
  // spread operator will display all the values from our category section of our data while Set will only allow the single value of each kind to be displayed

const menuItems = [...new Set(Data.map((Val) => Val.category))];

const filterItem = (curcat) => {
  const newItem = Data.filter((newVal) => {
    return newVal.category === curcat;
  });
  setItem(newItem);
};
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <h1 className="col-12 text-center my-3 fw-bold">Our Menu</h1>
          <Buttons
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
          <Card item={item}></Card>
        </div>
      </div>
    </>
  );
};

export default App;
