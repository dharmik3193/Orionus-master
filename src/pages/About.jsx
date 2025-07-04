import React, { useState } from "react";
import Header from "../Header";
import aboutimg from "../assests/image.png";
import workshopImg from "../assests/image2.png";
import orionuss from "../assests/Orionus · Orionus · Orionus · Orionus · Orionus · Orionus ·.png";
import legacyImg from "../assests/image3.png";
import "../css/About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import ourMission from "../assests/image4.png";
import ourVision from "../assests/image5.png";
import Footer from "../Footer";

// why-choose us

const accordionData = [
  {
    title: "Global Expertise",
    content:
      "We are a leading leather manufacturer & exporter catering to diverse industries worldwide.",
  },
  {
    title: "Premium Craftsmanship",
    content:
      "Every product is meticulously handcrafted by skilled artisans passionate about their craft.",
  },
  {
    title: "Cutting-Edge Manufacturing",
    content:
      "Equipped with modern machinery and technology, we ensure precision and consistency.",
  },
  {
    title: "Diverse Product Range",
    content:
      "As a leather goods manufacturer, we offer an extensive collection of handbags, wallets, business bags, and accessories.",
  },
  {
    title: "Unmatched Quality & Affordability",
    content:
      "We ensure the highest quality standards while offering competitive pricing.",
  },
];

// our product line

const products = [
  {
    icon: "/icons/Frame.png", // replace with actual icon paths
    title: "Leather Handbags",
  },
  {
    icon: "/icons/Frame (1).png",
    title: "Wallets & Small Accessories",
  },
  {
    icon: "/icons/Frame (2).png",
    title: "Business & Office Bags",
  },
  {
    icon: "/icons/Frame (3).png",
    title: "Luxury Designer Leather Products",
  },
  {
    icon: "/icons/Frame (4).png",
    title: "Custom Leather Goods",
  },
];

