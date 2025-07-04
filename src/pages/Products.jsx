import React, { useState } from "react";
import "../css/Products.css";
import Header from "../Header";
import Footer from "../Footer";
import producthome from "../assests/image.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import leatherImage from "../assests/Rectangle 11.jpg";

// our products content
const products = [
  { name: "Laptop Bags", img: "./images/laptop bag.webp" },
  { name: "Tote Bags", img: "./images/Tote bags.jpg" },
  { name: "Crossbody Bags", img: "./images/crossbody bags.jpg" },
  { name: "Bifold Wallets", img: "./images/bifold wallets.jpg" },
  { name: "Clutches", img: "./images/Clutches.jpg" },
  { name: "Messenger Bags", img: "./images/Messenger bags.jpg" },
  { name: "Travel Wallets", img: "./images/Travel wallets.jpg" },
  { name: "Shoulder Bags", img: "./images/Shoulder bags.webp" },
  { name: "Card Holders", img: "./images/Card Holder.jpg" },
  { name: "Document Holders", img: "./images/documents holder.webp" },
  { name: "Briefcases", img: "./images/Briefcases.jpg" },
  { name: "Turmeric Powder", img: "./images/turmeric.png" },
  { name: "Coriander Powder", img: "./images/coriender.png" },
  { name: "Chilli Powder", img: "./images/chilli.png" },
  { name: "Asafoetida Powder", img: "./images/asafoetida.png" },
];
// products services

const features = [
  {
    title: "Top-Notch Quality",
    description:
      "With our production facility in Surat, we manufacture high-quality leather threads with precision, durability, and excellence.",
  },
  {
    title: "Handcrafted Construction",
    description:
      "All the leather products are made by our experienced and skilled craftsmen. Because we stand behind our leather.",
  },
  {
    title: "Extensive Collection",
    description:
      "We manufacture and export a wide collection of leather products, each with its unique design and features.",
  },
  {
    title: "On-time Delivery",
    description:
      "We are committed to providing our customers with Just in Time delivery through professional planning.",
  },
];

// show the products
function Products() {
  const [showAll, setShowAll] = useState(false);

  // Show first 8 items (2 rows with col-md-3) or full
  const visibleProducts = showAll ? products : products.slice(0, 8);

  return (
    <div>
      {/* header content */}
      <Header />

      {/* products image home page */}
      <div className="position-relative product-section">
        <img src={producthome} alt="homepage" className="w-100 product-img" />
        <div className="position-absolute top-50 start-50 translate-middle text-center">
          <h1 className="text-white fw-bold product-heading">Products</h1>
        </div>
      </div>

      {/* our products content */}

      <div className="container">
        <div className="ourproduct-section">
          <h2 className="heading text-center fw-bold text-success">
            Our Products
          </h2>
          <div className="row g-4">
            {visibleProducts.map((product, index) => (
              <div key={index} className="col-12 col-md-4 col-lg-3">
                <div className="card border-0 shadow-sm h-100">
                  <img
                    src={product.img}
                    className="card-img-top"
                    alt={product.name}
                  />
                  <div className="card-body text-center">
                    <h6 className="card-title mb-0">{product.name}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="view-btn btn-success"
            >
              {showAll ? "View Less" : "View All"}
            </button>
          </div>
        </div>
      </div>

      {/* customer services content */}
      <div className="good-services-content">
        <div className="row align-items-center">
          {/* Image Column */}
          <div className="col-md-4 mb-4 mb-md-0">
            <img
              src={leatherImage}
              alt="Leather Work"
              className="img-fluid rounded-4"
            />
          </div>

          {/* Content Column */}
          <div className="col-md-8">
            <h2 className="fw-bold good-leather-title">
              <span>Get the Best Deal on Leather Goods!</span>
            </h2>
            <div className="text-secondary">
              <p>
                We offer a stylish and high-quality collection of leather
                accessories, designed for both personal and professional use.
              </p>

              <p>
                Looking for quality leather products? We manufacture handmade
                bags, wallets, Laptop bags and accessories at the best industry
                prices. No more bad leather experience premium craftsmanship
                with us.
              </p>
              <p>
                We offer custom and private-label manufacturing, including logo
                embossing for your brand. Our team will connect with you within
                24 hours. Get in touch today!
              </p>
            </div>
            <a href="#" className="fw-bold good-learn">
            Inquiry Now
            </a>
          </div>
        </div>
      </div>

      {/* products services content */}

      <div className="container">
        <div className="product-services">
          <div className="row">
            <div className="col-12">
              {features.map((feature, index) => (
                <div key={index} className="service-section rounded">
                  <h5 className="num-text fw-bold">
                    {index + 1}. {feature.title}
                  </h5>
                  <p className="text-content mb-0">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* footer content */}
      <Footer />
    </div>
  );
}

export default Products;
