import React, { useEffect, useState } from "react";
import Addproduct from "./Addproduct";

const Products = () => {
  const [role, setRole] = useState("");
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductImage, setNewProductImage] = useState("");
  const [add, setAdd] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("User"));
    if (user && user.length > 0) {
      setRole(user[0].role);
    }

    // Load products from localStorage
    const savedProducts = JSON.parse(localStorage.getItem("Products"));
    if (savedProducts) {
      setProducts(savedProducts);
    }
  }, []);

  useEffect(() => {
    // Save products to localStorage whenever it changes
    localStorage.setItem("Products", JSON.stringify(products));
  }, [products]);

  const handleAddProduct = () => {
    if (!newProductName || !newProductPrice || !newProductImage) {
      alert("Please enter all product details.");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: newProductName,
      price: parseFloat(newProductPrice),
      image: newProductImage,
    };

    setProducts((prevProducts) => [...prevProducts, newProduct]);
    setNewProductName("");
    setNewProductPrice("");
    setNewProductImage("");
  };

  const handleDeleteProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  const handleAddToCart = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);
    if (productToAdd) {
      setCartItems((prevCartItems) => [...prevCartItems, productToAdd]);
    }
  };

  return (
    <div className="products">
      <div className="items">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} className="productimg"/>
            <p>Price: &#8377;{product.price}</p>
            {role === "admin" && (
              <button onClick={() => handleDeleteProduct(product.id)}>
                Delete
              </button>
            )}
            {role === "customer" && (
              <button onClick={() => handleAddToCart(product.id)}>
                Add to Cart
              </button>
            )}
          </div>
        ))}
      </div>
     {
      role==="admin" || role==="vendor" &&(
        <button className="btn" style={{width:"50px",height:"50px",margin:"20px"}} onClick={()=>{
        add?setAdd(false):setAdd(true)
      }}>+</button>
      )
     }
      {role === "admin" && add &&(
       
       <Addproduct handleAddProduct={handleAddProduct} setNewProductName={setNewProductName}
       setNewProductPrice={setNewProductPrice} setNewProductImage={setNewProductImage}/>
      )}
      {role === "vendor" && add &&(
        <Addproduct handleAddProduct={handleAddProduct} setNewProductName={setNewProductName}
       setNewProductPrice={setNewProductPrice} setNewProductImage={setNewProductImage}/>
      )}
      {
        role==="user" && add &&(
          <h1>You can add items</h1>
        )
      }

      
    </div>
  );
};

export default Products;
