import  axios  from "axios";

// const API_KEY = '8aba4e3419a44727b7eb66f35fce4fa2';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTBiMjA0M2E3YmRlZmRmMTI5ZGViYjc4NGJiZTFmNyIsInN1YiI6IjY0ZDA5ZWY5ODUwOTBmMDBjODdkY2FjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AoWYcFyuoQyP_ePohi3LRcw4Fp8RAJIbZs-uo4526oA',
  },
};

export const getTrendingMovies = async() => {
    const {data} =await axios
      .get('trending/movie/day', options)
      return data.results
}

export const searchMovies = async query => {
  const response = await axios.get(
    `search/movie?query=${query}&page=1`,
    options
  );
  return response.data;
};

export const getMovieDetails = async id => {
  const response = await axios.get(
    `movie/${id}&language=en-US`, options
  );
  return response.data;
};

export const getCast = async id => {
  const {data} = await axios.get(
    `movie/${id}/credits`,
    options
  );
  return data.cast;
}

export const getRewiews = async id => {
  const { data } = await axios.get(`movie/${id}/reviews`, options);
  return data.results;
};