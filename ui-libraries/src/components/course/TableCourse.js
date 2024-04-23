import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import axios from "axios";

const TableCourse = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    const response = await axios.get("https://api.sukmax.my.id/course");
    setCourses(response.data);
  };
  return (
    <Layout>
      <h2 className="title">Course</h2>
      <h3 className="subtitle is-float-left">List of Course</h3>
      <Link to={"/course/add"} className="button is-primary mb-2 is-float-right">
        Add New
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Desc</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => {
            return (
              <tr>
                <td>{course.id}</td>
                <td>{course.name}</td>
                <td>{course.desc}</td>
                <td>
                  <figure className="image is-128x128">
                    <img src={course.url} alt="preview-img" />
                  </figure>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Layout>
  );
};

export default TableCourse;
