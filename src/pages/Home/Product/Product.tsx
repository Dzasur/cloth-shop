import React from "react";
import { Link } from "react-router-dom";
import { ProductType } from "../Home";
import AddToCart from "./AddToCart";
import Image from "./Image";

const Product = ({
  id,
  image,
  category,
  title,
  price,
  rating: { rate, count },
}: ProductType) => {
  return (
    <li>
      <div className="border border-[#e4e4e4] h-[300px] relative mb-4 group transition">
        <Image id={id} image={image} />
        <AddToCart
          id={id}
          image={image}
          category={category}
          title={title}
          price={price}
          rate={rate}
          count={count}
        />
      </div>
      <p className="text-sm capitalize text-gray-500 mb-1">{category}</p>
      <Link to={`/product/${id}`}>
        <h1 className="font-semibold mb-1">{title}</h1>
      </Link>
      <p className="font-semibold">$ {price}</p>
    </li>
  );
};

export default Product;
