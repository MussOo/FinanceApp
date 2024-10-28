import React from "react";
import AnimatedShinyText from "./ui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";

function Navbar() {
  return (
    <nav className=" border-gray-200 dark:bg-gray-900 dark:border-gray-700 text-[#6E56CF]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div>
          <h1 className="text-3xl font-bold">Finance App</h1>
        </div>
        <div className="hidden md:flex">
          <div className="group rounded-full bg-neutral-200 px-4 py-1 dark:bg-neutral-800 ">
            <AnimatedShinyText className="inline-flex items-center justify-center px-2 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span className="text-sm">✨ Made in Mustapha</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
