import React from "react";
import Header from "../ui/header";
import Searchbar from "../ui/searchbar";
import Sidebar from "../ui/sidebar";

export default function Home() {
  return (
    <>
      {" "}
      <Header />
      <main className="bg-gray-100 dark:bg-gray-800  h-screen overflow-hidden relative">
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
          </div>
          {/* /End replace */}
        </div>
      </main>
    </>
  );
}
