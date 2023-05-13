import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context";
import { Products } from "../../App";

const ProductDetails = () => {
  const { id } = useParams();
  const addToCart = useContext(CartContext);

  const product = Products.find((item: any) => item.id === Number(id));

  if (!product) {
    return (
      <h1 className="flex h-screen justify-center items-center text-5xl">
        Loading...
      </h1>
    );
  }
  return (
    <section className="h-screen py-12 lg:py-32 flex items-center px-3">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-2">
          <div className="flex flex-1 items-center justify-center mb-8 lg:mb-0">
            <img
              className="max-w-[200px] lg:max-w-sm"
              src={product.image}
              alt="img"
            />
          </div>
          <div className=" mx-auto lg:mx-0">
            <h1 className="text-[18px] md:text-[26px] font-medium mb-2 max-w-[450px]">
              {product.title}
            </h1>
            <p className="text-xl font-medium mb-6">${product.price}</p>
            <p className="mb-8 opacity-80 text-sm max-w-md">
              {product.description}
            </p>
            <button
              className="bg-black/80 text-white py-4 px-8 transition duration-300 hover:bg-white hover:text-black border border-black"
              onClick={() => addToCart(product)}
            >
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
