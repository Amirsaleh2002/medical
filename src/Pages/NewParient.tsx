// import React from 'react'
import { useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";

function NewParient() {
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

        <div className="mt-10 mx-auto w-[85%] mb-10">
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
            <h1 className="text-xl font-bold my-4">درخواست نوبت</h1>
          </div>
          <div className="w-[100%] grid grid-cols-2">
            <div className="mb-4 p-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="emailInput"
              >
                نام و نام خانوادگی
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="emailInput"
                type="email"
              />
            </div>
            <div className="mb-6 p-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="number"
              >
                سن
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="number"
                type="number"
              />
            </div>
            <div className="mb-6 p-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="sex"
              >
                جنسیت
              </label>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <label htmlFor="man">مرد</label>
                  <input id="man" type="radio" />
                </div>
                <div className="flex items-center gap-2">
                  <label htmlFor="woman">زن</label>
                  <input id="woman" type="radio" />
                </div>
              </div>
            </div>
            <div className="mb-6 p-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="sex"
              >
                شماره همراه
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="telephone"
                type="tel"
              />
            </div>
            <div className="mb-6 p-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="schooling"
              >
                دپارتمان
              </label>
              <select>
                <option value="-1">یک مورد را انتخاب کنید</option>
                <option value="in">داخلی</option>
                <option value="out">خارجی</option>
              </select>
              <span className="text-red-400"></span>
            </div>
            <div className="mb-6 p-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="introduction"
              >
                تاریخ مورد نظر را انتخاب کنید
              </label>
              <select className="mx-2 shadow">
                <option value="-1">چه روزی ؟</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
              <select className="mx-2 shadow">
                <option value="-1">چه ماهی ؟</option>
                <option value="far">فروردین</option>
                <option value="ord">اردیبهشت</option>
                <option value="khor">خرداد</option>
                <option value="tir">تیر</option>
                <option value="mor">مرداد</option>
              </select>
              <select className="mx-2 shadow">
                <option value="-1">چه سالی ؟</option>
                <option value="1402">1402</option>
                <option value="1401">1401</option>
                <option value="1400">1400</option>
                <option value="1399">1399</option>
                <option value="1398">1398</option>
                <option value="1397">1397</option>
                <option value="1396">1396</option>
              </select>
              <span className="text-red-400"></span>
            </div>
            <div className="mb-4 p-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="emailInput"
              >
                ساعت مورد نظر را انتخاب کنید
              </label>
              <select className="mx-2 shadow">
                <option value="-1">چه ساعتی ؟</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
              <select className="mx-2 shadow">
                <option value="-1">چه دقیقه ای ؟</option>
                <option value="15">15</option>
                <option value="30">30</option>
                <option value="45">45</option>
              </select>
            </div>
            <div className="mb-4 p-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="emailInput"
              >
                پزشک مورد نظر را انتخاب کنید
              </label>
              <select className="mx-2 shadow">
                <option value="-1">دکتر</option>
                <option value="سید حسین هژبر الساداتی">
                  سید حسین هژبر الساداتی
                </option>
                <option value="مینو رضایی">مینو رضایی</option>
                <option value="مریم میرزایی">مریم میرزایی</option>
              </select>
            </div>
          </div>
          <button
            className="font-bold py-2 mt-6 bg-blue-600 text-white rounded-md px-4"
            type="button"
          >
            ثبت اطلاعات
          </button>

        </div>
          <Footer />
      </div>
    </>
  );
}

export default NewParient;
