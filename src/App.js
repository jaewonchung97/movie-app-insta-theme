import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./routes/about/about.page";
import HomePage from "./routes/home/home.page";
import Navigation from "./routes/navigation/navigation.page";

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [searchField, setSearchField] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  async function getMovies() {
    const fetchUrl =
      "https://yts.mx/api/v2/list_movies.json?page=" + page.toString();
    try {
      await fetch(fetchUrl)
        .then((resolve) => resolve.json())
        .then((json) => json.data)
        .then((data) => setMovies(data.movies));
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      await getMovies();
      setIsLoading(false);
    };
    fetchMovies();
  }, [page]);

  useEffect(() => {
    const newFilteredMovies = movies.filter((movie) =>
      movie.title.toLocaleLowerCase().includes(searchField)
    );
    setFilteredMovies(newFilteredMovies);
  }, [movies, searchField]);

  return (
    <>
      <Routes>
        <Route
          path={"/"}
          element={
            <Navigation
              searchFieldState={{ searchField, setSearchField }}
              pageState={{ page, setPage }}
            />
          }
        >
          <Route
            path={"/movies"}
            element={<HomePage movies={filteredMovies} isLoading={isLoading} />}
          />
          <Route
            index={true}
            element={<About movies={filteredMovies} isLoading={isLoading} />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
