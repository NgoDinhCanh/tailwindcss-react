import React, { useState } from "react";
import useHackerNewsWithHook from "../../hooks/useHackerNewsWithHook";
// import lodash from "lodash";

//https://hn.algolia.com/api/v1/search?query=react
const HackerNewsWithHook = () => {
  const [query, setQuery] = useState("css");
  const { data, loading, errorMessage, setUrl } = useHackerNewsWithHook(
    `https://hn.algolia.com/api/v1/search?query=${query}`,
    { hits: [] }
  );
  return (
    <div className="bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 gap-x-2">
        <input
          type="text"
          className="border border-gray-200 block w-full rounded-md text-black p-5 focus:border-blue-600 transition-all"
          defaultValue={query}
          placeholder="Typing your search query ..."
          //   onChange={lodash.debounce((e) => setQuery(e.target.value), 500)}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white font-semibold p-5 rounded-md flex-shrink-0 hover:bg-blue-800"
          onClick={() =>
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          }
        >
          Fetching
        </button>
      </div>
      {loading && (
        <div className="loading mx-auto my-10 w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin"></div>
      )}
      {!loading && errorMessage && (
        <p className="text-red-400 my-5">{errorMessage}</p>
      )}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          data.hits?.length > 0 &&
          data.hits?.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 className="p-3 bg-gray-100 rounded-md" key={index}>
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNewsWithHook;
