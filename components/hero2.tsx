import React from "react";

export const Hero2 = () => {
  return (
    <section
      id="section"
      className="bg-white py-6 sm:py-24 h-fit sm:h-[50vh] sm:max-h-screen relative w-full justify-center flex items-center"
    >
      <div id="container" className=" px-6 sm:px-24 w-full h-full">
        <div className="flex xl:flex-row gap-12 xl:gap-64 flex-col h-full justify-center xl:items-center">
          <div className="flex flex-col h-full sm:justify-center xl:gap-12 xl:text-center">
            <h2 className="text-xl uppercase font-bebas">
              Homín meubelen voor comfort in het leven
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              earum nam, nihil esse consectetur deserunt nostrum.
            </p>
          </div>
          <div className="flex flex-col gap-3 items-start sm:gap-9 xl:w-1/2">
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              ex nulla odit perspiciatis, maiores, deleniti expedita voluptatem
              repudiandae officia, deserunt perferendis delectus odio sequi
              exercitationem eos! Totam consectetur dicta quisquam?
            </p>
            <button className="border-2 hover:bg-black hover:text-white duration-500 font-bebas rounded-full px-6 font-bold py-1 border-black">
              Detail
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
