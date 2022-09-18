import React from "react";
import "./About.css";
import savanimg from "../../images/savanimg.jpg";
import theimg from "../../images/theimg.jpg";
import greatimg from "../../images/greatimg.jpg";

function About() {
  return (
    <div>
      <div className="about-section aboutus">
        <h1>Know About Us</h1>
        <p>We are great people who do magic everyday</p>
        <p>You will understand how great we are after using our product</p>
      </div>
      <br />
      <h2 className="aboutus" style={{ textAlign: "center" }}>
        Our Team
      </h2>
      <div className="row aboutus">
        <div className="column">
          <div className="card">
            <img
              src={savanimg}
              alt="Jane"
              style={{ width: "100%", height: "550px" }}
            />
            <div className="container">
              <h2>Savan Barbhaya</h2>
              <p className="title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              src={theimg}
              alt="Mike"
              style={{ width: "100%", height: "550px" }}
            />
            <div className="container">
              <h2>The Barbhaya</h2>
              <p className="title">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              src={greatimg}
              alt="John"
              style={{ width: "100%", height: "550px" }}
            />
            <div className="container">
              <h2>Great Barbhaya</h2>
              <p className="title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
