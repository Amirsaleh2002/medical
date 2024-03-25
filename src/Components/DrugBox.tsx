// import React from 'react'

import { Link } from "react-router-dom"

function DrugBox() {
  return (
      <div className="w-[150px] lg:w-[220px] rounded-2xl shadow-xl shadow-slate-400">
      <Link to={`/drug-store/1`}>
        <img src="/images/download (2).jpg" alt="doctor image" className="rounded-xl w-full"/>
      </Link>
      <div className="flex flex-col p-4 text-center">
        <h2 className="text-lg font-bold mb-2 text-slate-700">استتسکوپ</h2>
        <span className="text-gray-800">160 تومان</span>
      </div>
    </div>
  )
}

export default DrugBox