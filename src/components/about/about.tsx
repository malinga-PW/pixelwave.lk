import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import aboutBg from "../../images/bg/about-bg.png";

// Animated GIFs
import gif1 from "../../images/icon/original-66948a0d81d.gif";
import gif2 from "../../images/icon/0deec720000b2066289b.gif";
import gif3 from "../../images/icon/b10c3e43e836d32554bf.gif";

// About images
import img01 from "../../images/about/img01.jpg";
import img02 from "../../images/about/img02.jpg";
import img03 from "../../images/about/img03.jpg";

import { Link } from "react-router-dom";

const AboutSection: React.FC = () => {

  useEffect(() => {
    const bgEl = document.querySelector<HTMLElement>(".xb-about-img-wrap");
    if (bgEl) bgEl.style.backgroundImage = `url(${aboutBg})`;
  }, []);

  const aboutImages = [img01, img02, img03];

  return (
    <section className="about pt-140">

      <div className="container">

        <div className="sec-title about-sec-title mb-75">

          <span className="sub-title">
            About PixelWave Total Solution
          </span>

          <h2 className="title">

            We solve
            <span>
              <img src={gif1} alt="animation" />
            </span>

            business challenges through

            <span>
              <img src={gif2} alt="animation" />
            </span>

            AI + Human powered solutions that help companies

            <span>
              <img src={gif3} alt="animation" />
            </span>

            grow smarter and faster.

          </h2>

          <p
            style={{
              maxWidth: "900px",
              marginTop: "25px",
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#bdbdbd",
            }}
          >

            At PixelWave Total Solution, we believe every business deserves a
            customized growth strategy. Before recommending any solution,
            we inspect and analyze business workflows, identify bottlenecks,
            uncover growth opportunities, and build systems tailored to each
            client's goals.

            <br /><br />

            Our mission is simple:

            <strong> Grow Together.</strong>

            When our clients succeed, we succeed. That's why we focus on
            long-term partnerships, measurable results, AI-powered automation,
            premium websites, branding, marketing, startup support, and business
            growth infrastructure.

            <br /><br />

            We aim to become one of the world's leading AI + Human powered
            business solution companies while helping Sri Lankan businesses
            compete on international standards.

          </p>

        </div>

      </div>

      {/* Marquee Images */}
      <div className="xb-about-img-wrap bg_img wow">

        <Marquee
          speed={40}
          gradient={false}
          pauseOnHover={false}
        >

          {aboutImages.map((img, idx) => (

            <div
              key={idx}
              className="xb-about-img-item img-hove-effect"
            >

              <div className="xb-img">

                <Link to="/contact">

                  <img
                    src={img}
                    alt={`about-${idx + 1}`}
                  />

                </Link>

              </div>

            </div>

          ))}

        </Marquee>

      </div>

    </section>
  );
};

export default AboutSection;
