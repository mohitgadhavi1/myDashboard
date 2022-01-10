import React, { useState } from "react";
import Link from "next/link";
import Data from "../../_data";

export default function Navigation() {
  const navigation = [
    { name: "Countries", id: 0, href: "#" },
    { name: "Stocks", id: 1, href: "#" },
    { name: "Socials", id: 2, href: "#" },
    { name: "Apps", id: 3, href: "#" },
  ];

  return (
    <div className=" hidden md:block  ml-10 w-max">
      <ul className=" flex items-baseline space-x-4">
        {Data.map((item) => (
          <li className="list-none" key={item.id}>
            <Link href="#">
              <a
                id={item.id}
                name={item.name}
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
