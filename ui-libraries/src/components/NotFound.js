import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <div className="m-auto text-center">
        <h1 className="title mb-4">404 NOT FOUND</h1>
        <Link to={"/"}>
          <button className="button is-primary">Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
