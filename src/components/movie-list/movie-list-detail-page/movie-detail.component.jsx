import "./movie-detail.scss";

export default function MovieDetailList({ movie }) {
  const {
    id,
    title,
    genres,
    summary,
    large_cover_image,
    year,
    rating,
    small_cover_image,
  } = movie;
  return (
    <>
      <section className="main">
        <div className="wrapper">
          <div className="left-col">
            <div className="post" id={id}>
              <div className="info">
                <div className="user">
                  <div className="profile-pic">
                    <img src={small_cover_image} alt="" />
                  </div>
                  <p className="username">{title}</p>
                </div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/17/17764.png"
                  className="options"
                  alt=""
                />
              </div>
              <img src={large_cover_image} className="post-image" alt="" />
              <div className="post-content">
                <p className="likes">{rating}/10.0</p>
                <p className="description">{summary}</p>
                <div className="post-comment">
                  <p className="post-genres">{genres.join(", ")}</p>
                  <p className="post-time">{year}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
