import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Navlinks from "./Navlinks/navlinks.js";

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const navItemRef = useRef();
  const searchRef = useRef();
  const overLayRef = useRef();
  const headerContainerRef = useRef();
  const searchBarRef = useRef();
  const navRef = useRef();

  const toggleActive = () => {
    headerContainerRef.current.classList.toggle("active");
  };
  const searchHandler = () => {
    navItemRef.current.classList.add("hide");
    searchRef.current.classList.remove("hide");
    overLayRef.current.classList.add("show");
  };
  const closeHandler = () => {
    navItemRef.current.classList.remove("hide");
    searchRef.current.classList.add("hide");
    overLayRef.current.classList.remove("show");
  };
  const searchInputHandler = () => {
    navItemRef.current.classList.add("move-down");
    searchBarRef.current.classList.add("active");
    navRef.current.classList.add("move-up");
  };
  const cancelBtnHandler = () => {
    navItemRef.current.classList.remove("move-down");
    searchBarRef.current.classList.remove("active");
    navRef.current.classList.remove("move-up");
  };
  const overLayHandler = () => {
    navItemRef.current.classList.remove("hide");
    searchRef.current.classList.add("hide");
    overLayRef.current.classList.remove("show");
  };
  // add or remove class name when screen size is changed.
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  return (
    <div>
      <div
        ref={headerContainerRef}
        className={`header-container ${width > 768 && ""} `}
      >
        {/* navigation item start here */}
        <nav ref={navRef}>
          <ul className="mobile-item-wrapper ">
            <li>
              <div onClick={toggleActive} className="menu-icon-container">
                <div className="menu-icon">
                  <span className="line-1"></span>
                  <span className="line-2"></span>
                </div>
              </div>
            </li>
            <Navlinks urlLink="/" className="logo-link" />
            <Navlinks urlLink="##" className="cart-link" />
          </ul>
          <ul
            ref={navItemRef}
            className={`nav-item-wrapper ${width > 768 && ""} `}
          >
            <Navlinks urlLink="/" className="logo-link" />
            <Navlinks urlLink="/mobile-charger" linkName="Mobile Chargers" />
            <Navlinks urlLink="/powerbanks" linkName="Power Banks" />
            <Navlinks
              urlLink="/car-mobile-charger"
              linkName="Car Mobile Charger"
            />
            {/* <Navlinks urlLink="/iPhone" linkName="iPhone" />
            <Navlinks urlLink="/watch" linkName="Watch" /> */}
            {/* <Navlinks urlLink="/airpods" linkName="AirPods" />
            <Navlinks urlLink="/tv" linkName="TV & Home" /> */}
            {/* <Navlinks urlLink="onlyOnApple" linkName="Only on Apple" /> */}
            <Navlinks urlLink="/about-us" linkName="About Us" />
            <Navlinks urlLink="/contact-us" linkName="Contact Us" />
            {/* <li>
              <Link
                onClick={searchHandler}
                className="search-link"
                to="##"
              ></Link>
            </li>
            <Navlinks urlLink="/cart" className="cart-link" /> */}
          </ul>
        </nav>
        {/* navigation item end here  */}
        <div
          ref={searchRef}
          className={`search-container hide ${width < 768 && "hide"}`}
        >
          <div className="search-link"></div>
          <div className="search-bar  ">
            <form action="">
              <input type="text" placeholder="search apple.com" />
            </form>
          </div>
          <div onClick={closeHandler} className="close-link"></div>
          <div className="quick-links">
            <h2>Quick links</h2>
            <ul>
              <li>
                <a href="##">Visiting an Apple Store FAQ</a>
              </li>
              <li>
                <a href="##">AirPods</a>
              </li>
              <li>
                <a href="##">AirTag</a>
              </li>
              <li>
                <a href="##">AppleCare+</a>
              </li>
              <li>
                <a href="##">Gift Cards</a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" mobile-search-container">
          <div className="search-link"></div>
          <div ref={searchBarRef} className="search-bar ">
            <form action="">
              <input
                onClick={searchInputHandler}
                type="text"
                placeholder="search apple.com"
              />
            </form>
          </div>
          <span onClick={cancelBtnHandler} className="cancel-btn">
            cancel
          </span>
          <div className="quick-links">
            <h2>Quick links</h2>
            <ul>
              <li>
                <a href="##">Visiting an Apple Store FAQ</a>
              </li>
              <li>
                <a href="##">AirPods</a>
              </li>
              <li>
                <a href="##">AirTag</a>
              </li>
              <li>
                <a href="##">AppleCare+</a>
              </li>
              <li>
                <a href="##">Gift Cards</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        ref={overLayRef}
        onClick={overLayHandler}
        className={`overlay ${width < 768 && ""}`}
      ></div>
    </div>
  );
};

export default Header;
