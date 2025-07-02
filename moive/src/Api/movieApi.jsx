import axios from 'axios';

const API_BASE = 'https://phimapi.com';


export const fetchLatestMovies = async (page = 1) => {
  try {
    const res = await axios.get(`${API_BASE}/danh-sach/phim-moi-cap-nhat?page=${page}`);
    return res.data.items;
  } catch (error) {
    console.error(' Lỗi khi fetch phim mới cập nhật:', error);
    return [];
  }
};


export const fetchMoviesByUrls = async (urls) => {
  try {
    const results = await Promise.all(urls.map((url) => axios.get(url)));
    return results.map((res) => res.data.movie);
  } catch (error) {
    console.error(' Lỗi khi fetch danh sách banner theo URL:', error);
    return [];
  }
};
