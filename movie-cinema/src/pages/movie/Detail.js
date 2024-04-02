import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetailMovie } from "../../Api.js";
import "./Detail.css";

const Detail = () => {
  let { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getDetailMovie(id).then((result) => {
      setMovie(result);
    });
  }, []);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail">
      <h1>{movie.original_title}</h1>
      <div className="s">
        <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.original_title} />
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default Detail;
