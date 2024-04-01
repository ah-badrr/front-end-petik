import React, { useState } from "react";
import "./Movies.css";
import AddMovieFrom from "../AddMovieFrom/AddMovieFrom";
import Movie from "../Movie/Movie.js";
import { useEffect } from "react";
import { getMovieList } from "../../Api.js";

const Movies = () => {
  // const [nama, setNama] = useState("Ucup");
  // console.log(nama);

  const [datas, setDatas] = useState([]);

  const handleClick = () => {
    const movie = {
      title: "Amazing Spiderman",
      year: 2012,
      poster: "https://picsum.photos/300/400",
      genre: "Action",
    };
    // setNama("Budi");
    setDatas([...datas, movie]);
  };
  const addMovie = (movie) => {
    setDatas([...datas, movie]);
  };
  useEffect(() => {
    getMovieList().then((result) => {
      setDatas(result);
    });
  }, []);
  console.log(datas);
  return (
    <div>
      <h1>Latest Movies</h1>
      <div className="movies-container">
        {datas.map((data) => {
          return <Movie id={data.id} title={data.title} year={data.release_date} poster={data.poster_path} />;
        })}
      </div>
      <AddMovieFrom onAddMovie={addMovie} />

      {/* <p>{nama}</p> */}
      {/* <button onClick={handleClick}>Add Movie</button> */}
    </div>
  );
};

export default Movies;
