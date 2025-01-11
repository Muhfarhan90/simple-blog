import { useState } from "react";
import postsData from "../posts.json";
import Article from "../components/Article";
import Search from "../components/Search";
function Homepage() {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(0);

  const onSearchChange = (value) => {
    const filteredPosts = postsData.filter((item) =>
      item.title.includes(value)
    );
    setPosts(filteredPosts);
    setTotalPosts(filteredPosts.length);
  };

  return (
    <div className="">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">Simple Blog</h1>
      <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
      <div className="flex flex-col gap-4 mb-8">
        {posts.map(({ title, tags, date, isNew }, index) => (
          // <Article title={title} tags={tags} date={date} />
          <Article {...{ title, tags, date, isNew }} key={index} />
        ))}
      </div>
     
    </div>
  );
}

export default Homepage;
