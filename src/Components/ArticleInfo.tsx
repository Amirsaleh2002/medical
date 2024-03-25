// import React from 'react'

import { Link } from "react-router-dom";

function ArticleInfo() {
  return (
    <div className="w-[230px] md:w-[185px] lg:w-[250px] rounded-2xl shadow-lg shadow-slate-300">
      <Link to={`/article/1`}>
        <img
          src="./images/download (1).jpg"
          alt="doctor image"
          className="rounded-xl w-full"
        />
      </Link>
      <div className="flex flex-col p-3 ">
        <div className="flex items-center gap-2 text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
            />
          </svg>
          <span>5 اردیبهشت 1402</span>
        </div>
        <p className="text-sm text-slate-800 mb-2 leading-6 font-semibold">
          دوره تحقیقاتی برای پزشکان
        </p>
        <Link
          to={`/article/1`}
          className="text-left hover:translate-x-2 transition-transform font-bold text-blue-700"
        >
          بیشتر بخوانید
        </Link>
      </div>
    </div>
  );
}

export default ArticleInfo;
