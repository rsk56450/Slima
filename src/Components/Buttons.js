import React from "react";
import "react-redux";
import { useDispatch, useSelector } from "react-redux";
import {
  changeState,
  changefilterBtnClicked,
  resetfilterBtnClicked,
} from "../Store/ButtonTextSlice";
import useDataHook from "../Utils/useGetDataHook";
import { changedataHolder } from "../Store/ButtonTextSlice";

const data = [
  "All",
  "comedy",
  "Hindi",
  "Live",
  "New",
  "Drama",
  "Horror",
  "Kids",
  "News",
  "Songs",
  "Bollywood",
  "South",
  "Hollywood"
];

const Buttons = () => {
  const btnData = useSelector((store) => store.btn.btnTextdata);
  const dispatch = useDispatch();
  const handleFilterButtonClick = (e) => {
    if (e.currentTarget.textContent === "All") {
      dispatch(resetfilterBtnClicked());
    } else {
      dispatch(changeState(e.currentTarget.textContent));
      dispatch(changefilterBtnClicked());
    }
  };
  // useDataHook(btnData);
  return (
    <div className="flex ">
      {data.map((i) => {
        return (
          <button
            className=" bg-slate-400 p-5  m-2 rounded-md hover:opacity-80 font-bold"
            onClick={handleFilterButtonClick}
          >
            {i}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
