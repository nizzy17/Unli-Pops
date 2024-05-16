import React from "react";
import data from "./../../products";
// import Header from "../../components/header";
import ProdSlider from "../../components/slider/ProdSlider";
import PauseOnHover from "../../components/slider";
import "./LandingPage.css";
import Footer from "../../components/Footer/Footer";
function LandingPage() {
  return (
    <div className="Landing__page">
      {/* <Header /> */}
      <div className="landing-page-hero">
        <PauseOnHover />
      </div>
      <div className="landing-page-categories">
        <div className="landing-page-category" id="mobile">
          <h1 className="landing-page-heading">
            Robeclar Softdrinks Enterprises
          </h1>
          <ProdSlider
            data={data.filter((item) => item.catogeries === "phone")}
          />
        </div>
        <div className="landing-page-category" id="elec">
          <h1 className="landing-page-heading">SRJ STORE</h1>
          <ProdSlider
            data={data.filter((item) => item.catogeries === "Electronics")}
          />
        </div>
        <div className="landing-page-category" id="sport">
          <h1 className="landing-page-heading">Sta Ana Softdrink Dealer</h1>
          <ProdSlider
            data={data.filter((item) => item.catogeries === "Sports")}
          />
        </div>
        <div className="landing-page-category" id="fashion">
          <h1 className="landing-page-heading">SJS Enterprises</h1>
          <ProdSlider
            data={data.filter((item) => item.catogeries === "fashion")}
          />
        </div>
        <div className="landing-page-category" id="beauty">
          <h1 className="landing-page-heading">Cirila Enterprise</h1>
          <ProdSlider
            data={data.filter(
              (item) => item.catogeries === "Beauty and Cosmetics"
            )}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
