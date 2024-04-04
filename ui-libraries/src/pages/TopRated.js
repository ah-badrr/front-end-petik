import React from "react";
import TableComponent from "../components/Table";
import { Container } from "reactstrap";
import Footer from "../components/Footer";
import NavbarComponent from "../components/Navbar";

const TopRated = () => {
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <Container className="my-5">
        <h2 className="text-primary mb-3">Top Rated Products</h2>
        <TableComponent />
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default TopRated;
