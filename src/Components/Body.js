import React from "react";
import SideBar from "./SideBar";
import VideoContainer from "./VideoContainer";
import { Outlet } from "react-router-dom";
//import Head from "./Head";
import HeadCopy from "./Head copy";

const Body = () => {
  return (
    <div>
      <HeadCopy />
      <div className="flex">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
