import React, { useRef } from "react";
import { useState, useEffect } from "react";
import contactus from "../assests/image7.png";
import Header from "../Header";
import Footer from "../Footer";
import "../css/Contact.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaCloudUploadAlt,
} from "react-icons/fa";
import emailjs from '@emailjs/browser';

function Contact() {
  const formRef = useRef();
  const inquiryRef = useRef();
  const fileRef = useRef();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    product: "",
    query: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInquiry = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_8ai2gtj',     // e.g., service_123abc
        'template_rn5uykp',    // e.g., template_456xyz
        inquiryRef.current,
        'E3AFSHjVGXKT057U8'      // e.g., xyzPublicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error);
          alert('Failed to send message.');
        }
      );
  }

  const handleQuote = (e) => {
    e.preventDefault();
    emailjs
      .send(
        'service_8ai2gtj',     // e.g., service_123abc
        'template_rn5uykp',    // e.g., template_456xyz
        {
          fullName: e.target.fullName.value,
          product: e.target.product.value,
          // attachment: compressedBase64, // Send base64 string
        },
        'E3AFSHjVGXKT057U8'      // e.g., xyzPublicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error);
          alert('Failed to send message.');
        }
      );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formRef.current);

    emailjs
      .sendForm(
        'service_8ai2gtj',     // e.g., service_123abc
        'template_2d2ml2e',    // e.g., template_456xyz
        formRef.current || fileRef.current,
        'E3AFSHjVGXKT057U8'      // e.g., xyzPublicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error);
          alert('Failed to send message.');
        }
      );

  };

  // quatation form
  const [fullName, setFullName] = useState("");
  const [productType, setProductType] = useState("");
  const [file, setFile] = useState(null);

  // Handle file upload
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div>
      {/* header */}
      <Header />

      {/* contact image home page */}
      <div className="position-relative contact-section">
        <img src={contactus} alt="homepage" className="w-100 contact-img" />
        <div className="contactus top-50 start-50 translate-middle">
          <h1 className=" text-white contactus-heading">Contact Us</h1>
        </div>
      </div>

      {/* get in touch */}
      <div className="container">
        <div className="get-in-touch-content">
          <div className="row">
            {/* Get in Touch Form */}
            <div className="col-lg-7 contact-form">
              <h3 className="get-in-touch fw-bold">Get In Touch</h3>
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="row mb-4">
                  <div className=" Contact-detail col-md-6 mb-3 mb-md-0">
                    First Name
                    <input
                      type="text"
                      className="form-control"
                      name="fname"
                      placeholder="Enter Your First Name"
                    />
                  </div>
                  <div className=" Contact-detail col-md-6">
                    Last Name
                    <input
                      type="text"
                      className="form-control"
                      name="lname"
                      placeholder="Enter Your Last Name"
                    />
                  </div>
                </div>
                <div className="row mb-4">
                  <div className=" Contact-detail col-md-6 mb-3 mb-md-0">
                    Email Address
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter Your Email Address"
                    />
                  </div>
                  <div className=" Contact-detail col-md-6">
                    Phone Number
                    <input
                      type="text"
                      className="form-control"
                      name="mobile"
                      placeholder="Enter Your Phone Number"
                    />
                  </div>
                </div>
                <div className="Contact-detail mb-4">
                  Message
                  <textarea
                    className="form-control"
                    rows="4"
                    name="message"
                    placeholder="Write a Message"
                  ></textarea>
                </div>

                <button className="Bcontactus mt-2 " onClick={handleSubmit}>Contact Us</button>
              </form>
            </div>

            {/* Vertical line */}
            <div className="col-md-1 d-md-flex justify-content-center align-items-center">
              <div className="vertical-line"></div>
            </div>

            {/* Support Info */}
            <div className="support-section col-lg-4">
              <div className="support fw-bold">Support</div>
              <ul className="list-unstyled mb-4">
                <li className="address  d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    className="me-3 locaicon"
                  >
                    <g clipPath="url(#clip0_43_1024)">
                      <path
                        d="M13.0003 2.16669C8.80783 2.16669 5.41699 5.55752 5.41699 9.75002C5.41699 15.4375 13.0003 23.8334 13.0003 23.8334C13.0003 23.8334 20.5837 15.4375 20.5837 9.75002C20.5837 5.55752 17.1928 2.16669 13.0003 2.16669ZM7.58366 9.75002C7.58366 6.76002 10.0103 4.33335 13.0003 4.33335C15.9903 4.33335 18.417 6.76002 18.417 9.75002C18.417 12.87 15.297 17.5392 13.0003 20.4534C10.747 17.5609 7.58366 12.8375 7.58366 9.75002Z"
                        fill="#000330"
                      />
                      <path
                        d="M13.0003 12.4584C14.4961 12.4584 15.7087 11.2458 15.7087 9.75002C15.7087 8.25425 14.4961 7.04169 13.0003 7.04169C11.5046 7.04169 10.292 8.25425 10.292 9.75002C10.292 11.2458 11.5046 12.4584 13.0003 12.4584Z"
                        fill="#000330"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_43_1024">
                        <rect width="26" height="26" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Shop No-B/72, 2nd Floor, Sumeru City mall, Opp Krishna Township, Sudama Chowk, Mota Varracha, Surat.
                </li>
                <li className="address  d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    className="me-3"
                  >
                    <g clipPath="url(#clip0_43_1027)">
                      <path
                        d="M21.6667 16.7375C20.3125 16.7375 19.0125 16.5209 17.7992 16.12C17.6908 16.0875 17.5717 16.0659 17.4633 16.0659C17.1817 16.0659 16.9108 16.1742 16.6942 16.38L14.3108 18.7634C11.245 17.2034 8.73167 14.7009 7.17167 11.6242L9.555 9.23003C9.85833 8.94836 9.945 8.52586 9.82583 8.1467C9.425 6.93336 9.20833 5.63336 9.20833 4.2792C9.20833 3.68336 8.72083 3.19586 8.125 3.19586H4.33333C3.7375 3.19586 3.25 3.68336 3.25 4.2792C3.25 14.4517 11.4942 22.6959 21.6667 22.6959C22.2625 22.6959 22.75 22.2084 22.75 21.6125V17.8209C22.75 17.225 22.2625 16.7375 21.6667 16.7375ZM5.44917 5.36253H7.07417C7.15 6.31586 7.3125 7.25836 7.56167 8.15753L6.26167 9.46836C5.82833 8.15753 5.54667 6.79253 5.44917 5.36253ZM20.5833 20.4967C19.1533 20.3992 17.7667 20.1175 16.4667 19.6734L17.7667 18.3734C18.6875 18.6334 19.63 18.7959 20.5833 18.8609V20.4967ZM19.5 6.44586V3.19586H17.3333V6.44586H14.0833V8.61253H17.3333V11.8625H19.5V8.61253H22.75V6.44586H19.5Z"
                        fill="#000330"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_43_1027">
                        <rect width="26" height="26" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  +91 7984159387
                </li>
                <li className="address d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    className="me-3"
                  >
                    <g clipPath="url(#clip0_43_1030)">
                      <path
                        d="M23.8337 6.49998C23.8337 5.30831 22.8587 4.33331 21.667 4.33331H4.33366C3.14199 4.33331 2.16699 5.30831 2.16699 6.49998V19.5C2.16699 20.6916 3.14199 21.6666 4.33366 21.6666H21.667C22.8587 21.6666 23.8337 20.6916 23.8337 19.5V6.49998ZM21.667 6.49998L13.0003 11.9166L4.33366 6.49998H21.667ZM21.667 19.5H4.33366V8.66665L13.0003 14.0833L21.667 8.66665V19.5Z"
                        fill="#000330"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_43_1030">
                        <rect width="26" height="26" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  info@exportorionus.com
                </li>
                <li className="address d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    className="me-3"
                  >
                    <g clipPath="url(#clip0_43_1033)">
                      <path
                        d="M12.9895 2.16669C7.00949 2.16669 2.16699 7.02002 2.16699 13C2.16699 18.98 7.00949 23.8334 12.9895 23.8334C18.9803 23.8334 23.8337 18.98 23.8337 13C23.8337 7.02002 18.9803 2.16669 12.9895 2.16669ZM20.497 8.66669H17.3012C16.9545 7.31252 16.4562 6.01252 15.8062 4.81002C17.7995 5.49252 19.457 6.87919 20.497 8.66669ZM13.0003 4.37669C13.8995 5.67669 14.6037 7.11752 15.0695 8.66669H10.9312C11.397 7.11752 12.1012 5.67669 13.0003 4.37669ZM4.61533 15.1667C4.44199 14.4734 4.33366 13.7475 4.33366 13C4.33366 12.2525 4.44199 11.5267 4.61533 10.8334H8.27699C8.19033 11.5484 8.12533 12.2634 8.12533 13C8.12533 13.7367 8.19033 14.4517 8.27699 15.1667H4.61533ZM5.50366 17.3334H8.69949C9.04616 18.6875 9.54449 19.9875 10.1945 21.19C8.20116 20.5075 6.54366 19.1317 5.50366 17.3334ZM8.69949 8.66669H5.50366C6.54366 6.86835 8.20116 5.49252 10.1945 4.81002C9.54449 6.01252 9.04616 7.31252 8.69949 8.66669ZM13.0003 21.6234C12.1012 20.3234 11.397 18.8825 10.9312 17.3334H15.0695C14.6037 18.8825 13.8995 20.3234 13.0003 21.6234ZM15.5353 15.1667H10.4653C10.3678 14.4517 10.292 13.7367 10.292 13C10.292 12.2634 10.3678 11.5375 10.4653 10.8334H15.5353C15.6328 11.5375 15.7087 12.2634 15.7087 13C15.7087 13.7367 15.6328 14.4517 15.5353 15.1667ZM15.8062 21.19C16.4562 19.9875 16.9545 18.6875 17.3012 17.3334H20.497C19.457 19.1209 17.7995 20.5075 15.8062 21.19ZM17.7237 15.1667C17.8103 14.4517 17.8753 13.7367 17.8753 13C17.8753 12.2634 17.8103 11.5484 17.7237 10.8334H21.3853C21.5587 11.5267 21.667 12.2525 21.667 13C21.667 13.7475 21.5587 14.4734 21.3853 15.1667H17.7237Z"
                        fill="#000330"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_43_1033">
                        <rect width="26" height="26" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  www.exportorionus.com
                </li>
              </ul>
              <div className="icon d-flex gap-3 align-items-center text-align-center">
                <a href="#" className="icons text-white fs-2 ">
                  <FaFacebookF />
                </a>
                <a href="#" className="icons text-white fs-2">
                  <FaTwitter />
                </a>
                <a href="#" className="icons text-white fs-2">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="icons text-white fs-2">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* inquiry content */}
      <div className="container">
        <div className="enquiry-form">
          <div className="text-center enquiry-title">
            <h2>Inquiry Now</h2>
            <p className="text-center enquiry-description">
              We will send you the product details as soon as we receive your
              query. Please select the product from the list and <br />
              send us your query. Please contact us so we can fulfill your
              requirements.
            </p>
          </div>
          <form ref={inquiryRef} onSubmit={handleInquiry}>
            <div className="row">
              {/* Full Name */}
              <div className="col-md-4">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  className="form-control"
                  placeholder="Enter Your Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email Address */}
              <div className="col-md-4">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Product Selection */}
              <div className="col-md-4">
                <label className="form-label">Product</label>
                <select
                  name="product"
                  className="form-select"
                  value={formData.product}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Product</option>
                  <option value="Leather Bag">Leather Bag</option>
                  <option value="Wallet">Wallet</option>
                  <option value="Belt">Belt</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </div>
            </div>

            {/* Query Text Area */}
            <div className="mt-3">
              <label className="form-label">Write Query</label>
              <textarea
                name="query"
                className="form-control"
                placeholder="Write Your Query Here"
                rows="4"
                value={formData.query}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-4">
              <button type="submit" className="enquiry-btn">
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* quatation content */}
      {/* quatation content */}
      <div className="container">
        <div className="quotation-content">
          <div className="request-quotation">
            <div className="row">
              {/* Left Side - Text Section */}

              <div className="col-md-5">
                <div className="quotation-title">
                  <h3 className="text-success">Request For Quotation</h3>
                  <p className="text-muted">
                    If you have a leather product design, upload it with all the
                    details and select the type. Upon receiving the quote, we
                    will get in touch with leather goods industries to price
                    your demand according to your specifications.
                  </p>
                </div>
              </div>

              {/* Right Side - Form Section */}
              <div className="col-md-7">
                <div className="form-section">
                  <form ref={fileRef} onSubmit={handleSubmit}>
                    <div className="row mb-4">
                      <div className="col-md-6">
                        <label className="form-label">Full Name</label>
                        <input
                          type="text"
                          className="form-controls"
                          placeholder="Enter your full name"
                          name="fullName"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Product Type</label>
                        <select
                          className="form-selects"
                          value={productType}
                          name="product"
                          onChange={(e) => setProductType(e.target.value)}
                        >
                          <option>Select Product Type</option>
                          <option value="Bags">Bags</option>
                          <option value="Wallets">Wallets</option>
                          <option value="Belts">Belts</option>
                          <option value="Accessories">Accessories</option>
                        </select>
                      </div>
                    </div>

                    {/* File Upload */}
                    <div className="mb-5">
                      <label className="form-label">Upload</label>
                      <div className="upload-box border rounded p-4 text-center">
                        <input
                          type="file"
                          hidden
                          id="fileUpload"
                          name="file"
                          onChange={handleFileChange}
                        />
                        <label htmlFor="fileUpload" className="d-block">
                          <FaCloudUploadAlt
                            size={40}
                            className="text-primary"
                          />
                          <p className="mt-2 text-mute">Upload a File</p>
                          <p className="mt-2 text-muted">
                            drag and drop file here
                          </p>
                        </label>
                        {file && (
                          <p className="text-success mt-2">{file.name}</p>
                        )}
                      </div>
                    </div>
                    {/* Submit Button */}
                    <div className="text-center">
                      <button type="submit" className="quotation-btn">
                        Get Quotation
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}

      <Footer />
    </div>
  );
}

export default Contact;
