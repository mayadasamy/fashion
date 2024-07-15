import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { IoIosPhonePortrait } from "react-icons/io";
import { TfiControlShuffle } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import LogoImg from "../../images/logo_dark.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [x, setX] = useState(false);
  const [menu, setMenu] = useState(false);
  const [list, setList] = useState(false);
  const cartProducts = useSelector((state) => state.Product.items);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setX(window.scrollY);
    });
    window.addEventListener("resize", () => {
      let windowSize = window.innerWidth;
      windowSize <= 958 ? setMenu(true) : setMenu(false);
    });
  }, []);

  const changeMenu = () => {
    setList(!list);
  };

  return (
    <>
      {/* <span className="loader"></span> */}

      <header>
        {/* top header */}
        <div
          className="top-header"
          style={x < 500 ? { display: "flex" } : { display: "none" }}
        >
          <div className="top-left-side">
            <ul>
              <li>
                <ul className="drop-menu">
                  <li>English</li>
                  {/* <li>french</li>
                  <li>british</li> */}
                </ul>
              </li>
              <li>USD</li>
              <li>
                <IoIosPhonePortrait />
                123-456-789
              </li>
            </ul>
          </div>

          <div className="top-right-side">
            <ul>
              <li>
                <Link>
                  <TfiControlShuffle /> compare{" "}
                </Link>
              </li>
              <li>
                <Link>
                  <CiHeart /> wishlist
                </Link>
              </li>
              <li>
                <Link>
                  <CiUser /> login
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom header */}
        <div
          className="bottom-header"
          style={
            x < 100
              ? { top: "50px", transition: "0.5s" }
              : { top: "0", transition: "1s" }
          }
        >
          <div className="bottom-left-side">
            <Link to="/">
              <img src={LogoImg} alt="" />
            </Link>
          </div>

          <div className="bottom-right-side">
            <ul
              className={list ? "list" : undefined}
              style={menu ? { display: "none" } : { display: "flex" }}
            >
              <li>
                <NavLink to="/">HOME</NavLink>
              </li>
              <li>
                <NavLink to="/about">ABOUT</NavLink>
              </li>
              <li>
                <NavLink to="/product">PRODUCTS</NavLink>
              </li>
              <li>
                <NavLink to="/blog">BLOG</NavLink>
              </li>
              <li>
                <NavLink to="/shop">SHOP</NavLink>
              </li>
              <li>
                <NavLink to="/contact">CONTACT US</NavLink>
              </li>
            </ul>
            <div className="icons">
              <NavLink to="/product">
                <CiSearch size={20} />
              </NavLink>

              <NavLink to="/cart">
                <BsCart3 size={20} />{cartProducts.length}
              </NavLink>
            </div>

            {menu ? (
              list ? (
                <IoMdClose className="close" onClick={changeMenu} size={30} />
              ) : (
                <BsList className="humburger" onClick={changeMenu} size={35} />
              )
            ) : undefined}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
