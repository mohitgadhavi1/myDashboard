import React, { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const navigation = [
    { name: "Countries", id: 0, href: "#" },
    { name: "Stocks", id: 1, href: "#" },
    { name: "Socials", id: 2, href: "#" },
    { name: "Apps", id: 3, href: "#" },
  ];

  return (
    <div className="hidden md:block">
      <ul className="ml-10 flex items-baseline space-x-4">
        {navigation.map((item) => (
          <li className="list-none" key={item.id}>
            <Link href={item.href}>
              <a
                id={item.id}
                name={item.name}
                className={
                  "text-gray-300 hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-sm font-medium focus:bg-gray-900 text-white "
                }
              >
                {item.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
