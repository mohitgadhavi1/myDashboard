import styles from "../styles/Home.module.css";
import { Fragment } from "react";

export default function dashboard() {
  return (
    <main className="bg-gray-100 dark:bg-gray-800  h-screen overflow-hidden relative">
      <div className="flex items-start justify-between">
        <div className="h-screen hidden lg:block my-4 ml-4 shadow-lg relative w-80"></div>
        <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
          <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
            <div className="flex flex-col flex-wrap sm:flex-row ">
              <div className="w-full sm:w-1/2 xl:w-1/3"></div>

              <div className="w-full sm:w-1/2 xl:w-1/3"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
