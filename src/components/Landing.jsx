export const Landing = () => {
  return (
    <section className="landing">
      <div className="headerContainer">
        <img className="logo" src="img/logo.png" alt="" />
        <div className="navigation">
          <ul>
            <a>HOME</a>
            <a>SERVICES & PRICING</a>
            <a>PORTFOLIO</a>
            <a>ABOUT US</a>
            <a>CONTACT US</a>
          </ul>
        </div>
      </div>
      <div className="landingContainer">
        <div className="landingHeader">- MANKEYFILM PRODUCTION -</div>
        <div className="landingSubHeader">YOUR STORYTELLER</div>
      </div>
      <div className="landingFooterContainer">
        <div className="landingFooter">
          <div className="arrow">
            {" "}
            <img src="img/down-arrow.png" alt="" className="arrow-icon" />
          </div>
          <div className="socialMedia">
            <img src="img/facebook.png" alt="" className="socialMedia-icon" />
            <img src="img/instagram.png" alt="" className="socialMedia-icon" />
            <img src="img/whatsapp.png" alt="" className="socialMedia-icon" />
          </div>
        </div>
      </div>
    </section>
  );
};
