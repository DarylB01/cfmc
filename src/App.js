import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
//Components
import Navbar from "./Components/Navbar/Index";
import Home from "./Components/Home/index";
import Footer from "./Components/Footer/index";
import About from "./Components/About/Index";
import Events from "./Components/AllEvents/Index";
import Live from "./Components/Live/index";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/live">
            <Live />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
};

export default App;
