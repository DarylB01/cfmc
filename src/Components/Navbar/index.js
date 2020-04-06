import React, { useState } from "react";
import { Link } from "react-router-dom";
//images
import cfmcLogo from "../../Images/Navbar/cfmcLogo.png";
const Index = (props) => {
  const navItems = ["HOME", "ABOUT", "EVENTS", "LIVE", "CONTACT"];
  //state
  return (
    <section className="nav__container">
      <nav className="nav">
        <img alt="cfmc logo" className="logo" src={cfmcLogo} />
        <ul className="links">
          {navItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item === "HOME" ? "/" : item.toLowerCase()}>
                  {item}
                  <hr
                    style={
                      props.activePage === item
                        ? { opacity: "1", width: "100%" }
                        : null
                    }
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};

export default Index;
