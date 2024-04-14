// import React from 'react'

import { useState } from "react";
import { Link } from "react-router-dom";
import DoctorInfo from "../Components/DoctorInfo";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";

function DoctorsList() {
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
          sidebarStatus === true ? setSidebarStatus(false) : false
        }
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
          <div className="h-12 w-68 min-w-[200px] my-10">
            <select className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 text-sm font-normal text-blue-gray-700 outline outline-0 transition-allempty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
              <option value="-1">نمایش بر اساس : </option>
              <option value="1">متخصص</option>
              <option value="2">عمومی</option>
            </select>
          </div>
          <div className="flex justify-between items-center my-6">
            <h1 className="text-xl font-bold my-4">لیست پزشکان</h1>
            <Link
              to="/doctor/newdoctor"
              type="submit"
              className="text-white  bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 "
            >
              اضافه کردن دکتر جدید
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-6 justify-center">
            <DoctorInfo />
            <DoctorInfo />
            <DoctorInfo />
            <DoctorInfo />
          </div>

        </div>
          <Footer />
      </div>
    </>
  );
}

export default DoctorsList;
