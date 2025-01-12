import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");
  const onSearchChange = () => {
    props.onSearchChange(search);
  };

  const searchKeydown = (e) => {
    if ((e.key === "Enter")) {
      onSearchChange();
    }
  };
  return (
    <div>
      <div className="flex gap-4 mb-8 items-center">
        <p>Cari Artikel : </p>
        <input
          type="text"
          className="border-2 border-black rounded-lg py-2 px-4"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={searchKeydown}
        />
        <button className="py-2 px-6 bg-yellow-400 rounded-xl" onClick={onSearchChange}>
          Cari
        </button>
      </div>
      <div className="mb-4">
        <small className="">
          Ditemukan {props.totalPosts} data dengan pencarian kata {search}
        </small>
      </div>
    </div>
  );
}

export default Search;
