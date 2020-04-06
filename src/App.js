import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
//Components
import Navbar from "./Components/Navbar/Index";
import Home from "./Components/Home/index";
import Footer from "./Components/Footer/index";
import About from "./Components/About/Index";
import Events from "./Components/AllEvents/Index";
import Live from "./Components/Live/index";
import EventInstance from "./Components/EventInstance/index";

const App = () => {
  const [activePage, setActivePage] = useState("HOME");
  return (
    <React.Fragment>
      <Router>
        <Navbar activePage={activePage} />
        <Switch>
          <Route exact path="/">
            <Home setActivePage={setActivePage} />
          </Route>
          <Route path="/about">
            <About setActivePage={setActivePage} />
          </Route>
          <Route path="/events">
            <Events setActivePage={setActivePage} />
          </Route>
          <Route path="/live">
            <Live setActivePage={setActivePage} />
          </Route>
          <Route path="/instance">
            <EventInstance setActivePage={setActivePage} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
};

export default App;
