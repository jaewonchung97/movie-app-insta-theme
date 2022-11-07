import "./movieListAboutPage.style.scss";
import { useNavigate } from "react-router-dom";
import { movieDetailContext } from "../../../context/movie-detail.context";
import { useContext } from "react";

export default function MoiveListAboutPage({ movie }) {
  const { id, large_cover_image, year, title } = movie;
  const navigate = useNavigate();
  const { setSelectedMovieId } = useContext(movieDetailContext);

  const onClickHandler = async () => {
    setSelectedMovieId(id);
    await navigate('/movies');
    var location = document.getElementById(id).offsetTop;
    window.scrollTo({top:location - 30 , behavior:'smooth'});
  }

  return (
    <main>
      <div className="gallery-item" tabIndex="0" onClick={onClickHandler}>
        <img src={large_cover_image} className="gallery-image" alt={title} />

        <div className="gallery-item-info">
          <div className="fas fa-comment">
            <span>{title}</span>
          </div>
          <div className="fas fa-heart">
            <span>{year}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
