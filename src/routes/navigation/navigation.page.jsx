import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";

export default function Navigation(params) {
  return (
    <>
      <nav className="navbar">
        <div className="nav-wrapper">
          <div className="title-wrapper">
            <span className="title-text">Movies</span>
          </div>
          <input type="text" className="search-box" placeholder="search" />
          <div className="nav-items">
            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/advanceico/home-275.png"
              className="icon"
              alt=""
            />
            <div className="icon user-profile"></div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
