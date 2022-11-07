import MoiveListAboutPage from "../../components/movieList/movie-list-about-page/movieListAboutPage.component";
import "./about.page.style.scss";

export default function About({ movies, isLoading }) {
  
  return (
    <>
      <header>
        <div className="container">
          <div className="profile">
            <div className="profile-image">
              <img
                src="https://marketplace.canva.cn/sfRBM/MAEuwrsfRBM/2/tl/canva-MAEuwrsfRBM.png"
                alt=""
              />
            </div>

            <div className="profile-user-settings">
              <h1 className="profile-user-name">Jaewon Chung</h1>

              <button
                className="btn profile-settings-btn"
                aria-label="profile settings"
              >
                <i className="fas fa-cog" aria-hidden="true"></i>
              </button>
            </div>

            <div className="profile-stats">
              <ul>
                <li>
                  <span className="profile-stat-count">{movies.length}</span>{" "}
                  moives
                </li>
              </ul>
            </div>

            <div className="profile-bio">
              <p>
                <span className="profile-real-name">Jaewon Chung</span> Lorem
                ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="gallery">
          {movies.map((movie) => (
            <MoiveListAboutPage key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
      {isLoading ? <div className="loader" /> : <></>}
    </>
  );
}
