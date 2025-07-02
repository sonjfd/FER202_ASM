import React from 'react';
import { Card } from 'react-bootstrap';
import MovieActionButtons from './MovieActionButtons';
import './MovieSlideCard.css';

const MovieSlideCard = ({ movie }) => {
  return (
    <Card className="movie-card text-white bg-dark border-0">
      <div className="movie-poster-wrapper">
        <Card.Img
          src={movie.poster_url}
          alt={movie.name}
          className="movie-poster"
        />
        <MovieActionButtons
          onWatch={() => console.log('Xem:', movie.name)}
          onFavorite={() => console.log('Thích:', movie.name)}
        />
      </div>
      <Card.Body className="text-center px-2">
        <Card.Title className="movie-title">{movie.name}</Card.Title>
        <Card.Text className="movie-subtitle">{movie.origin_name}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieSlideCard;
