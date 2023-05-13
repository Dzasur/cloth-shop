import React from "react";

const womanHero = require("../../img/woman_hero.png");
const hero = require("../../img/bg_hero.svg");

const Hero = () => {
  return (
    <section
      className={`h-[250px] sm:h-[400px] lg:h-[700px] py-24 px-3 bg-orange-100/70 bg-no-repeat bg-center bg-cover`}
    >
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col">
          <div className="flex items-center font-semibold uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
          </div>
          <h1 className="text-3xl sm:text-[70px] leading-[1.1] font-light mb-4">
            AUTUMN SALE STYLISH <p className="font-semibold">WOMEN'S</p>
          </h1>
        </div>
        <div className="hidden md:block">
          <img
            src={womanHero}
            className="lg:max-h-[600px] md:max-h-[400px]"
            alt="img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
