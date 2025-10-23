import React from "react";
import { Bookmark } from "lucide-react";

export default function Cards({ logo, name, posted, role, jobType, level, salary, location }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg w-[280px] p-5 flex flex-col justify-between hover:shadow-2xl border-t-4 border-teal-500 transition hover:-translate-y-1">
      
      <div className="flex justify-between items-center">
        <img src={logo} alt={name} className="w-14 h-14 rounded-full border object-cover" />
        <button className="text-gray-600 hover:text-black text-sm flex items-center gap-1">
          Save <Bookmark size={15} />
        </button>
      </div>

      <div className="mt-3">
        <h3 className="text-sm font-semibold">
          {name} <span className="text-gray-500 text-xs ml-2">{posted}</span>
        </h3>
        <h2 className="text-lg font-bold text-gray-900">{role}</h2>

        <div className="mt-2 flex gap-2">
          <span className="text-xs bg-teal-100 text-teal-700 px-3 py-1 rounded-lg capitalize">{jobType}</span>
          <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-lg capitalize">{level}</span>
        </div>
      </div>

      <div className="mt-5 flex justify-between items-center">
        <div>
          <h3 className="font-semibold text-gray-900">{salary}</h3>
          <p className="text-xs text-gray-500">{location}</p>
        </div>
        <button className="bg-gradient-to-r from-teal-600 to-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:scale-105 transition">
          Apply
        </button>
      </div>

    </div>
  );
}
