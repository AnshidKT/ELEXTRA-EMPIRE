import React from "react";
import navlogo from "./home-imgs/pngtree-design-3d-electronic-logo-png-image_8974833.png";
import cart from "./home-imgs/icons8-cart-50.png";
import login from "./home-imgs/icons8-account-50 (1).png";
import { navitems } from "./Datas";
import { Link, Outlet } from "react-router-dom";

const HomeNav = () => {
  return (
    <>
      <div className="main-nav">
        <div className="navbar">
          <div className="logo-div">
            <Link to="/">
              <img src={navlogo} className="navlogo" />
            </Link>
            <h3 className="nav-edu">EDU ELECTRONICS</h3>
          </div>

          <div className="nav-inpt-div">
            <input
              type="text"
              placeholder="Find youre favorite prodects"
              className="nav-input"
            />
            <img
              src="https://img.icons8.com/?size=512&id=132&format=png"
              className="search-png"
            />
          </div>
          <div className="cart-login-div">
            <div className="cart-div">
              <img src={cart} className="cart-img" />
              <span className="cart-text">Cart</span>
            </div>
            <div className="line"></div>
            <div className="cart-div">
              <img src={login} className="cart-img" />
              <span className="cart-text">Login</span>
            </div>
          </div>
        </div>

        <div className="subnav">
          {navitems.map((item) => (
            <div className="dropdown">
              <div className="dropbtn">
                <h3 className="subnav-items">{item.prodect}</h3>
                <img src={item.arrow} className="arrow" />
              </div>
              <div className="dropdown-content">
                <h6 className="cmpny-name">{item.cmpny1}</h6>
                <h6 className="cmpny-name">{item.cmpny2}</h6>
                <h6 className="cmpny-name">{item.cmpny3}</h6>
                <h6 className="cmpny-name">{item.cmpny4}</h6>
                <h6 className="cmpny-name">{item.cmpny5}</h6>
                <a href="#"> </a>
                <a href="#"></a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default HomeNav;