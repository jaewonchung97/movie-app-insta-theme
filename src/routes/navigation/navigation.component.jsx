import { Outlet, Link } from "react-router-dom";
import "./navigation.style.scss";

export default function Navigation({ searchFieldState, pageState }) {
  const { searchField, setSearchField } = searchFieldState;
  const reloadHandler = () => location.reload();

  return (
    <>
      <nav className="navbar">
        <div className="nav-wrapper">
          <div className="title-wrapper">
            <span className="title-text" onClick={reloadHandler}>
              Movies
            </span>
          </div>

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
              <img
                src="https://pixlok.com/wp-content/uploads/2021/12/Instagram-Account-Icon-03bnfc3.png"
                alt="User"
                className="icon user-profile"
              />
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
