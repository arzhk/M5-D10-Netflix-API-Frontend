import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import MoviesContainer from "./Components/MoviesContainer";
import DetailsContainer from "./Components/DetailsContainer";
import TVShowsContainer from "./Components/TVShowsContainer";
import Navbar from "./Component/NavBar";
import Jumbotron from "./Component/Jumbotron";
import Footer from "./Component/Footer";
import Registration from "./Components/Registration";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Route path="/" exact component={Jumbotron} />
          <Route path="/" exact render={(props) => <MoviesContainer {...props} />} />
          <Route path="/details/:id" exact component={DetailsContainer} />
          <Route path="/tvshows" exact component={TVShowsContainer} />
          <Route path="/registration" exact component={Registration} />
          <Route path="/" component={Footer} />
        </Router>
      </>
    );
  }
}

export default App;
