
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
const Header = lazy(()=> import('./Header/Header'))
const Home = lazy(()=> import('pages/Home'))
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('pages/Cast'));
const Reviews = lazy(() => import('pages/Reviews'));


// import Header from './Header/Header'
// import Home from '../pages/Home'
// import Movies from '../pages/Movies'
// import MovieDetails from '../pages/MovieDetails'
// import Cast from '../pages/Cast'
// import Reviews from '../pages/Reviews'

export const App = () => {
  return (
  
    <Routes>
      <Route path='/' element={<Header/>}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
