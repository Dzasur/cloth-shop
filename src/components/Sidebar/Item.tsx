import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductItemType } from "../../App";
import { IoMdClose } from "react-icons/io";
import { RemoveCart } from "../../Context";

type ItemInCart = {
  title: string;
  id: number;
  image: string;
  price: number;
};
const Item = ({ title, id, image, price }: ItemInCart) => {
  const removeToCart: Function = useContext(RemoveCart);
  return (
    <section className="w-full flex items-center min-h-[120px] gap-x-3 border-b border-gray-200">
      <Link to={`/product/${id}`}>
        <img className="max-w-[50px] mr-1" src={image} alt="img" />
      </Link>
      <div className="w-full">
        <div className="flex justify-between mb-2 gap-1 w-full">
          <Link
            to={`/product/${id}`}
            className="text-[12px] uppercase font-medium max-w-[240px] opacity-60 transition-all hover:opacity-100"
          >
            {title}
          </Link>
          <IoMdClose
            onClick={() => removeToCart(id)}
            className="cursor-pointer text-gray-500 hover:text-gray-700 transition duration-500"
            size={30}
          />
        </div>
        <div className="flex gap-2 text-sm justify-end text-gray-400">
          <p>$ {price}</p>
        </div>
      </div>
    </section>
  );
};

export default Item;
