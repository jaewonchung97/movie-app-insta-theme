import LoadingIcon from "../../components/loading-icon/loading-icon.component";
import MovieList from "../../components/movie-list/movie-list-detail-page/movie-detail.component";

export default function MovieDetailPage({ movies, isLoading }) {

  return (
    <>
      {movies.map((movie) => {
        return <MovieList key={movie.id} movie={movie} />;
      })}
      {isLoading ? <LoadingIcon /> : <></>}
    </>
  );
}
