import "../css/GetInTouch.css";

export const GetInTouch = () => {
  return (
    <div className="getInTouch" id="getInTouch">
      <div className="getInTouchTitle">Get In Touch</div>
      <div className="long-dashline"></div>
      <form action="" method="post">
        <div className="getInTouch-row">
          <div className="yourname-container">
            <span>Your name:</span>
            <input type="text" id="yourname" />
          </div>
          <div className="email-container">
            Email address:
            <input type="email" id="emailAddress" />
          </div>
        </div>

        <div className="yourMessage">
          <div>Your Message</div>
          <textarea
            id="emailAddress"
            name="emailAddress"
            rows="4"
            cols="50"
            style={{ width: "200px" }}
          ></textarea>
        </div>
      </form>
      <div className="backToTop">
        <div className="backToTop-text">Back to top</div>
      </div>
    </div>
  );
};
