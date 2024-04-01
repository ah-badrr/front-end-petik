import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDetailMovie } from "../../Api";
// import Movie from "../../components/Movie/Movie";

const Detail = () => {
  // menggunakan userParams untuk menangkap parameter id dari url
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    getDetailMovie().then((result) => {
      setDatas(result);
    });
  }, []);

  console.log(`${datas}`);
  let { id } = useParams();
  return (
    <div>
      <h1>Detail</h1>
      <p>Parameter Id : {id}</p>
    </div>
  );
};

export default Detail;
