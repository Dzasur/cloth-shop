import React, { useContext } from "react";
import Hero from "../../components/Hero/Hero";
import { Context } from "../../Context";
import Product from "./Product/Product";

export type RatingType = {
  rate: number;
  count: number;
};
export type ProductType = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: RatingType;
  title: string;
};
const Home = () => {
  const products: any = useContext(Context);
  const productFilter = products.filter(
    (item: ProductType) =>
      item.category === "electronics" ||
      item.category === "jewelery" ||
      item.category === "men's clothing" ||
      item.category === "women's clothing"
  );
  return (
    <>
      <Hero />
      <section className="container mx-auto py-5 px-4 mt-12">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {productFilter.map((product: ProductType) => (
            <Product key={product.id} {...product} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Home;
