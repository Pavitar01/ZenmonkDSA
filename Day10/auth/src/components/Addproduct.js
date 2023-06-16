import React from "react";

const Addproduct = ({setNewProductName,setNewProductPrice,setNewProductImage,handleAddProduct}) => {
  return (
    <div className="addproduct">
      <h3>Add Product</h3>
      <input
        type="text"
        placeholder="Product Name"
        onChange={(e) => setNewProductName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Product Price"
        onChange={(e) => setNewProductPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Product Image URL"
        onChange={(e) => setNewProductImage(e.target.value)}
      />
      <button onClick={handleAddProduct} >Add</button>
    </div>
  );
};

export default Addproduct;
