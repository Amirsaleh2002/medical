// import React from 'react'

import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex">
      <div className="w-[85%] my-8 mx-auto md:flex justify-around gap-4 shadow-lg shadow-slate-500 py-6 px-2 rounded-lg">
        <div className="flex flex-col">
          <h2 className="text-lg my-4 font-bold">دسترسی ها</h2>
          <ul className="flex flex-col gap-4">
            <Link
              to="/doctor"
              className="text-base hover:-translate-x-2 hover:text-green-500 md:text-sm items-center p-1 flex gap-1  font-bold transition-all "
            >
              لیست پزشکان
            </Link>{" "}
            <Link
              to="/article"
              className="text-base hover:-translate-x-2 hover:text-green-500 items-center p-1 flex gap-1  font-bold transition-all "
            >
              مقالات
            </Link>
            <Link
              to="/turn-rating"
              className="text-base hover:-translate-x-2 hover:text-green-500 items-center p-1 flex gap-1  font-bold transition-all "
            >
              نوبت دهی
            </Link>
            <Link
              to="/drug-store"
              className="text-base hover:-translate-x-2 hover:text-green-500 items-center p-1 flex gap-1  font-bold transition-all "
            >
              داروخانه
            </Link>
          </ul>
        </div>

        <form className="md:w-[400px] my-4 flex flex-col gap-4">
          <h2 className="text-lg font-bold">ارتباط با ما</h2>
          <div className="relative">
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm border border-gray-300 rounded-lg focus:outline-none"
              placeholder="ایمیل یا تلفن همراه خود را وارد کنید"
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              ارسال
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Footer;
