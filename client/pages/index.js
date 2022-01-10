import React from "react";
import Header from "../ui/Header/header";

import Sidebar from "../ui/sidebar";

import AppArea from "../ui/AppArea";

export default function Home() {
  return (
    <body className="bg-gray-100 dark:bg-gray-800">
      <Header />
      <main className="bg-gray-100 dark:bg-gray-800  h-screen overflow-hidden relative">
        <div className="flex items-start justify-between">
          <Sidebar />
          <div className="flex flex-col w-full pl-0 md:p-6 md:space-y-4">
            <AppArea />
          </div>
        </div>
      </main>
    </body>
  );
}
