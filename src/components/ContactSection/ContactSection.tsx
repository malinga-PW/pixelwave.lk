import React, { useEffect, useRef, useState } from "react";
import contactBg from "../../images/bg/contact-bg.png";
import gifShape from "../../images/icon/b10c3e43e836d32554bf.gif";
import shape1 from "../../images/shape/contact-shape01.png";
import shape2 from "../../images/shape/contact-shape02.png";
import ContactForm from "../ContactFrom/ContactForm";

const ContactSection: React.FC = () => {
const [projectCount, setProjectCount] = useState(0);
const [clientSatisfaction, setClientSatisfaction] = useState(0);
const sectionRef = useRef<HTMLElement>(null);

useEffect(() => {
const observer = new IntersectionObserver(
(entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
let project = 0;
let client = 0;

```
        const projectInterval = setInterval(() => {
          project += 5;

          if (project >= 50) {
            project = 50;
            clearInterval(projectInterval);
          }

          setProjectCount(project);
        }, 100);

        const clientInterval = setInterval(() => {
          client += 5;

          if (client >= 95) {
            client = 95;
            clearInterval(clientInterval);
          }

          setClientSatisfaction(client);
        }, 50);

        observer.disconnect();
      }
    });
  },
  { threshold: 0.4 }
);

if (sectionRef.current) {
  observer.observe(sectionRef.current);
}

return () => observer.disconnect();
```

}, []);

return (
<section
className="contact-section pt-150 pb-140 bg_img"
ref={sectionRef}
style={{ backgroundImage: `url(${contactBg})` }}
> <div className="container"> <div className="row mt-none-50 justify-content-center">

```
      {/* LEFT SIDE */}
      <div className="col-lg-6 mt-50">
        <div className="xb-content-wrap">

          <div className="sec-title contact-sec-title">

            <span className="sub-title mb-15">
              Start Your Growth Journey
            </span>

            <h2 className="title horizontal-shape">
              Grow your business with
              <img
                src={gifShape}
                alt="animated-shape"
              />
              AI + Human powered solutions
            </h2>

            <p
              style={{
                marginTop: "20px",
                color: "#bdbdbd",
                lineHeight: "1.8",
              }}
            >
              PixelWave Total Solution helps businesses build
              premium websites, automate workflows, strengthen
              branding, increase visibility, and achieve long-term
              growth through AI + Human expertise.
            </p>

          </div>

          <div className="xb-contact-conent">

            <div className="xb-contact-inner ul_li_between">

              <div className="xb-contact-item">
                <h3 className="xb-item--number">
                  <span className="xbo">{projectCount}</span>
                  <span className="suffix">+</span>
                </h3>

                <p className="xb-item--content">
                  Business Solutions & Projects Delivered
                </p>
              </div>

              <div className="xb-contact-item">
                <h3 className="xb-item--number">
                  <span className="xbo">{clientSatisfaction}</span>
                  <span className="suffix">%</span>
                </h3>

                <p className="xb-item--content">
                  Client Satisfaction & Long-Term Partnerships
                </p>
              </div>

            </div>

            <div className="shape shape--1">
              <img src={shape1} alt="shape" />
            </div>

            <div className="shape shape--2">
              <img src={shape2} alt="shape" />
            </div>

          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="col-lg-6 mt-50">
        <div className="xb-contact-form xb-border">

          <div className="form-heading text-center mb-30">

            <h3 className="title">
              Request Your Free Business Growth Audit
            </h3>

            <p className="sub-title">
              Tell us about your business. Elena.AI and our team
              will review your workflow and recommend practical
              growth opportunities.
            </p>

          </div>

          {/* Contact Information */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "25px",
              lineHeight: "2",
            }}
          >
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:hello@pixelwave.lk">
                hello@pixelwave.lk
              </a>
            </p>

            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+94719739734">
                +94 71 973 973 4
              </a>
            </p>

            <p>
              <strong>Location:</strong>
              {" "}Mulleriyawa, Sri Lanka
            </p>
          </div>

          {/* Action Buttons */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <a
              href="https://maps.app.goo.gl/R9puubMq9Wi93SsP8"
              target="_blank"
              rel="noopener noreferrer"
              className="thm-btn"
            >
              View Location
            </a>
          </div>

          <div
            style={{
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            <a
              href="https://wa.me/94719739734"
              target="_blank"
              rel="noopener noreferrer"
              className="thm-btn"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Contact Form */}
          <ContactForm />

        </div>
      </div>

    </div>
  </div>
</section>
```

);
};

export default ContactSection;
