import React, { useState } from "react";
import products from "../Data/mock.json";
import "./css/product.css"
const Product = () => {
    // console.log(products)
  const [searchitem, setsearchitem] = useState("");

  const filtering = (e) => {
    setsearchitem(e.target.value);
  };

  //prducts filtered value to filteredsearch
  const filteredsearch = products.filter((products) => {
    return products.title.toLowerCase().includes(searchitem.toLowerCase());
  });
// console.log(object)

  return (
    <>
      <input
        type="text"
        onChange={(e) => filtering(e)}
        placeholder="Search..."
      />

      <div className="parent">
        {filteredsearch.map((item, index) => {
          return (
            <div key={index} className="product">
              {/* <img src={item.images[3]} className="img" /> */}
              <img src={item.images[3]} className="img" />
              <h1>{item.title}</h1>
              <p>Price: {item.price}</p>
              <p>Rating: {item.rating}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Product;
