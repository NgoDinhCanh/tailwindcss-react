import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import CardTailwind from "../card/CardTailwind";

const getPhotos = async (page) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=8`
    );
    // handle success
    console.log(response);
    return response.data;
  } catch (error) {
    // handle error
    console.log(error);
  }
};

const Photo = () => {
  const [randomPhotos, setRandomPhotos] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const handelLoadMore = useRef({});
  handelLoadMore.current = async () => {
    const images = await getPhotos(nextPage);
    const newPhotos = [...randomPhotos, ...images];
    setRandomPhotos(newPhotos);
    setNextPage(nextPage + 1);
  };
  useEffect(() => {
    handelLoadMore.current();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-4 gap-x-24 gap-y-8 p-8">
        {randomPhotos.length > 0 &&
          randomPhotos.map((item, index) => (
            <CardTailwind
              key={index}
              src={item.download_url}
              author={item.author}
            ></CardTailwind>
          ))}
      </div>
      <div className="text-center mt-8">
        <button
          className="inline-block px-8 py-4 bg-purple-400 text-white"
          onClick={handelLoadMore.current}
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default Photo;
