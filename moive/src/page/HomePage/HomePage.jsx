import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Container, Card, Row, Col } from 'react-bootstrap';

const HomePage = () => {
  const sampleMovies = [
    { title: 'Phim Hành Động 1', img: 'https://via.placeholder.com/300x180', desc: 'Một bộ phim hấp dẫn...' },
    { title: 'Phim Hài Hước 2', img: 'https://via.placeholder.com/300x180', desc: 'Gây cười không ngớt...' },
    { title: 'Phim Tình Cảm 3', img: 'https://via.placeholder.com/300x180', desc: 'Cảm động đến rơi lệ...' },
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Container className="flex-grow-1 my-4">
        <Row className="g-4">
          {sampleMovies.map((movie, index) => (
            <Col md={4} key={index}>
              <Card>
                <Card.Img variant="top" src={movie.img} />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>{movie.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default HomePage;
