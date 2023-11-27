import React, { useState, useEffect } from "react";
import "./../App.css";

const Heading = () => {


  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = prevScrollPos < currentScrollPos;

      setPrevScrollPos(currentScrollPos);

      if (isScrollingDown && visible) {
        setVisible(false);
      } else if (!isScrollingDown && !visible) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <div>
      <div
        className="header-image"
        style={{ top: visible ? "0" : "-120px", transition: "top 0.3s" }}
      >
        <div>
          <img
            src={process.env.PUBLIC_URL + "/yc.png"}
            alt="yc.png"
            className="edolon-logo"
          />
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/nav-arrow-black.svg"}
            alt="yc.png"
            className="edolon-menu-arrow"
          />
        </div>

        <div className="the-divs">
          <div> </div>
          <div> </div>
          <div> </div>
          <div> </div>
          <div> </div>
          <div> </div>
        </div>

        <ul className="first-ul">
          <li>About Us</li>
          <li>Product and Services</li>
          <li>Risk Management</li>
        </ul>

        <ul>
          <li>Start Investing</li>
          <li>Client Login</li>
        </ul>
      </div>

      <div className="bg-text">
        <p>
          This is financial <h1>Sciences</h1>
        </p>
      </div>

    </div>
  );
};

export default Heading;
