import React from "react";
import TableComponent from "../components/Table";
import { Container } from "reactstrap";
import Footer from "../components/Footer";
import NavbarComponent from "../components/Navbar";
import CourseCards from "../components/CourseCards";

const Courses = () => {
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <Container className="my-5">
        <h2 className="text-primary mb-3">Courses</h2>
        <CourseCards></CourseCards>
        {/* <TableComponent /> */}
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Courses;
