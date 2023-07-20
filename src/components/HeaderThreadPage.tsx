import React from "react";
import { MdFilterList, MdSearch } from "react-icons/md";

export default function HeaderThreadPage() {
  return (
    <div className="container header-thread-page flex flex-row justify-between items-center w-screen h-20 bg-defaultLightHeaders px-4">
      <div className="icon cursor-pointer">
        <MdFilterList className="w-6 h-6 text-white"/>
      </div>
      <div className="search-thread-container flex flex-row items-center w-64 h-8 bg-headerSearchBar border-2 border-white px-3 rounded">
        <input type="text" placeholder="Search thread" className="bg-transparent text-white w-52 focus:outline-none" />
        <div className="search-icon">
          <MdSearch className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
}
