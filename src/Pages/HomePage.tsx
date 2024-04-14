// import React from 'react'

import { useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
// import Slider from "../Components/Slider";
import InfoBox from "../Components/InfoBox";
import UserInfoBox from "../Components/UserInfoBox";
import ArticleInfo from "../Components/ArticleInfo";
import Footer from "../Components/Footer";

function HomePage() {
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
                جستجو
              </button>
            </div>
          </form>
          <h2 className="text-xl font-bold">داشبورد</h2>
          <div className="flex justify-between items-center mt-4 flex-wrap gap-4">
            <InfoBox />
            <InfoBox />
            <InfoBox />
            <InfoBox />
            <InfoBox />
            <InfoBox />
          </div>

          <h2 className="text-xl font-bold mt-8">آخرین نوبت</h2>
          <div className="shadow-2xl shadow-slate-500 border border-solid border-slate-200 mt-6 rounded my-10">
            <div className="w-[100%] border-b-2 px-3 py-2 flex justify-between items-center">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                  />
                </svg>
                <h3 className="mr-2 text-gray-500">تعداد بیماران</h3>
              </div>
              <div>
                <span className="text-gray-500">55بیمار</span>
              </div>
            </div>
            <div className="px-3 py-2 my-3">
              <UserInfoBox />
              <UserInfoBox />
              <UserInfoBox />
              <UserInfoBox />
            </div>
          </div>

          <h2 className="text-xl font-bold mt-16">آخرین مقالات</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 my-10 justify-center">
            <ArticleInfo />
            <ArticleInfo />
            <ArticleInfo />
            <ArticleInfo />
          </div>
        </div>
          <Footer />
      </div>
    </>
  );
}

export default HomePage;
