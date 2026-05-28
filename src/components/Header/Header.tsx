import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logo/logo.svg";

import MegaMenu1 from "./MegaMenu1";
import MegaMenuServices from "./MegaMenu2";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header: React.FC = () => {

  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mobileActive, setMobileActive] = useState(false);

  const lastScrollY = useRef<number>(0);

  useEffect(() => {

    const handleScroll = () => {

      const currentScroll = window.scrollY;

      if (currentScroll < lastScrollY.current && currentScroll > 100) {
        setIsSticky(true);

        setTimeout(() => {
          setIsVisible(true);
        }, 10);

      } else if (currentScroll > lastScrollY.current) {

        setIsVisible(false);

        setTimeout(() => {
          setIsSticky(false);
        }, 100);
      }

      if (currentScroll <= 100) {
        setIsSticky(false);
        setIsVisible(false);
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <header
      id="xb-header-area"
      className="header-area header-style--one header-transparent is-sticky"
    >

      <div
        className={`xb-header xb-sticky-stt 
        ${isSticky ? "xb-header-area-sticky" : ""}
        ${isVisible ? "xb-header-fixed" : "xb-header-hidden"}`}
      >

        <div className="container mxw-1650">

          <div className="header__wrap ul_li_between">

            {/* Logo */}
            <div className="xb-header-logo">
              <Link to="/" className="logo1" onClick={handleClick}>
                <img src={logo} alt="PixelWave Total Solution" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="main-menu__wrap navbar navbar-expand-lg p-0">

              <nav className="main-menu collapse navbar-collapse">

                <ul>

                  {/* Home */}
                  <li className="active">
                    <Link to="/" onClick={handleClick}>
                      <span>Home</span>
                    </Link>
                  </li>

                  {/* About */}
                  <li>
                    <Link to="/about" onClick={handleClick}>
                      <span>About</span>
                    </Link>
                  </li>

                  {/* Services */}
                  <li className="menu-item-has-children megamenu">

                    <Link to="#" onClick={handleClick}>
                      <span>Solutions</span>
                    </Link>

                    <MegaMenuServices />

                  </li>

                  {/* Infrastructure */}
                  <li className="menu-item-has-children megamenu">

                    <Link to="#" onClick={handleClick}>
                      <span>Infrastructure</span>
                    </Link>

                    <MegaMenu1 />

                  </li>

                  {/* Portfolio */}
                  <li>
                    <Link to="/project" onClick={handleClick}>
                      <span>Portfolio</span>
                    </Link>
                  </li>

                  {/* Pricing */}
                  <li>
                    <Link to="/pricing" onClick={handleClick}>
                      <span>Pricing</span>
                    </Link>
                  </li>

                  {/* Blog */}
                  <li className="menu-item-has-children">

                    <Link to="/blog" onClick={handleClick}>
                      <span>Insights</span>
                    </Link>

                    <ul className="submenu">

                      <li>
                        <Link to="/blog" onClick={handleClick}>
                          <span>Business Growth</span>
                        </Link>
                      </li>

                      <li>
                        <Link to="/blog-details" onClick={handleClick}>
                          <span>AI & Startup Guides</span>
                        </Link>
                      </li>

                    </ul>

                  </li>

                  {/* Contact */}
                  <li>
                    <Link to="/contact" onClick={handleClick}>
                      <span>Contact</span>
                    </Link>
                  </li>

                </ul>

              </nav>
            </div>

            {/* CTA Button */}
            <div className="header-btn">

              <Link
                to="/contact"
                className="thm-btn"
                onClick={handleClick}
              >
                Start Your Growth
              </Link>

            </div>

            {/* Mobile Toggle */}
            <div className="header-bar-mobile side-menu d-lg-none">

              <button
                className="xb-nav-mobile"
                onClick={() => setMobileActive(!mobileActive)}
              >
                <i className="far fa-bars"></i>
              </button>

            </div>

          </div>

          {/* Mobile Menu */}
          <div className="xb-header-wrap">

            <div className={`xb-header-menu ${mobileActive ? "active" : ""}`}>

              <div className="xb-header-menu-scroll">

                <div
                  className="xb-menu-close xb-hide-xl xb-close"
                  onClick={() => setMobileActive(false)}
                ></div>

                {/* Mobile Logo */}
                <div className="xb-logo-mobile xb-hide-xl">

                  <Link to="/" rel="home">
                    <img src={logo} alt="PixelWave Total Solution" />
                  </Link>

                </div>

                {/* Mobile Search */}
                <div className="xb-header-mobile-search xb-hide-xl">

                  <form role="search" onSubmit={handleSubmit}>

                    <input
                      type="text"
                      placeholder="Search services..."
                      name="s"
                      className="search-field"
                    />

                    <button className="search-submit" type="submit">
                      <i className="far fa-search"></i>
                    </button>

                  </form>

                </div>

                {/* Mobile Nav */}
                <nav className="xb-header-nav">
                  <MobileMenu />
                </nav>

              </div>

            </div>

            <div className="xb-header-menu-backdrop"></div>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Header;
