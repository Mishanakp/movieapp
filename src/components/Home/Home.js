import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
    const movieText ="Twilight";
    const showText ="friends";
     useEffect(() => {
         dispatch(fetchAsyncMovies(movieText));
         dispatch(fetchAsyncShows(showText));
     }, [dispatch] );
     
  return (
   <div>
      <div className="banner-image"></div>
      <MovieListing />
   </div>
  );
};

export default Home;
