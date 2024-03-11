import React from "react";

const ChatMsg = ({ name, message }) => {
  //  console.log("name is  ", name, " message is  ", message);
  return (
    <>
      <div className="flex items-center shadow-lg m-4">
        <img
          className="h-8"
          src="https://static.vecteezy.com/system/resources/previews/007/296/443/non_2x/user-icon-person-icon-client-symbol-profile-icon-vector.jpg"
        />
        <span className="font-bold mx-4">{name} </span>
        <span>{message}</span>
      </div>
    </>
  );
};

export default ChatMsg;
