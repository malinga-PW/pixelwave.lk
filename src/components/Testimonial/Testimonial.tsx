import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// ✅ Images
import bgImage from "../../images/bg/testimonial-bg.png";
import gifShape from "../../images/icon/animated-gif03.gif";
import avatar1 from "../../images/avatar/img01.jpg";
import avatar2 from "../../images/avatar/img02.jpg";
import avatar3 from "../../images/avatar/img03.jpg";
import avatar4 from "../../images/avatar/img04.jpg";
import avatar5 from "../../images/avatar/img05.jpg";

const testimonials = [
  {
    id: 1,
    source: "Client Feedback",
    rating: "5.0",
    content:
      "PixelWave helped us strengthen our online presence and improve how customers discover our products. Their guidance and website solutions gave our business a more professional image.",
    name: "Harendra Amarasinghe",
    designation: "MaxwellLanka.com",
    avatar: avatar1,
  },
  {
    id: 2,
    source: "Client Feedback",
    rating: "5.0",
    content:
      "The team understood our tourism business requirements and helped us present our services more effectively online. Communication and support were excellent throughout the project.",
    name: "Subhash Chandana",
    designation: "BSTours.lk",
    avatar: avatar2,
  },
  {
    id: 3,
    source: "Client Feedback",
    rating: "5.0",
    content:
      "PixelWave provided valuable support for our tea export business. Their professional approach and focus on branding helped us create a stronger digital presence.",
    name: "Sachi Wijethunga",
    designation: "CupzoTea.com",
    avatar: avatar3,
  },
  {
    id: 4,
    source: "Client Feedback",
    rating: "5.0",
    content:
      "We wanted a better way to present our accommodation services online. PixelWave delivered a clean and modern solution while providing ongoing support when needed.",
    name: "Thilina Prasanna",
    designation: "Memos Inn",
    avatar: avatar4,
  },
];

const TestimonialSection: React.FC = () => {
  useEffect(() => {
    const bgEl = document.querySelector<HTMLElement>(".testimonial.bg_img");
    if (bgEl) bgEl.style.backgroundImage = `url(${bgImage})`;
  }, []);

  return (
    <section className="testimonial pb-150 bg_img">
      <div className="container">
        <div className="sec-title sec-title-center tes-sec-title text-center mb-50">
          <span className="sub-title mb-15">Our Testimonial</span>
          <h2 className="title">
            Hear from our
            <img src={gifShape} alt="shape" /> happy customers
          </h2>
        </div>
      </div>

      <div className="xb-testimonial-slider">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={400}
          spaceBetween={30}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1700: { slidesPerView: 5 },
            1600: { slidesPerView: 4 },
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            576: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="xb-testimonial-item">
                <div className="xb-item--inner xb-border">
                  <ul className="xb-item--rating list-unstyled ul_li">
                    <li>
                      <i className="fa-solid fa-star-sharp"></i>
                    </li>
                    <li>{item.source}</li>
                    <li>{item.rating}</li>
                  </ul>
                  <p className="xb-item--content">{item.content}</p>
                  <div className="xb-item--author ul_li">
                    <div className="xb-item--avatar">
                      <img src={item.avatar} alt={item.name} />
                    </div>
                    <div className="xb-item--holder">
                      <h3 className="xb-item--name">{item.name}</h3>
                      <span className="xb-item--desig">{item.designation}</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;
