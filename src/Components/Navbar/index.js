import React from "react";
import DelayLink from "react-delay-link";
//images
import cfmcLogo from "../../Images/Navbar/cfmcLogo.png";
import cfmcLogoWhite from "../../Images/Navbar/cfmcLogoWhite.png";
import mobMenuImg from "../../Images/Navbar/mob-menu-img.png";
import cfmcMobileLogo from "../../Images/Navbar/cfmc-icon.jpg";

const Index = (props) => {
  const navItems = [
    "HOME",
    "ABOUT",
    "EVENTS",
    "VIDEOS",
    "CONTACT",
  ];
  //conditional styles for hr element
  const setStyle = (val) => {
    let style = {};
    if (props.currPos === 0 && props.navToggle !== true) {
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
      className={
        !props.navToggle
          ? "nav__container"
          : "nav__container -hide"
      }
      style={
        props.currPos !== 0
          ? { backgroundColor: "white" }
          : {
              backgroundColor: "transparent",
              boxShadow: "none",
            }
      }
    >
      <nav className="nav">
        <DelayLink
          to="/"
          delay={200}
          clickAction={() => {
            if (props.activePage !== "HOME") {
              props.setIsLoading(true);
            }
          }}
        >
          <img
            alt="cfmc logo"
            className="logo"
            src={
              props.currPos !== 0 ? cfmcLogo : cfmcLogoWhite
            }
          />
        </DelayLink>
        <section
          className="nav__links-and-clickout"
          style={props.navToggle ? { right: "0" } : {}}
        >
          <ul className="nav__links">
            <li className="link__mobileLogo">
              <img alt="cfmc logo" src={cfmcMobileLogo} />
            </li>
            {navItems.map((item, index) => {
              return (
                <li
                  key={index}
                  style={
                    props.currPos === 0 &&
                    props.navToggle !== true
                      ? { color: "white" }
                      : null
                  }
                >
                  <DelayLink
                    delay={200}
                    replace={false}
                    to={
                      item === "HOME"
                        ? "/"
                        : "/" + item.toLowerCase()
                    }
                    clickAction={() => {
                      props.setNavToggle(false);
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
          <div
            className="clickout"
            onClick={() => {
              props.setNavToggle(false);
            }}
          ></div>
        </section>
        <img
          style={
            props.currPos === 0
              ? { filter: "invert(100%)" }
              : null
          }
          className={
            props.navToggle === true
              ? "mobile__menuImg -hidden"
              : "mobile__menuImg"
          }
          alt="mobile"
          src={mobMenuImg}
          onClick={() => {
            props.setNavToggle(true);
          }}
        />
      </nav>
    </section>
  );
};

export default Index;
