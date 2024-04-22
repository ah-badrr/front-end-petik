import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const DetailCourse = () => {
  let { id } = useParams();
  const [course, setCourse] = useState([]);

  useEffect(() => {
    getDetailCourse(id);
  }, []);

  const getDetailCourse = async (id) => {
    const response = await axios.get(`https://api.sukmax.my.id/course/${id}`);
    setCourse(response.data);
  };

  return (
    <section className="section mt-5">
      <div className="columns">
        <div className="column is-half">
          <figure className="iamge is4by3">
            <img src={course.url} alt="product" />
          </figure>
        </div>
        <div className="column">
          <div className="content">
            <div className="title is-4 text-black"> {course.name}</div>
            <p>{course.desc}</p>
            <p>Trainer ID: {course.trainer_id}</p>
            <div className="field p-5">
              <button className="button is-primary has-text-white is-fullwidth mb-3">Add to Cart</button>
              <button className="button is-primary is-outlined is-fullwidth">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailCourse;
