import React, { useState } from "react";
import ButtonList from "./ButtonList";
import VideoCard from "./VideoCard";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { changeChannelTitle } from "../Store/slices";
import "react-redux";
import { useDispatch, useSelector } from "react-redux";
import {
  changedataHolder,
  changefilterBtnClicked,
  resetfilterBtnClicked,
} from "../Store/ButtonTextSlice";
import { setSuggestionList } from "../Store/slices";
import { UpdatedVideoCard } from "./VideoCard";
import ShimmerCards from "./ShimmerUi";
import { changeTitle } from "../Store/slices";

const VideoContainer = () => {
  let count = 0;
  let count2 = 0;
  const SugeestionList = useSelector((store) => store.app.sugesstionList);
  const btnText = useSelector((store) => store.btn.btnTextdata);
  const dh = useSelector((store) => store.btn.dataHolder);
  const filterBtnStatus = useSelector((store) => store.btn.filterBtnClicked);
  const NewVideoCard = UpdatedVideoCard();
  let newArr = [];
  const dispatch = useDispatch();

  const [dataHolder, setDataHolder] = useState(dh);
  //let dataHolder = dh;
  const [sData, setSdata] = useState("");
  const getData = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyDwLrceucoKKi3Xr0nsTKKHatyo4ubCSNU"
    );

    const json = await data.json();

    setDataHolder(json.items);
  };
  useEffect(() => {
    getData();

    console.log("***************************", dh.length);
  }, []);

  const handleVideoCardClick = () => {
    console.log("video card click");
    dispatch(changeTitle());
  };

  return (
    <div>
      <div className="flex flex-row overflow-x-scroll">
        <ButtonList />
      </div>
      <div className="flex flex-wrap justify-evenly w-full flex-col md:flex-row ">
        {filterBtnStatus ? (
          dataHolder.map((i) => {
            // console.log(i?.snippet?.tags);
            let count = 1;
            return i?.snippet?.tags?.map((k) => {
              if (k.includes(btnText)) {
                if (count === 1) {
                  console.log(k);
                  count++;
                  return (
                    <Link to={"/watch?v=" + i.id} className="w-[250px] inline">
                      <VideoCard info={i} />
                    </Link>
                  );
                }
                console.log(k);
              }
            });
          })
        ) : dataHolder?.length === 0 ? (
          //<h1 className="font-bold text-3xl">Youtube API Error !!!! </h1>

          <ShimmerCards />
        ) : (
          dataHolder?.map((i) => {
            return (
              <Link
                to={"/watch?v=" + i.id}
                className="w-[250px] inline"
                onClick={() => {
                  dispatch(changeTitle(i?.snippet?.title));
                  dispatch(changeChannelTitle(i?.snippet?.channelTitle));
                }}
              >
                <VideoCard info={i} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default VideoContainer;
