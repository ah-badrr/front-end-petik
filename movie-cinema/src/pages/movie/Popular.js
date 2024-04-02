import React, { useState } from "react";
import { useEffect } from "react";
import { getMoviePopular } from "../../Api";
import Movie from "../../components/Movie/Movie";

const Popular = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    getMoviePopular().then((result) => {
      setDatas(result);
    });
  }, []);
  return (
    <div style={{ padding: "1rem 2rem" }}>
      <h1>Popular</h1>
      <div className="movies-container">
        {datas.map((data) => {
          return <Movie id={data.id} title={data.title} year={data.release_date} poster={data.poster_path} />;
        })}
      </div>
    </div>
  );
};

export default Popular;
