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
      <div className="flex gap-4 mb-8">
        <p>Cari Artikel : </p>
        <input
          type="text"
          className="border-2 border-black"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={searchKeydown}
        />
        <button className="p-4 bg-yellow-400" onClick={onSearchChange}>
          Cari
        </button>
      </div>
      <div>
        <small>
          Ditemukan {props.totalPosts} data dengan pencarian kata {search}
        </small>
      </div>
    </div>
  );
}

export default Search;
