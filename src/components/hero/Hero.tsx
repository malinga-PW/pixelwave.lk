import React from "react";
import { Link } from "react-router-dom";

// Background & Icons
import heroBg from "../../images/bg/hero_bg.png";
import heroIcon from "../../images/icon/animated-gif02.gif";

import featureIcon1 from "../../images/icon/feature-icon01.svg";
import featureIcon2 from "../../images/icon/feature-icon02.svg";
import featureIcon3 from "../../images/icon/feature-icon03.svg";

const HeroSection: React.FC = () => {

  return (
    <section
      className="hero hero-style pos-rel bg_img"
      style={{ backgroundImage: `url(${heroBg})` }}
    >

      <div className="container">

        <div className="row">

          {/* LEFT CONTENT */}
          <div className="col-lg-9 col-md-9">

            <div className="hero-content">

              <h2 className="title scale-animation wow">
                AI + Human Powered
                <br />
                Business Growth Solutions
              </h2>

              <p className="sub-title scale-animation wow">

                PixelWave Total Solution helps startups and growing businesses
                build powerful digital identities, automate workflows,
                improve customer experience, and scale faster using AI-driven
                systems, branding, websites, and smart business strategies.

              </p>

              <div className="hero-btn scale-animation wow">

                {/* MAIN CTA */}
                <Link
                  className="thm-btn agency-btn"
                  to="/contact"
                >

                  <span className="text">
                    START YOUR GROWTH
                  </span>

                  <span className="arrow">

                    <span className="arrow-icon">

                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="5.06592"
                          y="19.9785"
                          width="20.5712"
                          height="2.61221"
                          transform="rotate(-40.2798 5.06592 19.9785)"
                          fill="white"
                        />

                        <rect
                          x="7.97095"
                          y="7.24463"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 7.97095 7.24463)"
                          fill="white"
                        />

                        <rect
                          x="11.6523"
                          y="7.54834"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 11.6523 7.54834)"
                          fill="white"
                        />

                        <rect
                          x="15.334"
                          y="7.85205"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 15.334 7.85205)"
                          fill="white"
                        />

                        <rect
                          x="18.7119"
                          y="11.8374"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.7119 11.8374)"
                          fill="white"
                        />

                        <rect
                          x="18.4084"
                          y="15.52"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.4084 15.52)"
                          fill="white"
                        />

                        <rect
                          x="18.104"
                          y="19.2012"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.104 19.2012)"
                          fill="white"
                        />

                      </svg>

                    </span>

                  </span>

                </Link>

              </div>

            </div>

          </div>

          {/* RIGHT ICON */}
          <div className="col-lg-3 col-md-3">

            <div
              className="hero-icon wow zoomIn"
              data-wow-delay="700ms"
              data-wow-duration="800ms"
            >

              <img
                src={heroIcon}
                alt="PixelWave AI"
              />

            </div>

          </div>

        </div>

        {/* FEATURE BOXES */}
        <div className="row mt-55">

          {/* Feature 1 */}
          <div className="col-lg-4 col-md-6 mt-30">

            <div
              className="xb-feature-item wow fadeInUp"
              data-wow-delay="700ms"
              data-wow-duration="600ms"
            >

              <div className="xb-item--inner xb-border">

                <span className="xb-item--icon">
                  <img src={featureIcon1} alt="icon" />
                </span>

                <div className="xb-item--holder">

                  <h2 className="xb-item--title">
                    Business Growth Focused
                  </h2>

                  <p className="xb-item--content">

                    We build websites, branding systems, and digital strategies
                    focused on helping businesses grow faster and smarter.

                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Feature 2 */}
          <div className="col-lg-4 col-md-6 mt-30">

            <div
              className="xb-feature-item wow fadeInUp"
              data-wow-delay="800ms"
              data-wow-duration="600ms"
            >

              <div className="xb-item--inner xb-border">

                <span className="xb-item--icon">
                  <img src={featureIcon2} alt="icon" />
                </span>

                <div className="xb-item--holder">

                  <h2 className="xb-item--title">
                    AI + Human Intelligence
                  </h2>

                  <p className="xb-item--content">

                    Elena.AI and our expert team work together to create
                    customized business solutions backed by analytics and automation.

                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Feature 3 */}
          <div className="col-lg-4 col-md-6 mt-30">

            <div
              className="xb-feature-item wow fadeInUp"
              data-wow-delay="900ms"
              data-wow-duration="600ms"
            >

              <div className="xb-item--inner xb-border">

                <span className="xb-item--icon">
                  <img src={featureIcon3} alt="icon" />
                </span>

                <div className="xb-item--holder">

                  <h2 className="xb-item--title">
                    Startup Friendly Solutions
                  </h2>

                  <p className="xb-item--content">

                    Affordable premium systems, flexible payments,
                    and business support designed specially for startups and growing brands.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;
