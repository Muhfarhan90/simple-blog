import { useState } from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
function Blog() {
  const posts = useLoaderData();
  return (
    <div className="h-screen overflow-auto">
      <h2>My Blogs Posts</h2>
      {posts.map((item, index) => (
        <div key={index} className=" ">
          <Link to={`/blog/${item.id}`}>- {item.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default Blog;
