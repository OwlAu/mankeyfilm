import "../css/Contact.css";

export const Contact = () => {
  return (
    <div class="contact">
      <div class="row">
        <div class="col-sm contactLeft">
          <div className="contactImageText">
            <div className="shortDashline-contact"></div>
            <div className="aboutMe">About Me</div>
            <div className="aboutMeDescription">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
              aspernatur, excepturi eum fuga obcaecati nesciunt quas culpa modi
              saepe ex neque facilis, optio suscipit reprehenderit voluptas
              ipsam quasi quam repellat?
            </div>
          </div>
          <img
            src="https://www.thesprucepets.com/thmb/hThcFCxT20ql0opGe4B8WGICbc4=/1851x1851/smart/filters:no_upscale()/cat-talk-eyes-553942-hero-df606397b6ff47b19f3ab98589c3e2ce.jpg"
            alt=""
            style={{ width: "100%" }}
          />
        </div>
        <div class="col-sm contactRight">
          <div className="shortDashline-contact"></div>
          <div className="contactInfoContainer">
            <div className="contactInfo-title">
              <div className="contactInfo">Contact Info</div>
              <div className="01">01</div>
            </div>
            <div className="email">Mail: 123@gmail.com</div>
            <div className="phone">Phone: 12344567</div>
            <div className="sayHellow">Say Hello</div>
          </div>
          <div className="studioLocationContainer">
            <div className="studioLocation">Studio Location</div>
            <div className="02">02</div>
          </div>
          <iframe
            style={{ width: "300px", height: "200px" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15935.292229874052!2d101.71821715!3d3.1413735499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc3629019c8661%3A0x584753437f2a7287!2sPlaza%20Low%20Yat!5e0!3m2!1sen!2smy!4v1659489179664!5m2!1sen!2smy"
          ></iframe>{" "}
        </div>
      </div>
    </div>
  );
};
