import React, { useState } from "react";
import Link from "next/link";
import Data from "../../Data/pageData";

export default function Navigation() {
  return (
    <div className=" hidden md:block  ml-10 w-max">
      <ul className=" flex items-baseline space-x-4">
        {Data.map((item) => (
          <li className="list-none" key={item.id}>
            <Link key={item.id} href={`${item.name}`}>
              <a
                key={item.id}
                href={`${item.name}`}
                className={
                  "text-gray-300 hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-sm font-medium focus:bg-gray-900 text-white "
                }
              >
                {item.name.toUpperCase()}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
