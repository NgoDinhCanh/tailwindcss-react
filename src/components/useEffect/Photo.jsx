import React, { useEffect, useState } from "react";
import axios from "axios";
import CardTailwind from "../card/CardTailwind";

const getPhotos = (page) => {
  return axios
    .get(`https://picsum.photos/v2/list?page=${page}&limit=8`)
    .then((response) => {
      // handle success
      return response.data;
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};

const Photo = () => {
  const [randomPhotos, setRandomPhotos] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  //useEffect(callback,[dependencies])
  useEffect(() => {
    handleLoadMorePhotos();
  }, []);
  const handleLoadMorePhotos = () => {
    getPhotos(nextPage).then((photos) => {
      const newPhotos = [...randomPhotos, ...photos];
      setRandomPhotos(newPhotos);
      setNextPage(nextPage + 1);
    });
  };
  return (
    <div>
      <div className="grid grid-cols-4 gap-x-24 gap-y-8 p-8">
        {randomPhotos.length > 0 &&
          randomPhotos.map((item, index) => (
            <CardTailwind
              key={item.id}
              src={item.download_url}
              author={item.author}
            ></CardTailwind>
          ))}
      </div>
      <div className="text-center mt-8">
        <button
          className="inline-block px-8 py-4 bg-purple-400 text-white"
          onClick={handleLoadMorePhotos}
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default Photo;
