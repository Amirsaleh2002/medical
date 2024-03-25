// import React from 'react'

function UserInfoBox() {
  return (
    <div className="flex items-center justify-between my-3">
      <div className="flex items-center gap-2">
        <div>
          <img
            src="./images/download3.jpg"
            alt="patient"
            className="rounded-[50%] w-10 h-10"
          />
        </div>
        <div>
            <h2 className="font-bold text-sm">غلامرضا فیضی</h2>
            <span className="text-sm">نوبت در تاریخ 12 بهمن 1402</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="p-2 rounded-[50%] bg-green-200 flex items-center justify-center text-green-400">
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
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </div>
        <div className="p-2 rounded-[50%] bg-red-200 flex items-center justify-center text-red-400">
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
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default UserInfoBox;
