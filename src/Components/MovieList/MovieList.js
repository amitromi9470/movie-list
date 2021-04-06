import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import "./MovieList.css";

const MovieList = () => {
  const [list, setList] = useState();
  const dispatchAddFavourite = useDispatch();

  useEffect(() => {
    fetch("http://api.tvmaze.com/search/shows?q=girls").then((res) => {
      res.json().then((res) => {
        setList(res);
      });
    });
  }, []);

  const addToFavourite = (key) => {
    const movieImage = list.find((item) => {
      return key === item.show.id;
    });

    dispatchAddFavourite({
      type: "ADD_FAVOURITE",
      payload: movieImage,
    });
    alert("Added To Favourite");
  };

  const renderImages = () => {
    return (
      list &&
      list.map((item) => {
        return (
          <div className="movie">
            <img
              className="favButton"
              src={item.show.image && item.show.image.medium}
              alt="img"
            />
            <Button
              key={item.show.id}
              addToFavourite={() => addToFavourite(item.show.id)}
            />
          </div>
        );
      })
    );
  };

  return <div className="movieimages">{renderImages()}</div>;
};

export default MovieList;
