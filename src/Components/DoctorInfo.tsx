// import React from 'react'
import { Link } from "react-router-dom";
function DoctorInfo() {

  // let pageID = useParams()
  // console.log(pageID);
  
  return (
    <div className="w-[230px] md:w-[185px] lg:w-[250px] rounded-2xl shadow-xl shadow-slate-400 ">
      <Link to={`/doctor/1`}>
        <img src="/images/download (4).jpg" alt="doctor image" className="rounded-xl"/>
      </Link>
      <div className="flex flex-col p-4 text-center">
        <h2 className="text-lg font-bold mb-2 text-slate-600">حسین ساداتی</h2>
        <span className="text-gray-900">متخصص قلب وعروق</span>
      </div>
    </div>
  );
}

export default DoctorInfo;
