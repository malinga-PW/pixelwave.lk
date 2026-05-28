import React from "react";
import { Link } from "react-router-dom";

// Background
import serviceBg from "../../images/bg/service-gradient-bg.png";

// Service Images
import img07 from "../../images/service/img07.jpg";
import img08 from "../../images/service/img08.jpg";
import img09 from "../../images/service/img09.jpg";
import img11 from "../../images/service/img11.jpg";

const ServiceSection: React.FC = () => {

  // Arrow SVG
  const arrowIcon = (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >

      <rect
        x="6.29004"
        y="21.4111"
        width="22.36"
        height="2.83936"
        transform="rotate(-40.2798 6.29004 21.4111)"
        fill="white"
      />

      <rect
        x="9.44824"
        y="7.57031"
        width="2.83936"
        height="2.83936"
        transform="rotate(-40.2798 9.44824 7.57031)"
        fill="white"
      />

      <rect
        x="13.4492"
        y="7.90015"
        width="2.83936"
        height="2.83936"
        transform="rotate(-40.2798 13.4492 7.90015)"
        fill="white"
      />

      <rect
        x="17.4512"
        y="8.23047"
        width="2.83936"
        height="2.83936"
        transform="rotate(-40.2798 17.4512 8.23047)"
        fill="white"
      />

      <rect
        x="21.123"
        y="12.5627"
        width="2.83936"
        height="2.83936"
        transform="rotate(-40.2798 21.123 12.5627)"
        fill="white"
      />

      <rect
        x="20.793"
        y="16.5649"
        width="2.83936"
        height="2.83936"
        transform="rotate(-40.2798 20.793 16.5649)"
        fill="white"
      />

      <rect
        x="20.4619"
        y="20.5669"
        width="2.83936"
        height="2.83936"
        transform="rotate(-40.2798 20.4619 20.5669)"
        fill="white"
      />

    </svg>
  );

  // SERVICES DATA
  const services = [

    {
      title: "Premium Website Development",

      content:
        "Modern AI-powered business websites designed to build trust, attract customers, and grow your brand online.",

      images: [img07, img07, img07, img07],

      link: "/service-details",
    },

    {
      title: "Branding & Digital Identity",

      content:
        "Professional logo design, packaging, social branding, and visual identity systems that make businesses stand out.",

      images: [img08, img08, img08, img08],

      link: "/service-details",
    },

    {
      title: "Advertising & Growth Marketing",

      content:
        "Smart digital marketing campaigns powered by AI analytics, audience targeting, and performance optimization.",

      images: [img09, img09, img09, img09],

      link: "/service-details",
    },

    {
      title: "AI Automation & SaaS Infrastructure",

      content:
        "Custom AI systems, dashboards, workflow automation, quotation engines, and scalable business infrastructure.",

      images: [img11, img11, img11, img11],

      link: "/service-details",
    },

    {
      title: "Startup Business Support",

      content:
        "Complete startup launch support including websites, branding, business guidance, marketing, and growth strategy.",

      images: [img11, img11, img11, img11],

      link: "/service-details",
    },

    {
      title: "Business Registration & Barcode Solutions",

      content:
        "Business registration guidance, logo registration, barcode setup, and professional business setup support.",

      images: [img07, img07, img07, img07],

      link: "/service-details",
    },

  ];

  return (

    <section
      className="service pos-rel bg_img"
      style={{ backgroundImage: `url(${serviceBg})` }}
    >

      <div className="container">

        {/* Section Heading */}
        <div className="row">

          <div className="col-lg-8">

            <div className="sec-title mb-55">

              <span className="sub-title">
                OUR SOLUTIONS
              </span>

              <h2 className="title">
                Business Growth Solutions
                <br />
                Powered By AI + Human Intelligence
              </h2>

            </div>

          </div>

        </div>

        {/* Services Grid */}
        <div className="row mt-none-30">

          {services.map((service, index) => (

            <div className="col-lg-6 mt-30" key={index}>

              <div className="xb-ser-item xb-border img-hove-effect">

                <div className="xb-item--inner">

                  {/* Title */}
                  <h3 className="xb-item--title border-effect">

                    <Link to={service.link}>
                      {service.title}
                    </Link>

                  </h3>

                  {/* Arrow */}
                  <Link className="xb-item--icon" to={service.link}>
                    {arrowIcon}
                  </Link>

                  {/* Description */}
                  <p className="xb-item--content">
                    {service.content}
                  </p>

                  {/* Images */}
                  <div className="xb-item--img xb-img">

                    {service.images.map((img, i) => (

                      <Link key={i} to={service.link}>
                        <img src={img} alt="service" />
                      </Link>

                    ))}

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
};

export default ServiceSection;
