import React, { useState } from "react";
import SimpleReactValidator from "simple-react-validator";

// Icons
import userIcon from "../../images/icon/user-balck-icon.svg";
import emailIcon from "../../images/icon/sms-balck-icon.svg";
import phoneIcon from "../../images/icon/call-icon02.svg";
import uploadIcon from "../../images/icon/upload-icon.svg";
import listIcon from "../../images/icon/list-icon.svg";
import messageIcon from "../../images/icon/messages-icon.svg";
import arrowIcon from "../../images/icon/rotate-arrow-black02.svg";

const ContactForm: React.FC = () => {
  const [forms, setForms] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    file: null as File | null,
  });

  const [validator] = useState(
    new SimpleReactValidator({
      className: "errorMessage",
    })
  );

  const changeHandler = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setForms({
      ...forms,
      [name]: value,
    });

    if (validator.allValid()) {
      validator.hideMessages();
    } else {
      validator.showMessages();
    }
  };

  const fileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    setForms({
      ...forms,
      file,
    });
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (validator.allValid()) {
      console.log("Business Audit Request:", forms);

      alert("Thank you! Your business audit request has been submitted.");

      setForms({
        name: "",
        businessName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        file: null,
      });

      validator.hideMessages();
    } else {
      validator.showMessages();
    }
  };

  return (
    <form onSubmit={submitHandler} className="xb-contact-input-form">
      <div className="row mt-none-20">
        
        {/* Business Owner */}
        <div className="col-lg-6 col-md-6 mt-20">
          <div className="xb-input-field">
            <input
              id="author-name"
              name="name"
              type="text"
              value={forms.name}
              onChange={changeHandler}
              required
            />
            <label htmlFor="author-name">Business Owner Name*</label>
            <img src={userIcon} alt="user" />
          </div>
          {validator.message("name", forms.name, "required|alpha_space")}
        </div>

        {/* Business Name */}
        <div className="col-lg-6 col-md-6 mt-20">
          <div className="xb-input-field">
            <input
              id="business-name"
              name="businessName"
              type="text"
              value={forms.businessName}
              onChange={changeHandler}
              required
            />
            <label htmlFor="business-name">Business Name*</label>
            <img src={userIcon} alt="business" />
          </div>
          {validator.message("businessName", forms.businessName, "required")}
        </div>

        {/* Email */}
        <div className="col-lg-6 col-md-6 mt-20">
          <div className="xb-input-field">
            <input
              id="author-email"
              name="email"
              type="email"
              value={forms.email}
              onChange={changeHandler}
              required
            />
            <label htmlFor="author-email">Business Email*</label>
            <img src={emailIcon} alt="email" />
          </div>
          {validator.message("email", forms.email, "required|email")}
        </div>

        {/* Phone */}
        <div className="col-lg-6 col-md-6 mt-20">
          <div className="xb-input-field">
            <input
              id="author-phone"
              name="phone"
              type="text"
              value={forms.phone}
              onChange={changeHandler}
              required
            />
            <label htmlFor="author-phone">WhatsApp Number*</label>
            <img src={phoneIcon} alt="phone" />
          </div>
          {validator.message("phone", forms.phone, "required")}
        </div>

        {/* File Upload */}
        <div className="col-lg-12 col-md-12 mt-20">
          <div className="xb-input-field xb-select-file">
            <input type="file" onChange={fileHandler} />
            <img src={uploadIcon} alt="upload" />
            <span>
              {forms.file
                ? forms.file.name
                : "Attach company profile, logo, website screenshots or documents..."}
            </span>
          </div>
        </div>

        {/* Service Selection */}
        <div className="col-lg-12 col-md-12 mt-20">
          <div className="xb-input-field xb-select-field">
            <select
              name="service"
              value={forms.service}
              onChange={changeHandler}
              required
              className="nice-select"
            >
              <option value="">Select Required Service*</option>
              <option value="Premium Website Development">Premium Website Development</option>
              <option value="Branding & Logo Design">Branding & Logo Design</option>
              <option value="Digital Marketing & Advertising">Digital Marketing & Advertising</option>
              <option value="Business Registration Support">Business Registration Support</option>
              <option value="Barcode Registration">Barcode Registration</option>
              <option value="Startup Business Support">Startup Business Support</option>
              <option value="AI Automation & SaaS Infrastructure">AI Automation & SaaS Infrastructure</option>
              <option value="Business Growth Consultation">Business Growth Consultation</option>
            </select>
            <img src={listIcon} alt="list" />
          </div>
          {validator.message("service", forms.service, "required")}
        </div>

        {/* Message */}
        <div className="col-lg-12 col-md-12 mt-20">
          <div className="xb-input-field xb-massage-field">
            <textarea
              id="massage"
              name="message"
              value={forms.message}
              onChange={changeHandler}
              required
            ></textarea>
            <label htmlFor="massage">
              Tell us about your business challenges, goals, or requirements...
            </label>
            <img src={messageIcon} alt="message" />
          </div>
          {validator.message("message", forms.message, "required")}
        </div>
      </div>

      {/* Submit Button */}
      <div className="form-submit-btn mt-35">
        <button type="submit" className="thm-btn form-btn">
          Request Free Business Audit
          <span className="xb-icon">
            <img src={arrowIcon} alt="arrow" />
            <img src={arrowIcon} alt="arrow" />
          </span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
