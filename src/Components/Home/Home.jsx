import React from "react";
import "./home.css";
import WomenImg from "../../images/banner1.jpg";
import MenImg from "../../images/banner2.jpg";
import KidsImg from "../../images/banner3.jpg";

const Home = () => {
  
  return (
    <>
      <section className="home-bg">
        <div className="home-carousel">
          <div className="container-home">
            <div className="image-home">
              <img src={WomenImg} alt=""/>
              <div data-aos="fade-right" className="text-home">
              <h5>Get up to 50% off today only!</h5>
              <h2>WOMEN FASHION</h2>
              <button className="button-48">
                <span className="text">SHOP NOW</span>
              </button>
            </div>
            </div>
            
          </div>

          <div className="container-home">
            <div className="image-home">
              <img src={MenImg} alt=""></img>
              <div data-aos="fade-right" className="text-home">
              <h5>50% off all product!</h5>
              <h2>Man Fashion</h2>
              <button className="button-48">
                <span className="text">SHOP NOW</span>
              </button>
            </div>
            </div>
            
          </div>

          <div className="container-home">
            <div className="image-home">
              <img src={KidsImg} alt=""></img>
              <div data-aos="fade-right" className="text-home">
              <h5>taking your viewing experience to Next Level</h5>
              <h2>summer sale</h2>
              <button className="button-48">
                <span className="text">SHOP NOW</span>
              </button>
            </div>
            </div>
           
          </div>
        </div>
        <div className="btn-slider">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
    </>
  );
};

export default Home;
