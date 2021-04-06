import React from "react";
// import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Favourite = () => {
  //const [favouriteList, setFavouriteList] = useState([]);
  const favMovie = useSelector((state) => state.addedMovie);

  const dispatchRemoveFavourite = useDispatch();

  const removeFavourite = (key) => {
    const removeMovieImage = favMovie.filter((item) => {
      return key !== item.show.id;
    });

    dispatchRemoveFavourite({
      type: "REMOVE_FAVOURITE",
      payload: removeMovieImage,
    });
  };

  return (
    <div>
      <h1>Fav List of Movies</h1>
      <div className="movieimages">
        {favMovie &&
          favMovie.map((item) => {
            return (
              <div className="movie">
                <img
                  className="favButton"
                  src={item.show.image.medium}
                  alt="img"
                />
                <div
                  className="btn"
                  onClick={() => removeFavourite(item.show.id)}
                >
                  Remove From favourite
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Favourite;
