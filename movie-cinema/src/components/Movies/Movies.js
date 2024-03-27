import React from "react";
import "./Movies.css";
import Movie from "../Movie/Movie.js";

const Movies = () => {
  const datas = [
    {
      title: "Judul Film 1",
      year: 2021,
      poster: "https://picsum.photos/200/300",
      genre: "Horror",
    },
    {
      title: "Judul Film 2",
      year: 2020,
      poster: "https://picsum.photos/200/300",
      genre: "Action",
    },
    {
      title: "Judul Film 3",
      year: 2014,
      poster: "https://picsum.photos/200/300",
      genre: "Romance",
    },
    {
      title: "Judul Film 4",
      year: 2023,
      poster: "https://picsum.photos/200/300",
      genre: "Comedy",
    },
    {
      title: "Judul Film 5",
      year: 2022,
      poster: "https://picsum.photos/200/300",
      genre: "Thriller",
    },
    {
      title: "Judul Film 6",
      year: 2014,
      poster: "https://picsum.photos/200/300",
      genre: "Action",
    },
    {
      title: "Judul Film 7",
      year: 2017,
      poster: "https://picsum.photos/200/300",
      genre: "Horror",
    },
    {
      title: "Judul Film 8",
      year: 2018,
      poster: "https://picsum.photos/200/300",
      genre: "Romance",
    },
  ];
  return (
    <div>
      <h1>Latest Movies</h1>
      <div className="movies-container">
        {datas.map((data) => {
          return <Movie title={data.title} year={data.year} genre={data.genre} poster={data.poster} />;
        })}
      </div>
    </div>
  );
};

export default Movies;
