import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer-1">
        <div className="top-footer">
          <img className="logo" src="/images/logo.png" alt="" />

          <p>2017-2023 Bark&Saw.</p>

          <div className="top-icons">
            <img
              className="icons"
              src="/images/social media iconspcoal.png"
              alt="socials"
            />
            <img
              className="icons"
              src="/images/social media iconspcoal-1.png"
              alt="socials"
            />
            <img
              className="icons"
              src="/images/Whatsappspcoal.png"
              alt="socials"
            />
          </div>
        </div>
      </footer>
      <footer>
        <div className="bottom-footer">
          <div className="footer-contents">
            <h3>Contact Us</h3>
            <NavLink to="/">General Contact</NavLink>
            <NavLink to="/">Contact Stores</NavLink>
          </div>
          <div className="footer-contents">
            <h3>Contact Us</h3>
            <NavLink to="/">General Contact</NavLink>
            <NavLink to="/">Contact Stores</NavLink>
          </div>
          <div className="footer-contents">
            <h3>Contact Us</h3>
            <NavLink to="/">General Contact</NavLink>
            <NavLink to="/">Contact Stores</NavLink>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
