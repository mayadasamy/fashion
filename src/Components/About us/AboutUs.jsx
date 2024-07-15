import React from "react";
import "./aboutUs.css";
import AboutImage from "../../images/about_img.jpg";

const AboutUs = () => {
  return (
    <>
      <div className="about-us">
        <div className="container_about">
          <div className="img-text-about">
            <div data-aos="fade-right" className="img-about">
              <img src={AboutImage} alt=""></img>
            </div>
            <div data-aos="fade-left" className="text-about">
              <h2>Who We Are </h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                explicabo fugit corrupti ipsa earum officiis nesciunt corporis
                saepe dolorum esse.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, sed. Nam ipsam molestias porro alias
                consequuntur rerum distinctio eos, iste, veritatis dolor rem
                recusandae similique debitis numquam, ea illum fuga?.
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
