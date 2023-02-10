import React from "react";
import { Route, Routes } from "react-router-dom";
import Productsfull from "./Component/Data/Productsfull";

import Navbar from "./Component/Navbar";
import ProductsMenu from "./Component/ProductsMenu";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Navbar />
            <ProductsMenu />
       
          </div>
        }
      />
      <Route path="/:id" element={<Productsfull />} />
    </Routes>
  );
};

export default App;
