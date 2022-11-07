import LoadingIcon from "../../components/loading-icon/loading-icon.component";
import MovieList from "../../components/movieList/movie-list-home-page/movieList.component";
import { useState, useEffect } from "react";

export default function HomePage({ movies, isLoading, method }) {

  return (
    <>
      {movies.map((movie) => {
        return <MovieList key={movie.id} movie={movie} />;
      })}
      {isLoading ? <LoadingIcon /> : <></>}
    </>
  );
}
