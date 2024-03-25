// import React from 'react'

import { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

function TurnRating() {
  const [sidebarStatus, setSidebarStatus] = useState<boolean>(false);

  return (
    <>
      <div
        className={`bg-green-950 absolute transition ${
          sidebarStatus === true ? "right-0 z-10 top-0 bottom-0" : "-right-80"
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

        <div className="mt-12 mx-auto w-[85%]">
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
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold my-4">لیست افراد در صف</h1>
            <Link
              to="/turn-rating/newpatient"
              type="submit"
              className="text-white  bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 "
            >
              درخواست نوبت
            </Link>
          </div>
          <div className="w-[100%] overflow-x-auto">
            <table className="table-auto w-full border border-separate border-spacing-4">
              <thead className="border-b">
                <tr className="text-right">
                  <th className="py-2 px-1">#</th>
                  <th>نام</th>
                  <th>شماره همراه</th>
                  <th>سن</th>
                  <th>جنسیت</th>
                  <th>دپارتمان</th>
                  <th>تاریخ</th>
                  <th>زمان</th>
                  <th>پزشک</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-right border-b py-2 ">
                  <td className="py-2 px-1">1</td>
                  <td>
                    <h2 className="font-bold text-sm">غلامرضا فیضی</h2>
                  </td>
                  <td>6987***0915</td>
                  <td>25</td>
                  <td>زن</td>
                  <td>داخلی</td>
                  <td>31 فروردین 1403</td>
                  <td>18:00</td>
                  <td>حسین هژبرالساداتی</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Footer />

        </div>
      </div>
    </>
  );
}

export default TurnRating;
