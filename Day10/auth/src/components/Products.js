import React, { useEffect, useState } from "react";
import { products } from "../Data";
const Products = () => {
  const [prod, setprod] = useState([]);

  useEffect(() => {
    const productsfun = () => {};
    productsfun();
  }, []);
  return (
    <div className="products">
      <div className="items">
        {products.map((i, index) => {
          return (
            <div className="card" key={index}>
              {i.title}
            </div>
          );
        })}
      </div>
      <button
        className="btn"
        style={{ float: "right", width: "50px", margin: "20px" }}
      >
        +
      </button>
    </div>
  );
};

export default Products;
