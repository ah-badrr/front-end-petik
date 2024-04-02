import axios from "axios";
// import {useParams} from "react-router-dom";

const apiKey = "8e465ff28280979967a70c1462d19f7f";

export const getMovieList = async () => {
  const movie = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
  
  return movie.data.results;
};

export const getMoviePopular = async () => {
  const movie = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
  
  return movie.data.results;
};

export const getTopMovie = async () => {
  const movie = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`);
  
  return movie.data.results;
};

export const getDetailMovie = async (id) => {
  // let { id } = useParams();
  
  const movie = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
  
  return movie.data;
};
