import React from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import footer from "./assests/logo.png";

function Footer() {
  return (
    <div>
      {/* footer content */}
      <div className="footer-content">
        {/* <div className="container"> */}
        <footer className="footer container-fluid">
          <div className="footer-row d-flex flex-wrap">
            {/* Column 1 */}
            <div className="col-md-4 col-sm-6 col-6">
              <div className="footer-title">
                <img src={footer} alt="footer-logo" className="footerlogo" />
              </div>
              <div className="d-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="me-2 locicon"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7M7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9"
                  />
                  <circle cx="12" cy="9" r="2.5" fill="currentColor" />
                </svg>

                <p className="mb-0">
                  Shop No-B/72, 2nd Floor, Sumeru City mall,Opp Krishna
                  Township,Sudama Chowk,Mota Varracha,Surat.
                </p>
              </div>
              <div className="d-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="me-2 callicon"
                >
                  <path
                    fill="currentColor"
                    d="M16 11V8h-3V6h3V3h2v3h3v2h-3v3zm3.95 10q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3M6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025T6.025 9m8.95 8.95q.975.425 1.988.675T19 18.95v-2.2l-2.35-.475zm0 0"
                  />
                </svg>
                <p className="mb-0">+91 7984159387</p>
              </div>
              <div className="d-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="me-2 mailicon"
                >
                  <path
                    fill="currentColor"
                    d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"
                  />
                </svg>
                <p className="mb-0"> info@exportorionus.com</p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="col-md-3 col-sm-6 col-6">
              <div className="titleQ">Quick Links</div>
              <ul className="list-unstyled">
                <li>
                  <a href="/home" className="footer-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="footer-link">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/products" className="footer-link">
                    Products
                  </a>
                </li>
                <li>
                  <a href="/ourTeam" className="footer-link">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="/contact" className="footer-link">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="col-md-3 col-sm-6 col-6">
              <h5 className="title">Product</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/products" className="footer-link">
                    Leather Handbags
                  </a>
                </li>
                <li>
                  <a href="/products" className="footer-link">
                    Leather Wallets
                  </a>
                </li>
                <li>
                  <a href="/products" className="footer-link">
                    Leather Business Bags
                  </a>
                </li>
                <li>
                  <a href="/products" className="footer-link">
                    Indian Spices
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="col-md-2 col-sm-6 col-6">
              <h5 className="title">Policy</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="footer-link">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Return & Exchange
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Shipping & Delivery
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="d-flex gap-3">
            <a href="#" className="text-black">
              <FaFacebookF className="facicon"/>
            </a>
            <a href="https://x.com/orionusindia?s=11" className="text-black">
              <FaTwitter className="facicon" />
            </a>
            <a href="https://www.linkedin.com/in/orionus-india-367890359/" className="text-black">
              <FaLinkedinIn className="facicon"/>
            </a>
            <a href="https://www.instagram.com/orionus.exports?igsh=NTYyZTloM2VmOXkw&utm_source=qr" className="text-black">
              <FaInstagram className="facicon"/>
            </a>
          </div>
          <div className="ftext-center pt-3 border-top border-secondary">
            Orionus Crafting India © copyright 2025. All Rights Reserved.
          </div>
        </footer>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Footer;
