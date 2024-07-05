"use client";

import Link from "next/link";
import React, { useState } from "react";
import headerData from "@/data/header.json";

export const HeaderComponent = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    console.log("click");
    setShowMenu((prev) => !prev);
  };
  return (
    <header className="flex justify-between items-center px-6 absolute z-10 w-full">
      <div className="flex justify-between items-center w-full py-3 border-b-2 border-white">
        <Link href="/" className="font-bebas text-white text-xl">
          Homín
        </Link>
        <ul
          className={`flex flex-col duration-500 ease-out sm:flex-row absolute bg-black right-0 w-screen h-screen sm:h-fit sm:w-fit sm:top-0 sm:relative sm:bg-transparent gap-6 justify-center items-center ${
            showMenu ? "top-0" : "-top-[100vh]"
          }`}
        >
          {headerData.header.map((item, index) => {
            return (
              <>
                <li className="text-white text-base uppercase">
                  <Link href={item.href}>{item.label}</Link>
                </li>
              </>
            );
          })}
        </ul>
        <div>
          <button
            className="sm:hidden text-white z-20 relative"
            onClick={toggleMenu}
          >
            {showMenu ? "Sluit" : "Menu"}
          </button>
          <button className="sm:block font-bebas hidden border-2 border-white rounded-full px-4 py-2 text-white hover:bg-white hover:text-black duration-300">
            Contacteer ons
          </button>
        </div>
      </div>
    </header>
  );
};
