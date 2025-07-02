import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MovieBanner from './MovieBanner';
import NewListMovie from './NewListMovie';
import LoadingPage from './LoadingPage';
import { fetchLatestMovies, fetchMoviesByUrls } from '../../Api/movieApi';

const bannerUrls = [
  'https://phimapi.com/phim/tro-choi-con-muc-phan-3',
  'https://phimapi.com/phim/tham-tu-lung-danh-conan-25-nang-dau-halloween',
  'https://phimapi.com/phim/dao-hai-tac',
  'https://phimapi.com/phim/avengers-4-hoi-ket',
  'https://phimapi.com/phim/dai-chien-nguoi-khong-lo-lan-tan-cong-cuoi-cung',
];

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [banners, setBanners] = useState([]);
  const [moviesNew, setMoviesNew] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const [bannerData, movieData] = await Promise.all([
        fetchMoviesByUrls(bannerUrls),
        fetchLatestMovies(),
      ]);
      setBanners(bannerData);
      setMoviesNew(movieData);
      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) return <LoadingPage />;

  return (
    <div
      style={{
        backgroundColor: '#161821',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      <MovieBanner banners={banners} />
      <NewListMovie movies={moviesNew} />
      <Footer />
    </div>
  );
};

export default HomePage;
