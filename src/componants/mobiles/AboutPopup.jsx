import React from "react";
import { Link } from "react-router-dom";
import cartimg from "./mobile-imgs/icons8-cart-50.png";

const AboutPopup = ({ trigger, setTrigger, product, handleClick }) => {
  // console.log("props product", product);
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="sub-about-text-div">
          <div className="aboute-name-rate-div">
            <h3 className="about-phone-name">
              {/* I Phone 14 pro (4GB RAM,256GB. <br /> Glowing Gold) */}
              {product.name}
            </h3>

            <div className="about-rate-div">
              <div className="tax-div">
                {/* <h3 className="about-rate-h3">₹12,5999.00</h3> */}
                <h3 className="about-rate-h3">₹ {product.rate}</h3>
                <h6 className="taxe-h6">(Incl. all Taxes)</h6>
              </div>
              <div className="or-div">
                {" "}
                <h5 className="or">OR</h5>
              </div>
              <div className="emi-div">
                <h3 className="about-rate-h3">{product.emi}</h3>
                <h6 className="emi-link-h6">
                  <Link className="emi-h6">EMI Options</Link>{" "}
                </h6>
              </div>
            </div>
          </div>

          <div className="about-features-div">
            <h4 className="features-h4">Key Features</h4>

            <ul className="feature-list">
              <li>Display: 6.58 inches (16.72 cm), LCD</li>
              <li>Memory: 8GB RAM, 128GB ROM, Memory Card up to 1TB</li>
              <li>Camera: 50 MP + 2 MP Dual Rear & 16 MP Front Camera</li>
              <li>Battery: 5000 mAh with 18 Watts Fast Charging</li>
            </ul>
          </div>

          <div className="about-cart-div">
            <button onClick={() => setTrigger(false)} className="close-btn">
              Close
            </button>
            {/* {children} */}

            <div
              className="about-cart-btn-div"
              onClick={() => handleClick(product)}
            >
              {console.log(product, "ggg")}
              <img src={cartimg} className="about-cart-img" alt="" />
              <input
                type="Button"
                className="about-cart-btn"
                value="Add Cart"
              />
            </div>
          </div>
        </div>

        <div className="about-line"></div>

        <div className="sub-about-phone-div">
          <img
            // src="https://pngimg.com/d/iphone_14_PNG6.png"
            src={product.img}
            className="sub-about-phone-img"
            alt="phoneImage"
          />
        </div>
      </div>
    </div>
  ) : (
    " "
  );
};

export default AboutPopup;
