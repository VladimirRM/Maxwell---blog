import React from "react";
import "./BlogContent.css";
import { posts } from "../../Shared/projectData";
import {  getAmountOfPosts } from "../../Shared/projectLogic";
import { BlogCard } from "./Components/BlogCard";


export const BlogContent = () => {
  const blogPosts = posts.map((item) => {
    return (
      <BlogCard
      title={item.title}
      description={item.description}
      
      />
    );
  });
 

  return (
    <>
      <h1>Simple Blog</h1>
      <div className="posts">{blogPosts}</div>
      <div className="count">
        <button onClick={getAmountOfPosts(posts)}>Get amount of posts</button>
      </div>
    </>
  );
};
