import React, { Fragment, useEffect } from "react";

import Header from "../../components/Header/Header";
import PageTitle from "../../components/pagetitle/PageTitle";
import ServiceSection from "./ServiceSection";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";

const ServicePage: React.FC = () => {

  useEffect(() => {
    document.title = "Business Solutions | PixelWave Total Solution";
  }, []);

  return (
    <Fragment>

      <div className='about-page inner-page'>

        <div className="body_wrap o-clip">

          {/* Header */}
          <Header />

          <main>

            {/* Page Title */}
            <PageTitle
              pageTitle="Business Growth Solutions"
              pagesub="Solutions"
            />

            {/* Services */}
            <ServiceSection />

          </main>

          {/* Footer */}
          <Footer />

          {/* Scrollbar */}
          <Scrollbar />

        </div>

      </div>

    </Fragment>
  );
};

export default ServicePage;
