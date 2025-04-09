import React from "react";
import "../styles/footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link
import { Navigate } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Cruising 350</h2>
          <p style={{color:"white"}}>Your one-stop destination for premium bike accessories.</p>
        </div>
        <div className="footer-links">
          <Link to="/about">About Us</Link> {/* Updated Link */}
          <Link to="/contactus">Contact</Link>
          <Link to="/privacypolicy">Privacy Policy</Link>
          <Link to="/terms&conditions">Terms & Conditions</Link>
        </div>
        <div className="footer-socials">
          <a href="https://www.facebook.com" target="blank">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/cruising350/" target="blank">
            <FaInstagram />
          </a>
          <a href="https://www.twitter.com" target="blank">
            <FaTwitter />
          </a>
          <a href="https://www.youtube.com/@Cruising350" target="blank">
            <FaYoutube />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p style={{color:"rgb(241, 34, 124)"}}>© 2024 Cruising 350. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
