import React from "react";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { itemInCart } from "../../App";

const logo = require("../../img/logo.png");

const Header = ({ setOpen, isOpen }: any) => {
  return (
    <header className="bg-white shadow-md fixed z-20 py-3 flex items-center w-full px-5">
      <div className="relative w-full flex items-center justify-between">
        <Link to="/">
          <img className="max-w-[50px]" src={logo} alt="img" />
        </Link>
        <BsCart2
          onClick={() => setOpen(!isOpen)}
          className="cursor-pointer"
          size={28}
        />
        <p className={`${itemInCart >= 10 ? "h-6 w-6" : "h-5 w-5"} flex justify-center items-center rounded-full bg-red-400 absolute -top-2 -right-3 text-[13px] text-white`}>
          {itemInCart}
        </p>
      </div>
    </header>
  );
};

export default Header;
