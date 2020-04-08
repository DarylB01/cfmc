import React from "react";
import DelayLink from "react-delay-link";
//images
import cfmcLogo from "../../Images/Navbar/cfmcLogo.png";
import cfmcLogoWhite from "../../Images/Navbar/cfmcLogoWhite.png";

const Index = (props) => {
  const navItems = ["HOME", "ABOUT", "EVENTS", "LIVE", "CONTACT"];
  //conditional styles for hr element
  const setStyle = (val) => {
    let style = {};

    if (props.currPos === 0) {
      style.borderColor = "white";
    }
    if (props.currPos !== 0) {
      style.borderColor = null;
    }
    if (props.activePage === val) {
      style.width = "100%";
      style.opacity = "1";
    } else if (props.activePage !== val) {
      style.width = null;
      style.opacity = null;
    }
    return style;
  };
  return (
    <section
      className="nav__container"
      style={
        props.currPos !== 0
          ? { backgroundColor: "white" }
          : { backgroundColor: "transparent", boxShadow: "none" }
      }
    >
      <nav className="nav">
        <img
          alt="cfmc logo"
          className="logo"
          src={props.currPos !== 0 ? cfmcLogo : cfmcLogoWhite}
        />
        <ul className="links">
          {navItems.map((item, index) => {
            return (
              <li
                key={index}
                style={props.currPos === 0 ? { color: "white" } : null}
              >
                <DelayLink
                  delay={200}
                  replace={false}
                  to={item === "HOME" ? "/" : item.toLowerCase()}
                  clickAction={() => {
                    if (props.activePage !== item) {
                      return props.setIsLoading(true);
                    } else {
                      return null;
                    }
                  }}
                >
                  {item}
                  <hr style={setStyle(item)} />
                </DelayLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};

export default Index;
