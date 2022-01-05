import React from "react";

const navigation = [
  { name: "Work", href: "#", current: true },

  { name: "Lerning", href: "#", current: false },
  { name: "Socials", href: "#", current: false },
  { name: "Entertainment", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-4">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current
                ? "bg-gray-900 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white",
              "px-3 py-2 rounded-md text-sm font-medium"
            )}
            aria-current={item.current ? "page" : undefined}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}
