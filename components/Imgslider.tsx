import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export const Imgslider = () => {
  return (
    <section
      id="section"
      className="h-fit sm:h-screen w-full py-6 sm:py-24 relative flex justify-center items-center"
    >
      <div id="container" className="w-full h-full sm:px-24 px-6">
        <div className="w-full relative mb-6 sm:mb-0">
          <button className="left-0 top-0 z-10 border-2 border-black py-1 px-3 rounded-full font-bebas hover:bg-black hover:text-white duration-500">
            Onze projecten
          </button>
        </div>
        <div className="w-full h-full flex items-center justify-between">
          {/* <Marquee className="h-full w-full"> */}
          <Image
            src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/6884f1191866033.65d32064d24db.jpg"
            alt=""
            width={100}
            height={100}
            className="object-cover w-1/3 h-1/3 sm:h-3/4 sm:w-1/4"
          />
          <Image
            src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/37444e191866033.65d32065e18d8.jpg"
            alt=""
            fill
            className="object-cover w-1/3 sm:h-3/4 sm:w-1/4"
          />
          <Image
            src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/37444e191866033.65d32065e18d8.jpg"
            alt=""
            fill
            className="object-cover w-1/3 sm:h-3/4 sm:w-1/4"
          />
          {/* </Marquee> */}
        </div>
      </div>
    </section>
  );
};
