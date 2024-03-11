import React, { useRef } from "react";
import "react-redux";
import { useDispatch, useSelector } from "react-redux";
import "../Store/Store";

import "../Store/slices";
import { OpenMenu } from "../Store/slices";

import "react-router-dom";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ResultPage from "./ResultPage";

const HeadCopy = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const [sugeestionList, setsugeestionList] = useState([]);

  const navigate = useNavigate();
  let SearchResults = "/results?search_query=";

  const refVar = useRef(searchQuery);

  const handleSuggestionClick = (e) => {
    navigate("/results?search_query=" + e.currentTarget.innerText);
  };

  const handleSearchButtonClick = (e) => {
    navigate("/results?search_query=" + searchQuery);
    console.log(e.currentTarget.nextSibling);
    e.currentTarget.nextSibling.style.display = "none";
  };

  const getSuggestionData = async () => {
    const data = await fetch(
      "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        searchQuery
    );

    const json = await data.json();
    console.log("getSuggestionData executed ", json[1]);
    setsugeestionList(json[1]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getSuggestionData();
    }, 200);

    console.log("useeffect exeucted");
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const dispatch = useDispatch();
  const hamburgerButton = () => {
    dispatch(OpenMenu());
  };

  return (
    <div className="h-16 w-screen shadow-lg flex ">
      <div className="flex">
        <img
          className="h-12 w-12 p-2 cursor-pointer"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          onClick={hamburgerButton}
        ></img>
        <a href="/">
          <img
            className="h-12 w-20 p-2 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1024px-Logo_of_YouTube_%282015-2017%29.svg.png"
          ></img>
        </a>
      </div>
      <div className="h-12 w-[87%] md:w-[35rem] pt-2 flex absolute right-0 md:right-[33%]">
        <input
          type="text"
          placeholder="Search Something..."
          className="border border-slate-600  w-[35rem] rounded-l-full md:rounded-full  px-4 "
          value={searchQuery}
          onChange={(e) => {
            setsearchQuery(e.target.value);
            console.log(e.currentTarget.parentNode.lastChild.firstChild);
            e.currentTarget.parentNode.lastChild.firstChild.style.display =
              "block";
          }}
        />
        <button
          className="bg-slate-500 px-4 rounded-r-full relative md:right-[35px] "
          onClick={handleSearchButtonClick}
        >
          🔍
        </button>

        <div
          className=" absolute top-[48px] rounded-r-sm w-[32rem]"
          id="suggestList"
        >
          <ul className="bg-white">
            {sugeestionList.length === 0
              ? ""
              : sugeestionList.map((i, index) => {
                  return (
                    <li
                      key={index}
                      className="rounded-lg border: border-b-2 cursor-pointer m-2 p-2"
                      onClick={(e) => {
                        console.log(
                          "sugeestion clicked",
                          e.currentTarget.innerText,
                          "parent -- L "
                        );

                        setsearchQuery(e.currentTarget.innerText);

                        handleSuggestionClick(e);
                        e.currentTarget.parentElement.style.display = "none";
                      }}
                    >
                      🔍 {i}
                    </li>
                  );
                })}
          </ul>
        </div>
      </div>

      <div>
        {/* <img
          className="md:h-12 md:w-12 md:absolute md:left-[84rem] hidden md:block"
          src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
        ></img> */}
      </div>
    </div>
  );
};

export default HeadCopy;
