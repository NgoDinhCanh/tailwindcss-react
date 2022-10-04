import axios from "axios";
import React, { useEffect, useReducer, useRef } from "react";

const initialState = {
  hits: [],
  query: "react",
  loading: true,
  errorMessage: "",
  url: `https://hn.algolia.com/api/v1/search?query=''`,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA": {
      return { ...state, hits: action.payload };
    }
    case "SET_LOADING": {
      return { ...state, loading: action.payload };
    }
    case "SET_ERROR_MESSAGE": {
      return { ...state, errorMessage: action.payload };
    }
    case "SET_URL": {
      return { ...state, url: action.payload };
    }
    case "SET_QUERY": {
      return { ...state, query: action.payload };
    }

    default:
      break;
  }
};
const HackerNewsReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //   const [hits, setHits] = useState([]);
  //   const [query, setQuery] = useState("react");
  //   const [loading, setLoading] = useState(true);
  //   const [errorMessage, setErrorMessage] = useState("");
  //   const [url, setUrl] = useState(
  //     `https://hn.algolia.com/api/v1/search?query=${query}`
  //   );
  const handleFetchData = useRef({});
  handleFetchData.current = async () => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    try {
      const response = await axios.get(state.url);
      console.log(response.data?.hits);
      dispatch({
        type: "SET_DATA",
        payload: response.data?.hits || [],
      });
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    } catch (error) {
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
      dispatch({
        type: "SET_ERROR_MESSAGE",
        payload: `The error happened: ${error}`,
      });
    }
  };
  useEffect(() => {
    handleFetchData.current();
  }, [state.url]);

  return (
    <div className="bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 gap-x-2">
        <input
          type="text"
          className="border border-gray-200 block w-full rounded-md text-black p-5 focus:border-blue-600 transition-all"
          defaultValue={state.query}
          placeholder="Typing your search query ..."
          onChange={(e) =>
            dispatch({
              type: "SET_QUERY",
              payload: e.target.value,
            })
          }
        />
        <button
          className="bg-blue-600 text-white font-semibold p-5 rounded-md flex-shrink-0 hover:bg-blue-800"
          onClick={() =>
            dispatch({
              type: "SET_URL",
              payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`,
            })
          }
        >
          Fetching
        </button>
      </div>
      {state.loading && (
        <div className="loading mx-auto my-10 w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin"></div>
      )}
      {!state.loading && state.errorMessage && (
        <p className="text-red-400 my-5">{state.errorMessage}</p>
      )}
      <div className="flex flex-wrap gap-5">
        {!state.loading &&
          state.hits.length > 0 &&
          state.hits.map((item, index) => {
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

export default HackerNewsReducer;
