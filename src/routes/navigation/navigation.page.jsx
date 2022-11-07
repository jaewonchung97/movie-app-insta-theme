import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";

export default function Navigation({ searchFieldState, pageState }) {
  const { searchField, setSearchField } = searchFieldState;
  const { page, setPage } = pageState;

  const nextPageHandler = () => {
    setPage((prev) => prev + 1);
  };
  const previousPageHandler = () => {
    setPage((prev) => prev - 1);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-wrapper">
          <Link to={"/"}>
            <div className="title-wrapper">
              <span className="title-text">Movies</span>
            </div>
          </Link>

          <input
            type="text"
            className="search-box"
            placeholder="Search ..."
            onChange={(event) => setSearchField(event.target.value)}
            value={searchField}
          />
          <div className="nav-items">
            <Link to={"/movies"}>
              <img
                src="https://icons.veryicon.com/png/o/miscellaneous/advanceico/home-275.png"
                className="icon"
                alt="Home"
              />
            </Link>
            <Link to={"/"}>
              <img src="https://pixlok.com/wp-content/uploads/2021/12/Instagram-Account-Icon-03bnfc3.png" alt="User"
              className="icon user-profile" />
            </Link>
          </div>
        </div>
      </nav>
      <div className="page-arrow">
        <button
          className="page-leftarrow"
          onClick={previousPageHandler}
          disabled={page <= 1}
        >
          <label value={"previous"}>&#10094;</label>
        </button>
        <button className="page-rightarrow" onClick={nextPageHandler}>
          <label>&#10095;</label>
        </button>
      </div>
      <Outlet />
    </>
  );
}
