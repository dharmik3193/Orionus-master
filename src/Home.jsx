import { useState, useEffect } from "react";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import orionus from "./assests/Vector.png";
import aboutImg1 from "./assests/Rectangle 1.png";
import aboutImg2 from "./assests/Rectangle 2.png";
import aboutImg3 from "./assests/Rectangle 3.png";
import "bootstrap/dist/css/bootstrap.min.css";
import leatherImage from "./assests/Rectangle 11.jpg";
import { FaCloudUploadAlt } from "react-icons/fa";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-bootstrap";
// best seller
const products = [
  { names: "Laptop Bag", image: "/images/laptop bag.webp" },
  { names: "Bindle Bag", image: "/images/bindle bag.png" },
  { names: "Turmeric Powder", image: "/images/turmeric.png" },
  { names: "Coriander Powder", image: "/images/coriender.png" },
];

// inquiry form
function Home() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    product: "",
    query: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Your inquiry has been submitted!");
  };

  // quatation form
  const [fullName, setFullName] = useState("");
  const [productType, setProductType] = useState("");
  const [file, setFile] = useState(null);

  // Handle file upload
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setItemsPerSlide(1);
      } else if (width <= 770) {
        setItemsPerSlide(2);
      } else if (width <= 1024) {
        setItemsPerSlide(2);
      } else if (width <= 1200) {
        setItemsPerSlide(4);
      } else {
        setItemsPerSlide(4);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const chunkArray = (arr, size) => {
    return arr.reduce((acc, _, i) => {
      if (i % size === 0) acc.push(arr.slice(i, i + size));
      return acc;
    }, []);
  };

  const groupedProducts = chunkArray(products, itemsPerSlide);

  return (
    <div>
      <Header />
      <div className="hero-section">
        <Carousel>
          <Carousel.Item>
            <img
              src="/images/heroimg1.jpg"
              className="d-block w-100"
              alt="Slide 1"
            />

            <div className="hero-text">
              <div className="wel-texes">
                <h1>Welcome To Orionus</h1>
                <p>Crafting Timeless Elegance in Leather</p>
              </div>
              <div className="hero">
                <button className="learn">Learn More</button>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <img
              src="/images/heroimg2.jpg"
              className="d-block w-100"
              alt="Slide 2"
            />
            <div className="hero-text">
              <div className="wel-texes">
                <h1>Premium Indian Spices</h1>
                <p>
                  Authentic Indian spices, handpicked and delivered worldwide.
                </p>
              </div>
              <div className="hero">
                <button className="learn">Learn More</button>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <img
              src="/images/heroimg3.png"
              className="d-block w-100"
              alt="Slide 3"
            />
            <div className="hero-text">
              <div className="wel-texes">
                <h1>Women’s Bags</h1>
                <p>
                  With our range of bags, protect what matters while exploring the
                  world around you.
                </p>
              </div>
              <div className="her">
                <button className="learn">Learn More</button>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* orionus information */}

      <div className="about-section">
        <div className="orionus">
          <img src={orionus} alt="orionusround" />
        </div>

        <div className="container">
          <div className="row d-flex align-items-center">
            {/* Left Text Column */}
            <div className="col-md-6 left-side">
              <h2 className="section-titles">
                <span>Orionus</span>
              </h2>
              <div className="text">
                <p className="about-text">
                  A Government of India Recognized Leather Goods Manufacturer &
                  Export House.
                </p>
                <p className="about-text">
                  Founded in Year 2024, Orionus Exports stands among India’s most
                  distinguished leather companies. With a strong commitment to
                  excellence, we take pride in offering 100% genuine leather and
                  PU product manufacturing services. Headquartered in Surat,
                  Gujarat, India, our mission is to set new benchmarks in
                  quality, making us one of the finest leather manufacturers and
                  exporters in the country.
                </p>
                <p className="about-text">
                  Our dedication to superior craftsmanship is backed by
                  cutting-edge technology and a relentless pursuit of
                  perfection. We have our own advanced tannery, guaranteeing
                  top-quality leather in every product we create.
                </p>
                <p className="about-text">
                  At Orionus Exports. We believe in building long-term
                  relationships through trust, reliability, and a deep
                  understanding of our customers' needs.
                </p>
              </div>
            </div>

            {/* Right Images Column */}
            <div className="col-md-6 image-column">
              <div className="image-wrapper">
                <img
                  src={aboutImg1}
                  alt="Team Working"
                  className="img-fluid about-image1"
                />
                <img
                  src={aboutImg3}
                  alt="Business Meeting"
                  className="img-fluid about-image3"
                />
                <img
                  src={aboutImg2}
                  alt="Blank"
                  className="img-fluid about-image2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* creation content */}

      <div className="container">
        <div className="leather-pu-section">
          <div className=" text-center leather-creation">
            <h2 className="fw-bold leather-title">
              <span>Genuine Leather & Luxurious PU Creations</span>
            </h2>
            <div className="text-secondary leather-text">
              <p>
                Discover our beautifully handcrafted collection of leather bags,
                wallets, belts, and accessories. With an extensive range of
                premium genuine leather and vegan leather designs, we cater to
                diverse styles and preferences.
              </p>
              <p>
                We specialize in bespoke creations, offering customized
                handbags, wallets, belts, and small accessories in a variety of
                colors, sizes, patterns, and textures. Each piece is
                thoughtfully crafted to blend seamlessly into our clients'
                collections, combining elegance with functionality. Let our
                artistry bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* best seller content */}

      <div className="container">
        <div className="best-seller-section">
          <h2 className="best-seller-title text-center mb-4">
            Our Best Seller
          </h2>
          <Carousel
            controls={true}
            indicators={false}
            className="best-seller-carousel"
          >
            {groupedProducts.map((group, idx) => (
              <Carousel.Item key={idx}>
                <div className="row justify-content-center">
                  {group.map((product, index) => (
                    <div
                      className="col-12 col-sm-6 col-md-4 col-lg-3"
                      key={index}
                    >
                      <div className="product-cards h-100 shadow-sm">
                        <img
                          src={product.image}
                          className="card-imgs-top product-image img-fluid"
                          alt={product.names}
                        />
                        <div className="card-body text-center">
                          <p className="card-titles product-names">
                            {product.names}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>

      {/* 
Custom Leather Goods Manufacturing Services */}

      <div className="good-services-content">
        <div className="row align-items-center">
          {/* Image Column */}
          <div className="col-md-4 mb-4 mb-md-0">
            <img
              src={leatherImage}
              alt="Leather Work"
              className="img-fluid rounded-4 leather-img"
            />
          </div>

          {/* Content Column */}
          <div className="col-md-8 good-leathers">
            <h2 className="fw-bold good-leather-title">
              <span>Custom Leather Good Manufacturing Services</span>
            </h2>
            <div className="good-leather-text text-secondary">
              <p>
                As a trusted trader, manufacturer, and exporter of premium
                leather goods, we specialize in crafting high-quality wholesale
                and private-label leather products. Our commitment to excellence
                ensures that every piece reflects superior craftsmanship and
                attention to detail.
              </p>

              <p>
                With a meticulous quality control system in place, we guarantee
                consistency across our entire production process. This
                dedication to precision allows us to deliver leather goods that
                not only meet international standards but also enhance our
                clients' brands. Whether it's handbags, wallets, belts, or
                accessories, we create products that customers can cherish with
                pride.
              </p>
            </div>
            <a href="#" className="fw-bold good-learn">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* enquiry content */}
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
          <form onSubmit={handleSubmit}>
            <div className="row">
              {/* Full Name */}
              <div className="col-md-4 col-sm-6 col-12 mb-3">
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
              <div className="col-md-4 col-sm-6 col-12 mb-3">
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
              <div className="col-md-4 col-sm-6 col-12 mb-3">
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
            <div className="mt-3 mt-3 query">
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
                  <form>
                    <div className="row mb-4">
                      <div className="col-md-6">
                        <label className="form-label">Full Name</label>
                        <input
                          type="text"
                          className="form-controls"
                          placeholder="Enter your full name"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Product Type</label>
                        <select
                          className="form-selects"
                          value={productType}
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
                  </form>
                  {/* Submit Button */}
                  <div className="text-center">
                    <button type="submit" className="quotation-btn">
                      Get Quotation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer content */}

      <Footer />
    </div>
  );
}

export default Home;
