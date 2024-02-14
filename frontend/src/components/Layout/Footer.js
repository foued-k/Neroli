import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h4 className="text-center">All Right reserved &copy; Neroli </h4>
      <p className="text-center mt-3"></p>
      <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
      <Link to="/policy">Privacy Policy</Link>
    </div>
  );
};

export default Footer;
