import React from "react";
import { useSearchParams } from "react-router-dom";
import "react-redux";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import LiveChat from "./LiveChat";
import CommentsContainer from "./ComponentsContainer";

const WatchingPart = () => {
  const [searchParams] = useSearchParams();
  const SugeestionList = useSelector((store) => store.app.sugesstionList);
  console.log("Sygesttion lis t =  ", SugeestionList);

  console.log("**************************");
  console.log("serach params  ", searchParams.get("v"));
  const titleText = useSelector((store) => store.app.title);
  const channeltitleText = useSelector((store) => store.app.channelTitle);

  return (
    <>
      <div>
        <div>
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col">
              <iframe
                //width="860"
                //height="515"
                className="h-[240px] md:h-[515px] w-screen md:w-[860px] rounded-xl"
                src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <h1 className="font-bold text-3xl mb-2">{titleText}</h1>
              <div className="flex ml-[30px] mt-[10px]">
                <img
                  className="w-10 h-10 rounded-3xl"
                  src={
                    "https://static.rfstat.com/renderforest/images/v2/landing-pics/youtube-logo/4343.jpg"
                  }
                />
                <h1 className="mt-[5px] ml-2 text-xl font-bold mb-2">
                  {channeltitleText}
                </h1>
              </div>
            </div>
            <div className="mt-[12px] md:">
              {/* <div>
          {SugeestionList.map((i) => {
            return i.map((j) => {
              return <VideoCard info={j} />;
            });
          })}
        </div> */}
              <LiveChat />
            </div>
          </div>
        </div>

        <div className="md:mt-[-120px] w-screen md:w-[860px] ">
          <CommentsContainer />
        </div>
      </div>
    </>
  );
};

export default WatchingPart;
