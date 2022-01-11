import React from "react";
import Header from "../ui/Header/header";
import Footer from "../ui/footer";
import Sidebar from "../ui/sidebar";

import AppArea from "../ui/AppArea";

export default function content() {
  return (
    <div className="bg-gray-100 h-screen dark:bg-gray-800">
      <Header />
      <main className="bg-gray-100 flex dark:bg-gray-800  h-5/6 overflow-hidden relative">
        <div className="flex flex-col   w-max h-screen items-start justify-between">
          <Sidebar />
          <Footer />
        </div>
        <div className="flex flex-col  w-full pl-0 md:p-6 md:space-y-4">
          <AppArea />
        </div>
      </main>
    </div>
  );
}
