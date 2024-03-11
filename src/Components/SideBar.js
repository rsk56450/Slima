import React from "react";
import { useSelector } from "react-redux";
import "react-router-dom"
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuItemOpen = useSelector((store) => store.app.isMenuOpen);
  // console.log("menu item ----------------  ", MenuItem);

  return isMenuItemOpen ? (
    ""
  ) : (
    <div className="h-vh w-40 p-5 shadow-xl">
      <ul>
        <Link to={"/"}><li className="p-2 font-bold">Home*</li></Link>
        <li className="p-2">Shorts</li>
        <li className="p-2">Subscriptions</li>
      </ul>

      <h1 className="font-bold pt-5">Watch</h1>
      <ul>
        <li className="p-2">Movies</li>
        <li className="p-2">Sports</li>
        <li className="p-2">Live</li>
        <li className="p-2">Comdey</li>
      </ul>

      <h1 className="font-bold pt-5">You </h1>
      <ul>
        <li className="p-2">History</li>
        <li className="p-2">Your Videos</li>
        <li className="p-2">Watch Later </li>
        <li className="p-2">Liked Videos</li>
      </ul>
    </div>
  );
};

export default SideBar;
