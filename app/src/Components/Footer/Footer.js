import React from "react";
import "./Footer.css";

const Footer = ({year}) => {
  return (
    <div>
      <footer>
        <span>React-blog {year}</span>
      </footer>
    </div>
  );
};

export default Footer;
