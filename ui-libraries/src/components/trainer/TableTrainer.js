import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import axios from "axios";

const TableTrainer = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    getTrainers();
  }, []);

  const getTrainers = async () => {
    const response = await axios.get("https://api.sukmax.my.id/trainer");
    setTrainers(response.data);
  };
  return (
    <Layout>
      <h2 className="title">Trainer</h2>
      <h3 className="subtitle is-float-left">List of Trainer</h3>
      <Link to={"/trainer/add"} className="button is-primary mb-2 is-float-right">
        Add New
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Address</th>
            <th>Skill</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {trainers.map((trainer) => {
            return (
              <tr>
                <td>{trainer.id}</td>
                <td>{trainer.name}</td>
                <td>{trainer.address}</td>
                <td>{trainer.skill}</td>
                <td>
                  <figure className="image is-128x128">
                    <img src={trainer.url} alt="preview-img" />
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

export default TableTrainer;
