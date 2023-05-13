import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { itemInCart, Items, ProductItemType } from "../../App";
import Item from "./Item";

const Sidebar = ({ isOpen, setOpen, clearCart }: any) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  useEffect(() => {
    const count = Items.reduce((acc: any, item: any) => (acc += item.price), 0);
    setTotalPrice(count);
  }, [Items]);
  return (
    <div
      className={`${
        isOpen ? "left-0" : "-left-full"
      } w-full bg-white fixed top-0 h-full overflow-y-auto shadow-2xl md:w-[35vw] xl:max-w-[25vw] transition-all duration-300 z-30 px-4 lg:px-[25px]`}
    >
      <section className="flex justify-between py-6 border-b items-center mb-2">
        <h2 className="uppercase font-semibold text-sm">
          Товаров в корзине: {itemInCart}
        </h2>
        <p
          onClick={() => setOpen(!isOpen)}
          className="w-8 h-8 flex justify-center items-center cursor-pointer"
        >
          <BsArrowLeft size={30} />
        </p>
      </section>
      <ul>
        {Items.map((item: ProductItemType) => (
          <li key={Math.random()}>
            <Item {...item} />
          </li>
        ))}
      </ul>
      <section className="flex justify-between items-center py-4">
        <p className="font-semibold text-gray-600">
          Всего: ${Number(totalPrice).toFixed(2)}
        </p>
        <p className="cursor-pointer text-gray-400" onClick={() => clearCart()}>
          Очистить корзину
        </p>
      </section>
    </div>
  );
};

export default Sidebar;
