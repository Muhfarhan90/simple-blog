import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
function SinglePost() {
  const post = useLoaderData();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (post) {
      setLoading(false);
    }
  }, [post]);
  if (loading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  console.log("loading");
  return (
    <div className="bg-blue-500 p-8 text-white">
      <h2 className="text-3xl  font-bold mb-4">{post?.title}</h2>
      <p>{post?.body}</p>
    </div>
  );
}

export default SinglePost;
