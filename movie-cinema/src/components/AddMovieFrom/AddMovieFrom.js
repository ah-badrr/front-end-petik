import React, { useState } from "react";
import "./AddMovieFrom.css";
const AddMovieFrom = ({ onAddMovie }) => {
  const [formData, setFromData] = useState({
    title: "",
    year: "",
    image: "",
    genre: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie(formData);
  };
  return (
    <div className="container">
      <section className="form">
        <div className="form-left">
          <img className="form-image" src="https://picsum.photos/300/400" alt="img-form" />
        </div>
        <div className="form-right">
          <h1 className="form-title">Add Movie</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-inputgroup">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input type="text" name="title" id="title" className="form-input" onChange={handleChange} />
            </div>
            <div className="form-inputgroup">
              <label htmlFor="year" className="form-label">
                Year
              </label>
              <input type="number" name="year" id="year" className="form-input" onChange={handleChange} />
            </div>
            <div className="form-inputgroup">
              <label htmlFor="genre" className="form-label">
                Genre
              </label>
              <select className="form-input" name="genre" id="genre" onChange={handleChange}>
                <option value="action">Action</option>
                <option value="romance">Romance</option>
                <option value="comedy">Comedy</option>
                <option value="horror">Horror</option>
                <option value="thriller">Thriller</option>
              </select>
            </div>
            <div className="form-inputgroup">
              <label htmlFor="poster" className="form-label">
                Poster
              </label>
              <input type="text" name="poster" id="poster" className="form-input" onChange={handleChange} />
            </div>
            <button className="form-button">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddMovieFrom;
