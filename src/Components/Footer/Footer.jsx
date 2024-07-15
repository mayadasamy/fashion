import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo_light.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { TbMessage2Heart } from "react-icons/tb";
import { FaMobileRetro } from "react-icons/fa6";
import visa from "../../images/visa.png";
import paypal from "../../images/paypal.png";
import mastercard from "../../images/master_card.png";
import discover from "../../images/discover.png";
import amex from "../../images/amarican_express.png";

const Footer = () => {
  return (
    <>
      <div className="footer-top">
        
        <div className="footer-col">
          <h3>
            <span>
              <img src={logo} alt="" />
            </span>
          </h3>
          <p>
            If you are going to use of Lorem Ipsum need to be sure there isn't
            hidden of text
          </p>

          <p className="footer-icons">
            <Link to="#">
              <FaFacebookF />
            </Link>

            <Link to="#">
              <FaTwitter />
            </Link>

            <Link to="#">
              <FaGooglePlusG />
            </Link>

            <Link to="#">
              <AiOutlineYoutube />
            </Link>

            <Link to="#">
              <FaInstagram />
            </Link>
          </p>
        </div>

        <div className="footer-col">
          <h2>Useful Links</h2>
		  <ul>
		  <li><Link to="#"> About Us</Link></li>
          <li><Link to="#"> FAQ</Link></li>
          <li><Link to="#"> Location</Link></li>
          <li><Link to="#"> Affiliates</Link></li>
          <li><Link to="#"> Contact</Link></li>

		  </ul>
          
        </div>

        <div className="footer-col">
          <h2>Category</h2>
		  <ul>
		  <li><Link to="#"> Men</Link></li>
          <li><Link to="#"> Woman</Link></li>
          <li><Link to="#"> Kids</Link></li>
          <li><Link to="#"> Best Saller</Link></li>
          <li><Link to="#"> New Arrivals</Link></li>

		  </ul>
        
        </div>

        <div className="footer-col">
          <h2>My Account</h2>
		  <ul>
		  <li><Link to="#"> My Account</Link></li>
          <li><Link to="#"> Discount</Link></li>
          <li><Link to="#"> Returns</Link></li>
          <li><Link to="#"> Orders History</Link></li>
          <li><Link to="#"> Order Tracking</Link></li>

		  </ul>
         
        </div>

        <div className="footer-col">
          <h2>Contact Info</h2>
            <ul>
                <li><CiLocationOn /> 123 Street, Old Trafford, New South London , UK</li>
                <li><TbMessage2Heart /> <Link to="">info@sitename.com</Link></li>
                <li><FaMobileRetro /> + 457 789 789 65</li>

            </ul>
         
        </div>
      </div>
      <div className="footer-down">
        <div className="col-left">
          <p>© 2020 All Rights Reserved by Bestwebcreator</p>
        </div>
        <div className="col-right">
          
            <Link><img src={visa} alt="" /></Link>
            <Link><img src={mastercard} alt="" /></Link>
            <Link><img src={paypal} alt="" /></Link>
            <Link><img src={discover} alt="" /></Link>
           <Link><img src={amex} alt="" /></Link>



        
        </div>
      </div>
    </>
  );
};

export default Footer;
