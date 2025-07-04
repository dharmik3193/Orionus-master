import React from "react";
import Header from "../Header";
import Ourteam from "../assests/image6.png";
import "../css/OurTeam.css";
import founder1 from "../assests/Rectangle 3563.png";
import founder2 from "../assests/Rectangle 3563 (1).png";
import founder3 from "../assests/Rectangle 3563 (2).png";
import Footer from "../Footer";

function OurTeam() {
  return (
    <div>
      {/* header */}
      <Header />

      {/* our team */}
      <section className="our-team-section container-fluid p-0">
        <div className="team-banner d-flex align-items-center justify-content-center">
          <img src={Ourteam} alt="team image" className="w-100 teamimg" />
          <h1 className="team-title">Our Team</h1>
        </div>
        <div className="container">
          <div className="team-card">
            <p className="team-text">
              At Orionus Exports, our success comes from the dedication and
              expertise of our team. With year 2024 of experience in leather
              craftsmanship,quality control,and global exports,we work together
              to bring you the finest leather products.
            </p>
          </div>
        </div>
      </section>

      {/* our founder */}

      <div className="container">
        <h2 className="founder-heading text-center">Meet Our Founders</h2>

        {/* Founder 1 */}
        <div className="fdetails row align-items-center mb-100">
          <div className="Fheading1 col-md-7">
            <h4 className="Fwork">
              <strong className="Fname">Daksh Ukani</strong> – Founder
            </h4>
            <div className="ftext">
              <p>
                A visionary leader with a passion for premium leather products,
                Daksh Ukani ensures every product meets the highest standards of
                quality and craftsmanship.
              </p>
            </div>
          </div>
          <div className="fimage col-md-5 text-center">
{/*             <img src={founder1} alt="John Doe" className="img-fluid rounded" /> */}
          </div>
        </div>

        {/* Founder 2 */}
        <div className=" fdetails row align-items-center mb-100 flex-md-row-reverse">
          <div className="Fheading2 col-md-7">
            <h4 className="Fwork">
              <strong className="Fname">Heet Khadsaliya</strong> – Founder
            </h4>
            <div className="ftext">
              <p>
                With a strong focus on efficiency and precision, Heet Khadsaliya
                oversees the production process, ensuring smooth operations and
                timely deliveries.
              </p>
            </div>
          </div>
          <div className="fimage col-md-5 text-center">
{/*             <img src={founder2} alt="Allen Roy" className="img-fluid rounded" /> */}
          </div>
        </div>

        {/* Founder 3 */}
        <div className="fdetails row align-items-center mb-100">
          <div className="Fheading1 col-md-7">
            <h4 className="Fwork">
              <strong className="Fname">Om Parsana</strong>– Founder
            </h4>
            <div className="ftext">
              <p>
                An expert in international trade, Om Parsana builds strong
                relationships with clients worldwide, helping expand our brand’s
                global reach.
              </p>
            </div>
          </div>
          <div className="fimage col-md-5 text-center">
{/*             <img
              src={founder3}
              alt="Domonic Toretto"
              className="img-fluid rounded"
            /> */}
          </div>
        </div>
      </div>

      {/* footer */}

      <Footer />
    </div>
  );
}

export default OurTeam;
