import React from 'react';
import './MovieActionButtons.css';

const MovieActionButtons = ({ onWatch, onFavorite }) => {
  return (
    <div className="movie-buttons">
      <button className=" watch-btn" onClick={onWatch}>
        Xem ngay
      </button>
      <button className=" favorite-btn" onClick={onFavorite}>
        ♡ Yêu thích
      </button>
    </div>
  );
};

export default MovieActionButtons;
