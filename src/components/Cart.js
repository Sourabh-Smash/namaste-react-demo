import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clearCartItems = () => {
    dispatch(clearCart());
  };   
  return (
    <div>
      <h1 className="text-3xl font-bold inline-flex">
        Cart Itmes {cartItems.length}
      </h1>
      <button
        className=" bg-red-500 text-white ml-4 p-2 rounded-xl cursor-pointer shadow-lg hover:bg-red-400"
        onClick={clearCartItems}
      >
        Clear Cart
      </button>
      {cartItems.map((item, id) => (
        <p className="mx-2 py-2 " key={id}>
          {item}
        </p>
      ))}
    </div>
  );
};

export default Cart;
