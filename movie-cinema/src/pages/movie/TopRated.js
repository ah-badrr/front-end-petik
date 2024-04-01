import React, { useState } from "react";
import { useEffect } from "react";
import { getTopMovie } from "../../Api";
import Movie from "../../components/Movie/Movie";

const Top = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    getTopMovie().then((result) => {
      setDatas(result);
    });
  }, []);
  return (
    <div>
      <h1>Top Rated</h1>
      <div className="movies-container">
        {datas.map((data) => {
          return <Movie id={data.id} count={["Vote Count : ", data.vote_count]} average={["Vote Average : ", data.vote_average]} title={data.title} year={data.release_date} poster={data.poster_path} />;
        })}
      </div>
    </div>
  );
};

export default Top;
