import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="items-center h-[110px] px-5 shadow-md bg-gray-500 text-white w-auto">
      <div className="flex-col text-center  h-[50px] px-5 w-auto bg-gray-500 ">
        <h3 className="font-bold py-3">GitHab Search</h3>
        <div className="flex text-center justify-around h-[50px] px-5 bg-gray-500">
          <Link
            to="/"
            className="flex justify-center text-center items-center shadow-md h-[50px] px-5 hover:shadow-lg hover:shadow-white hover:bg-slate-500 bg-slate-500 w-1/2 mr-3 rounded"
          >
            Search GitHub repository
          </Link>
          <Link
            to="/favourites"
            className="flex justify-center text-center items-center shadow-md h-[50px] px-5 hover:shadow-lg hover:shadow-white hover:bg-slate-500 bg-slate-500 w-1/2 mr-3 rounded"
          >
            Favourites repository
          </Link>
        </div>
      </div>
    </nav>
  );
}
