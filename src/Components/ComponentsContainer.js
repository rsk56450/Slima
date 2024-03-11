import React from "react";

const CommentsData = [
  {
    name: "Rohit Kadam",
    text: "This is a comment ",
    replies: [],
  },
  {
    name: "Rohit Kadam",
    text: "This is a comment ",
    replies: [
      {
        name: "Rohit Kadam",
        text: "This is a comment ",
        replies: [],
      },
      {
        name: "Rohit Kadam",
        text: "This is a comment ",
        replies: [],
      },
    ],
  },
  {
    name: "Rohit Kadam",
    text: "This is a comment ",
    replies: [
      {
        name: "Rohit Kadam",
        text: "This is a comment ",
        replies: [],
      },
      {
        name: "Rohit Kadam",
        text: "This is a comment ",
        replies: [
          {
            name: "Rohit Kadam",
            text: "This is a comment ",
            replies: [],
          },
          {
            name: "Rohit Kadam",
            text: "This is a comment ",
            replies: [
              {
                name: "Rohit Kadam",
                text: "This is a comment ",
                replies: [],
              },
              {
                name: "Rohit Kadam",
                text: "This is a comment ",
                replies: [],
              },
              {
                name: "Rohit Kadam",
                text: "This is a comment ",
                replies: [],
              },
              {
                name: "Rohit Kadam",
                text: "This is a comment ",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const Comments = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <>
      <div className="flex bg-gray-300 rounded-lg shadow-lg my-2">
        <img
          className="h-8 w-8 m-4"
          alt="user"
          src="https://static.vecteezy.com/system/resources/previews/007/296/443/non_2x/user-icon-person-icon-client-symbol-profile-icon-vector.jpg"
        />
        <div className="px-3">
          <p className="font-bold">{name}</p>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((i, index) => (
    <>
      <div>
        <Comments key={index} data={i} />
      </div>
      <div className="pl-5 border: border-l-2 border-l-gray-800">
        {/* <Comments key={index} data={i} />
        <Comments key={index} data={i} />
        <Comments key={index} data={i} /> */}
        <CommentsList comments={i.replies} />
      </div>
    </>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2 w-screen md:w-1/2">
      <h1 className="text-2xl font-bold mt-[30px]">Comments:</h1>
      {/* <Comments data={CommentsData[0]} /> */}
      <CommentsList comments={CommentsData} />
    </div>
  );
};

export default CommentsContainer;
