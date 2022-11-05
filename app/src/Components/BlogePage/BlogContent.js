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

  const blogPosts = posts.map((item)=>(

  ))

  return (
    <>
      <h1>Simple Blog</h1>
      <div className="posts">
        <div className="post">
          <h2>Post 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            commodi optio ipsam ea. Aperiam, velit cupiditate. Sint, est? Error
            asperiores corrupti alias perspiciatis voluptatibus aliquid
            delectus, reprehenderit consequuntur debitis provident?
          </p>
        </div>
        <div className="post">
          <h2>Post 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            commodi optio ipsam ea. Aperiam, velit cupiditate. Sint, est? Error
            asperiores corrupti alias perspiciatis voluptatibus aliquid
            delectus, reprehenderit consequuntur debitis provident?
          </p>
        </div>
        <div className="post">
          <h2>Post 3</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            commodi optio ipsam ea. Aperiam, velit cupiditate. Sint, est? Error
            asperiores corrupti alias perspiciatis voluptatibus aliquid
            delectus, reprehenderit consequuntur debitis provident?
          </p>
        </div>
      </div>
      <div className="count">
        <button>Get amount of posts</button>
      </div>
    </>
  );
};
