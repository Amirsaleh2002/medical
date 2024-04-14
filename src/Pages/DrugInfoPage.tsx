// import React from 'react'

import { useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";

function DrugInfoPage() {

  const [sidebarStatus, setSidebarStatus] = useState<boolean>(false);

  return (
      <>
      <div
        className={`bg-green-950 absolute ${
          sidebarStatus === true ? "transition-[3s] right-0 z-10 top-0 bottom-0" : "-right-80 transition-[3s]"
        }`}
      >
        <Sidebar />
      </div>

      <div
        className={`col-span-12 w-full ${
          sidebarStatus === true ? "bg-slate-200 opacity-60" : ""
        }`}
        onClick={() => 
          sidebarStatus === true ? setSidebarStatus(false) : false}
      >
        {!sidebarStatus && (
          <button
            type="button"
            className="block md:hidden px-[8%] py-[2%]"
            onClick={() => setSidebarStatus(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        )}

        <Header />

        <div className="mt-10 mx-auto w-[85%]">
        <form className="md:w-[400px] my-4">
          <div className="relative">
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm border border-gray-300 rounded-lg focus:outline-none"
              placeholder="دنبال چی هستی؟؟"
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
          <div className="flex justify-between">
            <h1 className="text-base"> 
            </h1>
            <img
              src="/images/download (2).jpg"
              alt="doctor image"
              className="rounded-xl w-52 h-52"
            />
          </div>

          <div className="flex flex-col justify-center my-10 gap-4">
          </div>

        </div>
          <Footer />
      </div>
    </>
  )
}

export default DrugInfoPage