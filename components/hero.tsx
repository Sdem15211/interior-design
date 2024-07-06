import Image from "next/image";
import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export const Hero = () => {
  return (
    <section
      id="section"
      className="bg-black h-screen py-6 sm:py-24 max-h-[1120px] sm:max-h-screen relative flex justify-center items-center"
    >
      <div id="container" className="w-full h-full sm:px-24 px-6">
        <Image
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/3ba0c696146799.5ea7f6d5a786f.jpg"
          alt="Hero Background"
          fill
          className="w-full h-full object-cover absolute opacity-80"
        />
        <div className="relative flex flex-col-reverse sm:flex-row items-start sm:items-end gap-3 xl:gap-0 sm:justify-between w-full bottom-0 h-full">
          <button className="border-2 font-bebas text-white hover:bg-white hover:text-black duration-500 text-lg rounded-full px-9 py-1">
            Ontdek
          </button>
          <div className="flex flex-col ">
            {/* <TextGenerateEffect
              words="Meubilair voor uw thuis"
              className="font-bold text-4xl leading-none font-bebas"
            /> */}
            <h1 className="font-bold text-4xl text-white leading-none font-bebas">
              Meubilair voor uw thuis
            </h1>
            <p className="text-white text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
