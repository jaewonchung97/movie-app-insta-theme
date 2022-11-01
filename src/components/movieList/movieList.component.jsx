import './movieList.styles.scss';

export default function MovieList(params) {
  return (
    <>
    <section className="main">
      <div className="wrapper">
        <div className="left-col">
          <div className="post">
            <div className="info">
              <div className="user">
                <div className="profile-pic">
                  <img src="img/cover 1.png" alt="" />
                </div>
                <p className="username">movie title</p>
              </div>
              <img src="https://cdn-icons-png.flaticon.com/512/17/17764.png" className="options" alt="" />
            </div>
            <img src="img/cover 1.png" className="post-image" alt="" />
            <div className="post-content">
              <p className="likes">Rate 5.0</p>
              <p className="description">
                <span>username </span> Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Pariatur tenetur veritatis placeat, molestiae
                impedit aut provident eum quo natus molestias?
              </p>
              <p className="post-time">2018</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>  
  );

}
