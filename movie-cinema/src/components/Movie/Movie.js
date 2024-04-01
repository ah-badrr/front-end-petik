import React from "react";
import "./Movie.css";
import { NavLink } from "react-router-dom";

const Movie = (props) => {
  const { id, title, genre, year, poster, average, count } = props;
  return (
    <div className="movie">
      <img src={`https://image.tmdb.org/t/p/w300/${poster}`} alt="title" />
      <h3 className="title">
        <NavLink to={`/detail/${id}`}>{title}</NavLink>
      </h3>
      <p className="year">Release Date : {year}</p>
      <p className="genre">{genre} </p>
      <p>{average} </p>
      <p>{count} </p>
    </div>
  );
};

export default Movie;
