import Image from "next/image";
import React from "react";

export const Bigname = () => {
  return (
    <section
      id="section"
      className="overflow-hidden flex justify-center items-center relative h-fit w-full"
    >
      <div id="container" className="px-6 sm:px-24 w-full h-full">
        <p className="font-bebas text-[100vh] sm:text-[95vh] leading-none opacity-65">
          Homín
        </p>
        <Image
          src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/6884f1191866033.65d32064d24db.jpg"
          alt=""
          width={420}
          height={420}
          className="absolute sm:left-10 sm:top-0 top-8 object-cover sm:w-2/5 sm:h-3/4 w-2/3 h-2/4 right-10 border-8 border-white shadow-sm"
        />
      </div>
    </section>
  );
};
