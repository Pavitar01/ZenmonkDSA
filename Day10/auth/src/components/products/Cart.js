const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {Object.values(cartItems).map((cartItem) => (
        <div key={cartItem.id} className="cart-item">
          <h3>{cartItem.name}</h3>
          <img src={cartItem.image} alt={cartItem.name} className="productimg" />
          <p>Price: {cartItem.price} &#8377;</p>
          <p>Quantity: {cartItem.quantity}</p>
        </div>
      ))}
    </div>
  );
};
export default Cart;