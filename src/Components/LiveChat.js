import React, { useState } from "react";
import ChatMsg from "./ChatMsg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Store/ChatSlice";

import { addMessage } from "../Store/ChatSlice";
import generateRandomName from "../Store/helper";
import { generateRandomMessaage } from "../Store/helper";

const LiveChat = () => {
  const chatMessage = useSelector((store) => store.chat.messages);

  const [stopMsg, setStopMsg] = useState(true);

  const [LiveMsg, setLiveMsg] = useState("");

  const dispatch = useDispatch();

  const clerIntervalFunction = () => {
    clearInterval(time);
    console.log("clerIntervalFunction executed ");
  };

  let time;

  useEffect(() => {
    {
      stopMsg &&
        (time = setInterval(() => {
          console.log("Api polling");
          dispatch(
            addMessage({
              name: generateRandomName(),
              message: generateRandomMessaage(20),
            })
          );
        }, 1000));
    }

    return () => {
      {
        clerIntervalFunction();
      }
      console.log("garbage method executed");
    };
  }, [stopMsg]);

  return (
    <div>
      <div className="ml-2  w-[400px] h-[600px] p-2 border border-black rounded-lg overflow-y-scroll flex flex-col-reverse ">
        {chatMessage.map((i, index) => {
          return <ChatMsg key={index} name={i.name} message={i.message} />;
        })}
      </div>

      <form
        className="w-[400px] p-2 ml-2 border border-black"
        onSubmit={(e) => {
          dispatch(
            addMessage({
              name: "Rohit Kadam",
              message: LiveMsg,
            })
          );
          e.preventDefault();
          setLiveMsg("");
        }}
      >
        <input
          type="text"
          className="w-[300px] p-2 ml-2 border border-black"
          value={LiveMsg}
          onChange={(e) => {
            setLiveMsg(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100 border border-black p-2">
          Send
        </button>
      </form>
      {/* <button
        className="m-2 p-2 bg-orange-200 rounded-lg"
        onClick={() => {
          //setStopMsg(true);
        }}
      >
        Start Live Chat
      </button> */}
      <button
        className="m-2 p-2 bg-orange-200 rounded-lg"
        onClick={() => {
          console.log("stope live chate executed ");
          setStopMsg(false);
          clerIntervalFunction();
        }}
      >
        Stop Live Chat
      </button>
    </div>
  );
};

export default LiveChat;
