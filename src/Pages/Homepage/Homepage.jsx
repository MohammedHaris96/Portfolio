import React from "react";
import { Container } from "react-bootstrap";
import me from "../../assets/Me.png";
import arrow from "../../assets/arrow.svg";
import whatsapp from "../../assets/WhatsApp.svg";
import gmail from "../../assets/Gmail.svg";
import skills from "../../assets/Skills.png";
import preview from "../../assets/preview.png";
import "./style.css";

const Homepage = () => {
  return (
    <div className="main">
      <div className="container introduction">
        <div className="user-name">
          <img src={arrow} alt="arrow" className="arrow-img" />
          <p>
            Hello! I Am <span className="bookmark">Mohammed Haris</span>
          </p>
        </div>
        <div className="container presentation col-sm">
          <img src={me} alt="me" />
          <div>
            <p className="font-18">A Developer who</p>
            <p className="font-50">
              Judges a book <br /> by its{" "}
              <span className="bookmark">cover</span>...
            </p>
            <p className="font-12">
              Because if the cover does not impress you what else can?
            </p>
          </div>
        </div>
        <div className=" container designation">
          <p className="font-50">I'm a Software Engineer.</p>

          <p className="font-21">Currently, I'm working at AppIncubator,</p>
        </div>
        <div className="container experience">
          <p className="font-21">
            A self-taught Software Engineer, functioning in the industry for
            1.5+ years now.
            <br />I make meaningful and delightful digital products that create
            an equilibrium
            <br /> between user needs and business goals.
          </p>
        </div>
        <div className="container team">
          <p className="font-24">
            I'm currently looking to join a
            <span className="bookmark"> cross-functional</span> team <br />
            <span className="font-18">
              that values improving people's lives through accessible design
            </span>
          </p>
          <img src={skills} alt="arrow" className="skills-img" />
        </div>
        <div className="container projects">
          <div className="col-12 col-md-6">
            <p className="bookmark">Featured Project</p>
            <p>Example Project</p>
            <div className="card-description">
              <p>
                A web app to give an overview of the functioning and services
                offered by one of the renowned child development centre in
                India. All you need to know about specialist rehabilitation
                service for children with special needs. Also to provide a
                platform for an effective and efficient communication between
                the needy and the centre.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <img src={preview} alt="arrow" className="project-preview" />
          </div>
        </div>
        <p>Contact</p>

        <div className="contact">
          <div className="py-3 col-12 col-md-6">
            <p>&copy; 2023 Mohammed Haris</p>
          </div>
          <div className="py-3 col-12 col-md-6 social-links">
            <img src={whatsapp} alt="whatsapp" className="links" />
            <img src={gmail} alt="gmail" className="links" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
