import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './NewListMovie.css';
import MovieSlideCard from '../../components/MovieSlideCard';

const NewListMovie = ({ movies }) => {
  return (
    <div className="movie-carousel-container">
      <div className="section-header">
        <hr className="divider" />
        <h4 className="section-title">🎬 Phim mới cập nhật</h4>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={6}
        spaceBetween={12}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie._id || movie.id}>
            <MovieSlideCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewListMovie;
