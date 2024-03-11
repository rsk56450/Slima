import { useDispatch } from "react-redux";
import { changedataHolder } from "../Store/ButtonTextSlice";
import { useEffect } from "react";

const useDataHook = (category) => {
  console.log("categroy ", category);
};

export default useDataHook;
