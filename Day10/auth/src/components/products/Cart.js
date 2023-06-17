import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h1>You can add items</h1>
      <div className="cartitem">
        {cartItems.map((i) => {
          return (
            <div className="card">
              <img src={i.image} /><p>{i.name}</p><p>{i.price} &#8377;</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
