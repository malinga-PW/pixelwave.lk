import React from "react";

import featureBg from "../../images/bg/features-gradient-bg.png";

import diamondIcon from "../../images/icon/diamond-icon02.gif";

import feaIcon01 from "../../images/icon/fea-small-icon01.svg";
import feaIcon02 from "../../images/icon/fea-small-icon02.svg";
import feaIcon03 from "../../images/icon/fea-small-icon03.svg";
import feaIcon04 from "../../images/icon/fea-small-icon04.svg";
import feaIcon05 from "../../images/icon/fea-small-icon05.svg";
import feaIcon06 from "../../images/icon/fea-small-icon06.svg";

import featureImg01 from "../../images/feature/feature-img01.png";

import BrandSection from "./BrandSection";

const FeaturesAndBrands: React.FC = () => {

  return (

    <div
      className="bg_img"
      style={{
        background: `url(${featureBg}) no-repeat center center`,
        backgroundSize: "cover",
      }}
    >

      {/* WHY CHOOSE US */}
      <section className="feature pt-145">

        <div className="container">

          {/* Section Title */}
          <div className="sec-title sec-title-center fea-sec-title text-center mb-50">

            <span className="sub-title">
              WHY CHOOSE PIXELWAVE
            </span>

            <h2 className="title">

              Your Business Growth
              <span>
                <img src={diamondIcon} alt="icon" />
              </span>
              Is Our Mission

            </h2>

          </div>

          <div className="row mt-none-30 align-items-center">

            {/* LEFT SIDE */}
            <div className="col-lg-4 col-md-6 mt-30">

              <div className="xb-feature-left-item">

                {/* Feature 1 */}
                <div
                  className="xb-feature-item xb-feature-item2 wow fadeInUp"
                  data-wow-delay="100ms"
                  data-wow-duration="600ms"
                >

                  <div className="xb-item--inner justify-content-end xb-border">

                    <h2 className="xb-item--title text-end">

                      Business Workflow
                      <br />
                      Audit & Analysis

                    </h2>

                    <span className="xb-item--icon">
                      <img src={feaIcon01} alt="icon" />
                    </span>

                  </div>

                </div>

                {/* Feature 2 */}
                <div
                  className="xb-feature-item xb-feature-item2 wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="600ms"
                >

                  <div className="xb-item--inner justify-content-end xb-border">

                    <h2 className="xb-item--title text-end">

                      Custom Solutions
                      <br />
                      Built For Your Business

                    </h2>

                    <span className="xb-item--icon">
                      <img src={feaIcon02} alt="icon" />
                    </span>

                  </div>

                </div>

                {/* Feature 3 */}
                <div
                  className="xb-feature-item xb-feature-item2 wow fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="600ms"
                >

                  <div className="xb-item--inner justify-content-end xb-border">

                    <h2 className="xb-item--title text-end">

                      AI + Human Powered
                      <br />
                      Smart Operations

                    </h2>

                    <span className="xb-item--icon">
                      <img src={feaIcon03} alt="icon" />
                    </span>

                  </div>

                </div>

              </div>

            </div>

            {/* CENTER IMAGE */}
            <div className="col-lg-4 col-md-12 mt-30">

              <div
                className="xb-feature-img pos-rel text-center wow zoomIn"
                data-wow-delay="0ms"
                data-wow-duration="600ms"
              >

                <img
                  src={featureImg01}
                  alt="PixelWave Features"
                />

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-4 col-md-6 order-lg-last mt-30">

              <div className="xb-feature-right-item">

                {/* Feature 4 */}
                <div
                  className="xb-feature-item xb-feature-item2 xb-border wow fadeInUp"
                  data-wow-delay="100ms"
                  data-wow-duration="600ms"
                >

                  <div className="xb-item--inner xb-border">

                    <span className="xb-item--icon">
                      <img src={feaIcon04} alt="icon" />
                    </span>

                    <h2 className="xb-item--title">

                      Startup Friendly
                      <br />
                      Flexible Systems

                    </h2>

                  </div>

                </div>

                {/* Feature 5 */}
                <div
                  className="xb-feature-item xb-feature-item2 xb-border wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="600ms"
                >

                  <div className="xb-item--inner xb-border">

                    <span className="xb-item--icon">
                      <img src={feaIcon05} alt="icon" />
                    </span>

                    <h2 className="xb-item--title">

                      Fast Delivery
                      <br />
                      Premium Quality

                    </h2>

                  </div>

                </div>

                {/* Feature 6 */}
                <div
                  className="xb-feature-item xb-feature-item2 xb-border wow fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="600ms"
                >

                  <div className="xb-item--inner xb-border">

                    <span className="xb-item--icon">
                      <img src={feaIcon06} alt="icon" />
                    </span>

                    <h2 className="xb-item--title">

                      Long-Term Growth
                      <br />
                      Partnership Focus

                    </h2>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* BRAND SECTION */}
      <BrandSection />

    </div>

  );
};

export default FeaturesAndBrands;
