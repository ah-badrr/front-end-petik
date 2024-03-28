import React, { useState } from "react";
import "./Movies.css";
import AddMovieFrom from "../AddMovieFrom/AddMovieFrom";
import Movie from "../Movie/Movie.js";

const Movies = () => {
  // const [nama, setNama] = useState("Ucup");
  // console.log(nama);

  const [datas, setDatas] = useState([
    {
      title: "Judul Film 1",
      year: 2021,
      poster: "https://picsum.photos/300/400",
      genre: "Horror",
    },
    {
      title: "Judul Film 2",
      year: 2020,
      poster: "https://picsum.photos/300/400",
      genre: "Action",
    },
    {
      title: "Judul Film 3",
      year: 2014,
      poster: "https://picsum.photos/300/400",
      genre: "Romance",
    },
    {
      title: "Judul Film 4",
      year: 2023,
      poster: "https://picsum.photos/300/400",
      genre: "Comedy",
    },
    {
      title: "Judul Film 5",
      year: 2022,
      poster: "https://picsum.photos/300/400",
      genre: "Thriller",
    },
    {
      title: "Judul Film 6",
      year: 2014,
      poster: "https://picsum.photos/300/400",
      genre: "Action",
    },
    {
      title: "Judul Film 7",
      year: 2017,
      poster: "https://picsum.photos/300/400",
      genre: "Horror",
    },
    {
      title: "Judul Film 8",
      year: 2018,
      poster: "https://picsum.photos/300/400",
      genre: "Romance",
    },
  ]);

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
  return (
    <div>
      <h1>Latest Movies</h1>
      <div className="movies-container">
        {datas.map((data) => {
          return <Movie title={data.title} year={data.year} genre={data.genre} poster={data.poster} />;
        })}
      </div>

      {/* <p>{nama}</p> */}
      {/* <button onClick={handleClick}>Add Movie</button> */}
      <AddMovieFrom onAddMovie={addMovie} />
    </div>
  );
};

export default Movies;
