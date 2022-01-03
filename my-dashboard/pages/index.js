import React from "react";
import Header from "../ui/header";
import Searchbar from "../ui/searchbar";
import Sidebar from "../ui/sidebar";
import Footer from "../ui/footer";

import AppArea from "../ui/AppArea";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-gray-100 dark:bg-gray-800  h-screen overflow-hidden relative">
        <div className="flex items-start justify-between">
          <Sidebar />
          <div className="flex flex-col w-full pl-0 md:p-6 md:space-y-4">
            <Searchbar />
            <AppArea />
          </div>
        </div>
      </main>
    </>
  );
}
