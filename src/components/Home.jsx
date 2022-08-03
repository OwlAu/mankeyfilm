import "../css/Home.css";

export const Home = () => {
  return (
    <div className="home" id="home">
      <div className="homeDescription_text">
        <div className="follow">
          Follow
          <div className="dashline-1"></div>
        </div>
        <div className="dashline-2"></div>
        <div className="jobTitle">Videographer and Director</div>
        <div className="name">Mankey Sun Liew</div>
        <btn className="portfolioBtn">
          <a href="#portfolio">My Portfolio</a>
        </btn>
      </div>
      <img src="img/test.jpg" alt="" style={{ width: "100%" }} />
    </div>
  );
};
