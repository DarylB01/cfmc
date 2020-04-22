import React, { useState, useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

//Static Components
import Navbar from "./Components/Navbar/index";
import Footer from "./Components/Footer/index";
import Loader from "./Components/Loader";
//Page Components
import Home from "./Components/Home/index";
import About from "./Components/About/index";
import AllEvents from "./Components/AllEvents/index";
import Live from "./Components/Live/index";
import EventInstance from "./Components/EventInstance/index";
import Contact from "./Components/Contact/index";
import VideoInstance from "./Components/VideoInstance";
//body scroll lock module
import disableScroll from "disable-scroll";

const App = () => {
  const componentsArray = [
    { Comp: Home, route: "/" },
    { Comp: About, route: "/about" },
    { Comp: AllEvents, route: "/events" },
    { Comp: Live, route: "/live" },
    {
      Comp: EventInstance,
      route: "/event/:id",
    },
    { Comp: Contact, route: "/contact" },
    {
      Comp: VideoInstance,
      route: "/video/:id",
    },
  ];
  //state
  const [activePage, setActivePage] = useState("HOME");
  const [isLoading, setIsLoading] = useState(false);
  const [prevPos1, setPrevPos] = useState(0);
  const [currPos1, setCurrPos] = useState(0);
  const [navToggle, setNavToggle] = useState(false);
  //state functions
  const setDelayIsLoading = (val) => {
    setTimeout(() => {
      setIsLoading(val);
    }, 1500);
  };
  //track scrolling value to hide nav
  useScrollPosition(({ prevPos, currPos }) => {
    setPrevPos(prevPos.y);
    setCurrPos(currPos.y);
  });
  //initial mount
  useEffect(() => {
    //setpage to laoding
    setIsLoading(true);
  }, []);

  useEffect(() => {
    //disable scroll when mobile menu is toggled
    if (navToggle) {
      disableScroll.on();
    } else {
      disableScroll.off();
    }
  }, [navToggle]);

  return (
    <React.Fragment>
      <Router>
        <Loader isLoading={isLoading} />
        <Navbar
          prevPos={prevPos1}
          currPos={currPos1}
          activePage={activePage}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          setNavToggle={setNavToggle}
          navToggle={navToggle}
        />
        <Switch>
          {componentsArray.map((item, index) => {
            return (
              <Route
                key={`route ${index}`}
                exact={item.route === "/" ? true : null}
                path={item.route}
                render={(props) => (
                  <item.Comp
                    {...props}
                    setActivePage={setActivePage}
                    setDelayIsLoading={setDelayIsLoading}
                    setIsLoading={setIsLoading}
                  />
                )}
              />
            );
          })}
        </Switch>
        <Footer setIsLoading={setIsLoading} activePage={activePage} />
      </Router>
    </React.Fragment>
  );
};

export default App;
