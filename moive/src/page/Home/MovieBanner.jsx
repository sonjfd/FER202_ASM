import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MovieBanner.css';

const MovieBanner = ({ banners }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="movie-banner-slider">
      <Slider {...settings}>
        {banners.map((movie, idx) => (
          <div key={idx} className="banner-slide">
            <img className="banner-img" src={movie.thumb_url} alt={movie.name} />
            <div className="banner-overlay">
              <h1>{movie.name}</h1>
              <h3>{movie.origin_name}</h3>
              <div className="info-line">
                <span>{movie.episode_current} - {movie.quality}</span>
                <span>{movie.time}</span>
                <span>{movie.year}</span>
              </div>
              <p className="desc">{movie.content?.slice(0, 200)}...</p>
              <div className="banner-buttons">
                <button className="play-btn">Xem ngay</button>
                <button className="fav-btn">♡ Yêu thích</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieBanner;
