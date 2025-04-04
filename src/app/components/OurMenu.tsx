"use client";

import Image from "next/image";
import { useState } from "react";
import continentalDishes from "../../../public/icons/continental-dishes.svg";
import culinary from "../../../public/icons/culinary.svg";
import delivery from "../../../public/icons/delivery.svg";
import localDishes from "../../../public/icons/local-dishes.svg";
import OurMenuSwiper from "./OurMenuSwiper";

const OurMenu = () => {
  const dishes = [
    {
      name: "Continental Dishes",
      icon: continentalDishes,
    },
    {
      name: "Local Dishes",
      icon: localDishes,
    },
    {
      name: "Culinary",
      icon: culinary,
    },
    {
      name: "Delivery",
      icon: delivery,
    },
  ];

  const [menu, setMenu] = useState([
    {
      name: "All",
      active: false,
    },
    {
      name: "Drinks",
      active: true,
    },
    {
      name: "Food",
      active: false,
    },
  ]);

  const setActiveMenu = (index: number) => {
    setMenu((prev) =>
      prev.map((c, i) => ({
        ...c,
        active: i === index,
      }))
    );
  };

  return (
    <div className='w-full h-full md:h-[727px] flex justify-center items-center'>
      <div className='w-full h-full container mx-auto px-5 py-10 md:px-20 md:py-10 grid grid-cols-12 gap-5 md:gap-20 justify-center items-center'>
        {/* left side */}
        <div className='w-full flex flex-col space-y-8 md:space-y-10 items-start col-span-12 md:col-span-5'>
          <p className='font-cormorant-unicase font-bold text-white text-[22px] md:text-[32px] leading-[28px] uppercase'>
            Our Menu
          </p>
          <p className='font-bruno-ace-sc text-white text-[12px] md:text-[14px] leading-[24px] md:leading-[28px] tracking-[4.2px] capitalize '>
            With every bite, you&apos;ll feel like you&apos;re in Italy, thanks
            to our seasoned chef with over 10 years of vast experience. Our
            chefs are bound to create finger-licking good food just for you,
            offering a diverse range of African, Italian, and International
            cuisines.
          </p>
          <div className='grid grid-cols-4 gap-5 justify-content-center'>
            {dishes.map((dish, index) => (
              <div
                className='flex flex-col space-y-3 justify-center items-center'
                key={index}
              >
                <Image src={dish.icon} alt={dish.name} />
                <p className='font-helvetica-neue text-white text-[8px] md:leading-[151.6%] tracking-wider md:tracking-[3.52px] uppercase text-center w-[75%]'>
                  {dish.name}
                </p>
              </div>
            ))}
          </div>
          <button className='focus:outline-none bg-download-menu-gradient px-5 py-3 md:py-4 font-cormorant-unicase font-bold text-white text-[14px] md:text-[16px] leading-normal uppercase mt-5'>
            Download Menu
          </button>
        </div>
        {/* right side */}
        <div className='col-span-12 md:col-span-7 mt-10 w-full'>
          <div className='flex flex-col space-y-10 md:space-y-20 items-center'>
            <div className='flex items-center border-[.5px] border-[#A85B5B] px-3 py-3 space-x-5 rounded-[4px]'>
              {menu.map((c, index) => (
                <p
                  key={index}
                  className={`font-cormorant-unicase font-bold text-white text-[14px] md:text-[20px] leading-normal capitalize px-5 py-2 md:py-1 cursor-pointer ${
                    c.active
                      ? "bg-download-menu-gradient rounded-[4px] border border-[#A85B5B]"
                      : ""
                  }`}
                  onClick={() => setActiveMenu(index)}
                >
                  {c.name}
                </p>
              ))}
            </div>
            <OurMenuSwiper />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
