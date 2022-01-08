import React from "react";
import { MdOutlineExplore, MdEmojiFlags } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { LightningBoltIcon } from "@heroicons/react/outline";

function Sidebar() {
  return (
    <div className="bg-white h-80 lg:block rounded-2xl my-6 ml-4 relative shadow-lg w-80 dark:bg-gray-700">
      <nav className="mt-6">
        <div>
          <a
            className="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500"
            href="#"
          >
            <span className="text-left">
              <MdOutlineExplore />
            </span>
            <span className="mx-4 text-sm font-normal">Explore</span>
          </a>
          <a
            className="w-full   font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
            href="#"
          >
            <span className="text-left">
              <AiOutlineDollar />
            </span>
            <span className="mx-4 text-sm font-normal">Economy</span>
          </a>
          <a
            className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
            href="#"
          >
            <span className="text-left">
              <LightningBoltIcon className="w-5 h-5" />
            </span>
            <span className="mx-4 text-sm font-normal">Fire Power</span>
          </a>
          <a
            className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
            href="#"
          >
            <span className="text-left">
              <MdEmojiFlags />
            </span>
            <span className="mx-4 text-sm font-normal">Democracy</span>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
