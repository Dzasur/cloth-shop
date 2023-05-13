import React from "react";
import { Link } from "react-router-dom";

const Image = ({ image, id }: any) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Link
        to={`/product/${id}`}
        className="mx-auto w-[200px] flex justify-center items-center"
      >
        <img
          className="max-h-[160px] group-hover:scale-110 transition duration-500"
          src={image}
          alt="image"
        />
      </Link>
    </div>
  );
};

export default Image;
