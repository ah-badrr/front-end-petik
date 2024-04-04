import React from "react";
import { Card, Container, CardBody, CardTitle, Row, Col, CardText } from "reactstrap";

const Movies = () => {
  const movies = [
    {
      title: "Movie 1",
      year: 2020,
    },
    {
      title: "Movie 2",
      year: 2021,
    },
    {
      title: "Movie 3",
      year: 2023,
    },
    {
      title: "Movie 4",
      year: 2013,
    },
    {
      title: "Movie 5",
      year: 2016,
    },
  ];
  return (
    <Container className="my-5">
      <Row xs={4} className="row-gap-1">
        {movies.map((movie) => {
          return (
            <Col className="p-2">
              <Card
                color="light"
                style={{
                  width: "100%",
                }}
              >
                <img alt="Sample" src="https://picsum.photos/300/200" />
                <CardBody className="text-center">
                  <CardTitle tag="h5">{movie.title}</CardTitle>
                  <CardText>{movie.year}</CardText>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Movies;
