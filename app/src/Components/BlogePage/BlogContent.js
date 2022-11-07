import React from "react";
import "./BlogContent.css";

export const BlogContent = () => {
  const posts = [
    {
      id: 1,
      title: "Post 1",
      description:
        " Crime surges and falls for reasons that experts don’t fully understand, and many elected offices have little power to change trends on the ground. ",
    },
    {
      id: 2,
      title: "Post 1",
      description:
        " Crime surges and falls for reasons that experts don’t fully , and many elected offices have little power to change trends on the ground. ",
    },
    {
      id: 1,
      title: "Post 3",
      description:
        " Crime surges and falls for  that experts don’t fully understand, and many elected offices have little power to change trends on the ground. ",
    },
  ];

  const blogPosts = posts.map((item) => {
    return (
      <div  key={item.id}className="post">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
    );
  });

  return (
    <>
      <h1>Simple Blog</h1>
      <div className="posts">
        {blogPosts}
      </div>
      <div className="count">
        <button>Get amount of posts</button>
      </div>
    </>
  );
};
