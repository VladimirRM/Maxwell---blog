import React from "react";
import "./BlogContent.css";
import {posts} from '../../Shared/projectData'

export const BlogContent = () => {
 

  const blogPosts = posts.map((item) => {
    return (
      <div  key={item.id}className="post">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
    );
  });
  const getAmountOfPosts

  return (
    <>
      <h1>Simple Blog</h1>
      <div className="posts">
        {blogPosts}
      </div>
      <div className="count">
        <button onClick={}>Get amount of posts</button>
      </div>
    </>
  );
};