function About() {
  // why choose us
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {/* header content */}
      <Header />

      {/* about us content */}

      <div className="about-sec text-center position-relative">
        <img
          src={aboutimg}
          alt="About Us Banner"
          className="w-100 about-image"
        />
        <div className="about-content position-absolute top-50 start-50 translate-middle text-white">
          <div className="about-heading fw-bold">About Us</div>
          <p className="about-texts fw-bold">
            We Create with Heart, You Carry with Style Premium Leather Goods &
            Accessories
          </p>
          <p className="about-texts fw-bold">
            – Trader Manufacturer & Exporter
          </p>
        </div>
      </div>

      {/* who we are */}

      <div className="container">
        <div className="who-we-section">
          <div className="text-center who-textes">
            <h2 className="who-about fw-bold">
              <span> Who We Are?</span>
              <div className="orionuss">
                <img src={orionuss} alt="" />
              </div>
            </h2>
            <h5 className="fw-bold  who-text1">
              Orionus - Leading Manufacturer & Exporter of Leather Goods
            </h5>
            <p className="text-muted mt-2 who-text2">
              Orionus Exports is a premier manufacturer and exporter of leather
              goods based in Surat, India. Renowned globally for our exceptional
              designs, craftsmanship, durability, and quality, we blend advanced
              technology with skilled artistry to create premium leather
              products.
            </p>
          </div>

          <div className="text-center">
            <div className="image-border-container d-inline-block">
              <img
                src={workshopImg}
                alt="Leather Workshop"
                className="img-fluid rounded-4"
              />
            </div>
          </div>
        </div>
      </div>

      {/* our legacy */}
      <div className="container">
        <div className="legacy-section">
          <div className="row align-items-center">
            <div className="legacy col-md-5">
              <img
                src={legacyImg}
                alt="Legacy Image"
                className="img-fluid rounded"
              />
              <h1 className="main-text vertical-text d-none d-md-block">
                LEGACY
              </h1>
            </div>
            <div className="legacy-text col-md-7">
              <h3 className="legacy-heading fw-bold">Our Legacy</h3>
              <div className="legacy-textes fw-medium">
                <p>
                  Since our inception in Year 2024, we have remained committed to
                  timeless design and impeccable craftsmanship. Our mission is
                  to offer an epitome of style, elegance, and luxury, crafting
                  high-quality leather fashion and utility products that stand
                  out for their uniqueness and sophistication.
                </p>
                <p>
                  Using 100% genuine leather, we manufacture exquisite leather
                  goods tailored to meet our clients' specific needs. Whether
                  it’s luxury designer pieces or everyday essentials, our
                  expertise ensures superior quality and elegance. Over the
                  year 2024, Orionus Exports has become a trusted name in the global
                  leather industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* why choose us */}

      <div className="container">
        <div className="why-choose-us">
          <h2 className="why-choose-text">Why Choose Us?</h2>
          <div className="accordion-box">
            {accordionData.map((item, index) => (
              <div key={index} className="accordion-item custom-border">
                <button
                  className="accordion-title d-flex justify-content-between align-items-center w-100 btn text-start"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="fw-bold">{item.title}</span>
                  <span className="why-choose icon fs-3">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="accordion-content text-secondary">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* our product line */}
      <div className="product-line-content">
        <div className="product-line-section text-center">
          <h2 className="product-line-title">Our Product Line</h2>
          <p className="product-line-description fw-medium">
            Our goal is to seamlessly integrate leather into your lifestyle,
            investing countless hours in innovation and design to produce pieces
            that resonate with modern trends while maintaining a classic appeal.
          </p>
          <div className="product-name-content">
            <div className="row g-4 d-flex flex-row">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="col-6 col-sm-4 col-md-2 col-lg-2 text-center items"
                >
                  <img
                    src={product.icon}
                    alt={product.title}
                    className="img-fluid product-icon mb-2"
                  />
                  <h6 className="product-name fw-bold">{product.title}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* expansion into surat */}

      <div className="container">
        <div className="expansion-section rounded-4 text-center">
          <h2 className="expansion-heading fw-bold mb-2">
            Expansion into Surat
          </h2>
          <p className="expansion-text">
            Expanding our reach, we are now establishing our presence in Surat,
            specializing in the export, trade, and manufacturing of premium
            leather accessories like handbags, wallets, and business bags.
          </p>
          <p className="expansion-text">
            At Orionus Exports, we take pride in offering products that are proudly
            Made in India, crafted with passion and precision.
          </p>
          <p className="expansion-text  mb-0">
            Let us bring the essence of luxury and craftsmanship into your
            hands!
          </p>
        </div>
      </div>

      {/* our mission */}

      <Container>
        <Row className="our-mission-section align-items-center">
          <Col xs={12} md={6} className="our-mission mb-4 mb-md-0">
            <h2 className=" mission-heading fw-bold">Our Mission</h2>
            <div className="text-secondary">
              <p>
                We aim to create high-quality leather products with great
                design, durability, and style. Our focus is on customer
                satisfaction, strong values, and innovation to deliver the best.
              </p>
              <p>
                Based in Surat, we export, trade, and manufacture leather
                accessories like handbags, wallets, and business bags. With a
                commitment to excellence, we ensure our products meet global
                standards and enhance everyday life.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <img
              src={ourMission}
              alt="Our Mission"
              className="img-fluid rounded-3"
            />
          </Col>
        </Row>
      </Container>

      {/* our vision */}
      <div className="container-fluid">
        <div className="our-vision">
          <div className="our-vision-section">
            <div className="row align-items-center rounded-4">
              {/* Left Image */}
              <div className="vision-img col-md-6">
                <img
                  src={ourVision} // replace with your image path
                  alt="Our Vision"
                  className="vision img-fluid rounded-4 w-100"
                />
              </div>

              {/* Right Text Content */}
              <div className="vision-sec col-md-6">
                <h2 className="vision-heading fw-bold">
                  <span>Our </span>
                  <span>Vision</span>
                </h2>
                <div className="vision-textes">
                  <p>
                    We aim to become India’s largest and most trusted exporter
                    of high-quality leather goods and accessories. Our goal is
                    to provide well-crafted products that meet global standards.
                  </p>
                  <p>
                    With a focus on designs for men, women, and children, we
                    ensure every product is made with care and attention to
                    detail. Quality, reliability, and customer satisfaction are
                    at the heart of everything we do.
                  </p>
                </div>
              </div>
            </div>

            {/* Vertical Text for large screens */}
            <div className="our-goals-text d-none d-lg-block">OUR GOALS</div>
          </div>
        </div>
      </div>

      {/* our core values */}
      <div className="container">
        <div className="our-core-section">
          <div className="text-center text-white rounded-4">
            <h2 className="core-heading fw-bold mb-4">Our Core Values</h2>
            <p className="core-textes fs-6 m-0">
              We are dedicated to crafting high-quality leather products with
              precision and durability. Through innovation and sustainability,
              we ensure excellence, helping businesses thrive in a competitive
              and ever-evolving market.
            </p>
          </div>
        </div>
      </div>

      {/* footer content */}

      <Footer />
    </div>
  );
}

export default About;
