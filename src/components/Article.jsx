import { useContext } from "react";
import { GlobalContext } from "../context";

const ArticleStatus = ({ isNew }) => {
  return isNew ? (
    <div className="p-2 bg-green-500 text-white font-bold rounded-2xl">
      -- Baru !!
    </div>
  ) : (
    <div className="p-2 bg-blue-500 text-white font-bold rounded-2xl">
      -- Lama !!
    </div>
  );
};

function Article(props) {
  const user = useContext(GlobalContext);
  return (
      <div className="p-8 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl w-[400px]">
        <div className="text-2xl text-bold text-white">{props.title}</div>
        <div className="flex gap-8">
          <small className="">
            Date: {props.date}, tags: {props.tags.join(", ")}
          </small>
          <ArticleStatus isNew={props.isNew} />
        </div>
        <small>Ditulis oleh {user.username}</small>
      </div>
  );
}

export default Article;
