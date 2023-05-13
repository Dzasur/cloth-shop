import React, { useContext } from "react";
import { CartContext } from "../../../Context";
import { BsCartPlus } from "react-icons/bs";

const AddToCart = ({ id, title, price, image, category, count, rate }: any) => {
  const addToCart = useContext(CartContext);
  const product = { id, title, price, image, category, rate, count };
  return (
    <button
      onClick={() => addToCart(product)}
      className="absolute top-0 right-0 bg-red-300 hover:bg-red-500 transition duration-300 p-2 text-white"
    >
      <BsCartPlus size={26} />
    </button>
  );
};

export default AddToCart;
