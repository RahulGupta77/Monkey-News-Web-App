import React, { Component } from "react";
import "./greeting.css";
import logo from "../assets/logo.png";
class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Guest",
    };
  }

  handleChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    return (
      <div className="greeting-container">
        <h1>Welcome to My News App!</h1>
        <h2 style={{ margin: "15px" }}>Hello, {this.state.name}!</h2>
        <p style={{ display: "inline", fontSize: "1rem", margin: "20px" }}>
          Enter your name:{" "}
        </p>
        <input
          className="name-input"
          type="text"
          value={this.state.name}
          onChange={this.handleChangeName}
          placeholder="Type here"
        />
        <div className="about-container">
          <img className="creator-image" src={logo} alt="Logo" />
          <p className="quote">
            Bringing you the latest and greatest news from India!
          </p>
          <p>Hello there!</p>
          <p>
            My name is <strong>Rahul Gupta</strong>, and I am the creator of
            News Monkey. As an avid news enthusiast and a tech geek, I wanted to
            build a platform that offers a seamless and user-friendly experience
            for everyone looking to stay informed. News Monkey is a one-stop
            destination for all your news needs. My mission is to bring you the
            most relevant and up-to-date news from various categories and
            sources, carefully curated and presented in a visually engaging
            manner.
          </p>
          <p>
            I believe that being well-informed is crucial in today's fast-paced
            world, and I am committed to providing you with a smooth and
            enjoyable news reading experience. I value your trust and strive to
            maintain the highest standards of journalism and content quality. If
            you have any questions, suggestions, or feedback, please feel free
            to get in touch with me. I would love to hear from you!
          </p>
          <div className="contact-info">
            <p>Contact Me:</p>
            <ul className="socials">
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:rg3498104@gmail.com"
                >
                  <img
                    src="https://img.icons8.com/fluency/48/null/gmail.png"
                    alt="Gmail"
                  />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://wa.me/9561976966"
                >
                  <img
                    src="https://img.icons8.com/color/48/null/whatsapp--v1.png"
                    alt="WhatsApp"
                  />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/RahulGupta77"
                >
                  <img
                    src="https://img.icons8.com/bubbles/48/null/github.png"
                    alt="Github"
                  />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/rahul-gupta-aa60611a7/"
                >
                  <img
                    src="https://img.icons8.com/color/48/null/linkedin-circled--v1.png"
                    alt="LinkedIn"
                  />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/rahulguptaa29"
                >
                  <img
                    src="https://img.icons8.com/color/48/null/twitter--v1.png"
                    alt="Twitter"
                  />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://leetcode.com/RahulGupta77/"
                >
                  <img
                    src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/null/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo.png"
                    alt="Leetcode"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Greeting;
