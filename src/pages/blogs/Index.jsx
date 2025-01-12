import { useState } from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
function Blog() {
  const posts = useLoaderData();
  return (
    <div className="h-screen overflow-auto p-8">
      <h2 className="text-3xl font-semibold text-center mb-4">
        My Blogs Posts
      </h2>
      {posts.map((item, index) => (
        <div key={index} className="">
          <Link to={`/blog/${item.id}`} className="">
            <div className="bg-blue-500 p-4 mb-4 rounded-xl text-white hover:font-semibold hover:text-lg">
              {item.title}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Blog;
