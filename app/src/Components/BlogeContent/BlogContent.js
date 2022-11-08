import React from "react";
import "./BlogContent.css";
import { posts } from "../../Shared/projectData";

import { BlogCard } from "./Components/BlogCard";


export const BlogContent = () => {
  const blogPosts = posts.map((item) => {
    return (
      <BlogCard
      key={item.id}
      title={item.title}
      description={item.description}
      
      />
    );
  });
 

  return (
    <>
      <h1>Simple Blog</h1>
      <div className="posts">{blogPosts}</div>
     
    </>
  );
};
