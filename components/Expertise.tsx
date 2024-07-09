import Image from "next/image";
import React from "react";

export const Expertise = () => {
  return (
    <section
      id="section"
      className="h-fit sm:h-screen w-full py-6 sm:py-24 relative flex justify-center items-center"
    >
      <div id="container" className="px-6 sm:px-24 w-full h-full">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-5xl font-bebas">Onze Expertise</h3>
        </div>
        <div className="w-full h-full flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="w-full sm:w-1/2 flex justify-center items-center relative h-[300px] sm:h-full bg-black group duration-300 hover:border-black hover:rounded-2xl">
            <span className="text-white text-2xl relative z-10 font-bebas group-hover:opacity-0 opacity-100 duration-300">
              Interieur Design
            </span>
            <Image
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/0448e1125423635.611933e991f94.jpg"
              alt="Foto interieur design"
              width={320}
              height={320}
              className="w-full h-full absolute top-0 right-0 opacity-0 group-hover:opacity-100 object-cover duration-300"
            />
          </div>
          <div className="w-full sm:w-1/2 flex justify-center items-center relative h-[300px] sm:h-full bg-black group duration-300 hover:border-black hover:rounded-2xl">
            <span className="text-white text-2xl relative z-10 font-bebas group-hover:opacity-0 opacity-100 duration-300">
              Architectuur Design
            </span>
            <Image
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/1cf33d95822335.5ea05fe724a0b.jpg"
              alt="Foto interieur design"
              width={320}
              height={320}
              className="w-full h-full absolute top-0 right-0 opacity-0 group-hover:opacity-100 object-cover duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
