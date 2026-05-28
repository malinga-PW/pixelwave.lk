import React from "react";
import { Link } from "react-router-dom";

// Image imports
import footerBg from "../../images/bg/footer-bg.png";
import emailIcon from "../../images/icon/email-icon.svg";
import locationIcon from "../../images/icon/location-icon.svg";
import callIcon from "../../images/icon/call-icon.svg";

const Footer: React.FC = () => {

const arrowIcon = ( <svg
   width="28"
   height="28"
   viewBox="0 0 28 28"
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
 > <rect
     x="5.06641"
     y="19.2783"
     width="20.5712"
     height="2.61221"
     transform="rotate(-40.2798 5.06641 19.2783)"
     fill="white"
   /> <rect
     x="7.97144"
     y="6.54443"
     width="2.61221"
     height="2.61221"
     transform="rotate(-40.2798 7.97144 6.54443)"
     fill="white"
   /> <rect
     x="11.6528"
     y="6.84814"
     width="2.61221"
     height="2.61221"
     transform="rotate(-40.2798 11.6528 6.84814)"
     fill="white"
   /> <rect
     x="15.3345"
     y="7.15186"
     width="2.61221"
     height="2.61221"
     transform="rotate(-40.2798 15.3345 7.15186)"
     fill="white"
   /> <rect
     x="18.7124"
     y="11.1372"
     width="2.61221"
     height="2.61221"
     transform="rotate(-40.2798 18.7124 11.1372)"
     fill="white"
   /> <rect
     x="18.4089"
     y="14.8198"
     width="2.61221"
     height="2.61221"
     transform="rotate(-40.2798 18.4089 14.8198)"
     fill="white"
   /> <rect
     x="18.1045"
     y="18.501"
     width="2.61221"
     height="2.61221"
     transform="rotate(-40.2798 18.1045 18.501)"
     fill="white"
   /> </svg>
);

const socials = [
{
icon: <i className="fa-brands fa-facebook"></i>,
name: "Facebook",
url: "https://web.facebook.com/pixelwave.ai.solutions",
},
{
icon: <i className="fa-brands fa-linkedin"></i>,
name: "LinkedIn",
url: "#",
},
{
icon: <i className="fa-brands fa-instagram"></i>,
name: "Instagram",
url: "#",
},
{
icon: <i className="fa-brands fa-youtube"></i>,
name: "YouTube",
url: "#",
},
];

return (
<footer
className="footer footer-style-one pt-145 bg_img"
style={{ backgroundImage: `url(${footerBg})` }}
> <div className="xb-footer-wrap">

```
    {/* Footer Heading */}
    <div
      className="xb-footer-heading wow zoomIn"
      data-wow-delay="0ms"
      data-wow-duration="600ms"
    >
      <h1 className="title">PixelWave</h1>

      <a
        className="mail"
        href="mailto:hello@pixelwave.lk"
      >
        <img src={emailIcon} alt="email" />
        hello@pixelwave.lk
      </a>
    </div>

    {/* Footer Navigation */}
    <div className="xb-footer-nav">

      <div className="xb-footer-nav-item">
        <span className="sub-title">
          What do we provide?
        </span>

        <h2 className="title">
          <Link to="/service">
            Solutions
          </Link>
        </h2>
      </div>

      <div className="xb-footer-nav-item">
        <span className="sub-title">
          Who are we?
        </span>

        <h2 className="title">
          <Link to="/about">
            About PixelWave
          </Link>
        </h2>
      </div>

      <div className="xb-footer-nav-item">
        <span className="sub-title">
          Need help?
        </span>

        <h2 className="title">
          <Link to="/contact">
            Business Audit
          </Link>
        </h2>
      </div>

      <div className="xb-footer-nav-item">
        <span className="sub-title">
          Proven results
        </span>

        <h2 className="title">
          <Link to="/project">
            Case Studies
          </Link>
        </h2>
      </div>

      <div className="xb-footer-nav-item">
        <span className="sub-title">
          Learn & Grow
        </span>

        <h2 className="title">
          <Link to="/blog">
            Growth Insights
          </Link>
        </h2>
      </div>

    </div>

    {/* Elena.AI Section */}
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        marginBottom: "40px",
      }}
    >
      <p
        style={{
          color: "#bdbdbd",
          maxWidth: "900px",
          margin: "0 auto",
          lineHeight: "1.8",
        }}
      >
        Elena.AI is your strategic business growth assistant,
        helping businesses identify opportunities, automate workflows,
        strengthen branding, improve customer experiences,
        and scale smarter through AI + Human expertise.
      </p>
    </div>

    {/* Social Media */}
    <div className="xb-social-media-wrap">

      {socials.map((social, idx) => (

        <div
          className="xb-social-media-item ul_li_between"
          key={idx}
        >
          <div className="xb-item--holder ul_li">

            <div className="xb-item--icon">
              {social.icon}
            </div>

            <span className="xb-item--name">
              {social.name}
            </span>

          </div>

          <span className="xb-item--arrow">
            {arrowIcon}
          </span>

          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="xb-overlay"
          ></a>

        </div>

      ))}

    </div>

    {/* Footer Bottom */}
    <div className="xb-footer-bottom">

      <div className="contact-item">
        <img src={locationIcon} alt="location" />
        <span className="contact-method">
          Mulleriyawa, Sri Lanka
        </span>
      </div>

      <div className="contact-item copyright-item">
        <p>
          Copyright © 2026{" "}
          <Link to="/">
            PixelWave Total Solution
          </Link>
          . All Rights Reserved.
        </p>
      </div>

      <div className="contact-item">
        <a href="tel:+94719739734">
          <img src={callIcon} alt="call" />
        </a>

        <a
          className="contact-method"
          href="tel:+94719739734"
        >
          +94 71 973 973 4
        </a>
      </div>

    </div>

  </div>
</footer>
```

);
};

export default Footer;
