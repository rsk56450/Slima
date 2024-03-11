import React from "react";
import { useState } from "react";

const Demo = () => {
  const [text, settext] = useState("");
  console.log("component rendered ... ");
  return (
    <div className="m-4 w-96 h-96 border border-black">
      <div>
        <input
          type="text"
          className="border border-violet-950 w-72 m-4 px-2"
          value={text}
          onChange={(e) => {
            settext(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Demo;
