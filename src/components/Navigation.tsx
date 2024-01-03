import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="mx-0 px-0 w-full h-[110px] shadow-md bg-gray-500 text-white">
      <div className="flex flex-col items-center px-5 w-screen">
        <h3 className="font-bold py-3">GitHab Search</h3>
        <div className="flex text-center justify-between h-[50px] px-5 bg-gray-500">
          <Link
            to="/"
            className="flex justify-center items-center shadow-md h-[50px] px-5 hover:shadow-lg hover:shadow-white hover:bg-slate-500 bg-slate-500 min-w-min mr-3 rounded text-sm sm:text-base"
          >
            Search Repository
          </Link>
          <Link
            to="/favourites"
            className="flex justify-center items-center shadow-md h-[50px] px-5 hover:shadow-lg hover:shadow-white hover:bg-slate-500 bg-slate-500 min-w-min rounded text-sm sm:text-base"
          >
            Favourites repository
          </Link>
        </div>
      </div>
    </nav>
  );
}
