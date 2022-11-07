import LoadingIcon from "../../components/loading-icon/loading-icon.component";
import MovieList from "../../components/movieList/movie-list-home-page/movieList.component";

export default function HomePage({ movies, isLoading }) {
  return (
    <>
      {isLoading ? (
        <LoadingIcon/>
      ) : (
        movies.map((movie) => {
          return <MovieList key={movie.id} movie={movie} />;
        })
      )}
    </>
  );
}
